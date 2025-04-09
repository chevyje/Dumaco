import { useNavigate } from "react-router-dom";
import Style from './table.module.css';

function Table({ jsonData, navigationData, title, showUserEdit, showPencil }) {
    const navigate = useNavigate();

    if (!jsonData || jsonData.length === 0) {
        return <p>No data available</p>;
    }

    if (!navigationData || navigationData.length === 0) {
        return <p>Missing navigation data</p>;
    }

    const handleEditClick = (index) => {
        const routeObj = navigationData[index];
        const destination = routeObj && routeObj[index];
        if (destination) {
            navigate(destination);
        } else {
            console.error("Geen navigatie route gevonden voor index", index);
        }
    };

    let headers = Object.keys(jsonData[0]);
    const spotsAvailable = 5;
    let emptyHeaders = Array.from({ length: Math.max(spotsAvailable - headers.length, 0) });

    return (
        <div className={Style.colorTable}>
            {title && <div className={Style.tableTitle}>{title}</div>}

            <table>
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                    {emptyHeaders.map((_, index) => (
                        <th key={`empty-header-${index}`}></th>
                    ))}
                    {(showUserEdit || showPencil) && <th></th>}
                </tr>
                </thead>
                <tbody>
                {jsonData.map((row, rowIndex) => (
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
                                    <img
                                        src="/icons/pencil.svg"
                                        alt="edit"
                                        className={Style.editIcon}
                                        onClick={() => handleEditClick(rowIndex)}
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

