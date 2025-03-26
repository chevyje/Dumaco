import { useNavigate } from "react-router-dom";
import '../styling/table.css';

function Table({ jsonData, title, showUserEdit, showPencil, editPageFunction }) {
    const navigate = useNavigate();

    if (!jsonData || jsonData.length === 0) {
        return <p>No data available</p>;
    }

    if ((editPageFunction === undefined || editPageFunction === null) && showPencil) {
        return <p>editPageFunction is onjuist of bestaat niet. Geef een functie mee.</p>;
    }

    let headers = Object.keys(jsonData[0]);
    const spotsAvailable = 5;
    let emptyHeaders = Array.from({ length: Math.max(spotsAvailable - headers.length, 0) });

    return (
        <div className="colorTable">
            {title && <div className="table-title">{title}</div>}

            <table>
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                    {emptyHeaders.map((_, index) => (
                        <th key={`empty-header-${index}`}></th>
                    ))}
                    {(showUserEdit || showPencil)}
                </tr>
                </thead>
                <tbody>
                {jsonData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, colIndex) => (
                            <td key={colIndex}>{row[header]}</td>
                        ))}
                        {emptyHeaders.map((_, index) => (
                            <td key={`empty-cell-${index}`}></td>
                        ))}
                        {(showUserEdit || showPencil) && (
                            <td className="edit-icon-cells">
                                {showUserEdit && (
                                    <img src="/icons/editUser.svg" alt="edit-user" className="edit-user-icon" />
                                )}
                                {showPencil && editPageFunction && (
                                    <img
                                        src="/icons/pencil.svg"
                                        alt="edit"
                                        className="edit-icon"
                                        onClick={() => editPageFunction(navigate)} // ✅ Aangeroepen met navigate
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
