import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Style from './table.module.css';

function Table({ jsonData, navigationData, hideColumns, title, showUserEdit, showPencil }) {
    const navigate = useNavigate();
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    if (!jsonData || jsonData.length === 0) {
        return <p>Tabel is leeg.</p>;
    }

    if (!navigationData || navigationData.length === 0) {
        return <p>Interne fout: Missing navigation data</p>;
    }

    const sortedJsonData = sortConfig.key
        ? [...jsonData].sort((a, b) => {
            const varA = a[sortConfig.key];
            const varB = b[sortConfig.key];

            if (varA < varB) return sortConfig.direction === 'asc' ? -1 : 1;
            if (varA > varB) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        }) : jsonData; // die : jsonData aan het einde hiernaast is dus als het geen asc en geen desc is dat ie dan 'reset' en de oude volgorde laat zien


    const handleSort = (key) => {
        if (sortConfig.key === key) {
            if (sortConfig.direction === 'asc') {
                setSortConfig({ key, direction: 'desc' });
            } else if (sortConfig.direction === 'desc') {
                setSortConfig({ key: null, direction: 'normal' }); // normal is dus de eerste volgorde die je als eerste ziet, soort reset snap je??
            }
        } else {
            setSortConfig({ key, direction: 'asc' });
        }
    };

    const getSortIcon = (header) => {
        if (sortConfig.key === header) {
            return sortConfig.direction === 'asc'
                ? "/icons/sort-up.svg"
                : "/icons/sort-down.svg";
        }
        return "/icons/arrow-up-down.svg";
    };


    const handleEditClick = (index) => {
        if (!navigationData) return;
        const routeObj = navigationData[index];
        const destination = routeObj && routeObj[index];
        if (destination) {
            navigate(destination);
        } else {
            console.error("Geen navigatie route gevonden voor index", index);
        }
    };
    

    let headers = Object.keys(jsonData[0]);

    // Hide columns hiden
    if (hideColumns && hideColumns.length > 0) {
        headers = headers.filter(header => !hideColumns.includes(header));
    }

    const spotsAvailable = 5;
    let emptyHeaders = Array.from({ length: Math.max(spotsAvailable - headers.length, 0) });

    return (
        <div className={Style.colorTable}>
            {title && <div className={Style.tableTitle}>{title}</div>}

            <table>
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} className={Style.header} onClick={() => handleSort(header)}>
                            <div className={Style.headerContent}>
                                <span>{header}</span>
                                <img
                                    src={getSortIcon(header)} alt="sort-icon" className={Style.sortIcon}/>
                            </div>
                        </th>
                    ))}
                    {emptyHeaders.map((_, index) => (
                        <th key={`empty-header-${index}`}></th>
                    ))}
                    {(showUserEdit || showPencil) && <th></th>}
                </tr>
                </thead>
                <tbody>
                {sortedJsonData.map((row, rowIndex) => (
                    <tr key={rowIndex} onClick={() => handleEditClick(rowIndex)}>
                        {headers.map((header, colIndex) => (
                            <td key={colIndex}>{row[header]}</td>
                        ))}
                        {emptyHeaders.map((_, index) => (
                            <td key={`empty-cell-${index}`}></td>
                        ))}
                        {(showUserEdit || showPencil) && (
                            <td className={Style.editIconCells}>
                                {showUserEdit && (
                                    <img src="/icons/editUser.svg" alt="edit-user" className={Style.editUserIcon} />
                                )}
                                {showPencil && (
                                    <img src="/icons/pencil.svg" alt="edit" className={Style.editIcon} onClick={() => handleEditClick(rowIndex)}
                                    />
                                )}
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

