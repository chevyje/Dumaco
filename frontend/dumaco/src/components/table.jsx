import '../styling/table.css';

function Table({ columns, columnsToHide, data, primaryColor, secondaryColor, tertiareColor, title }) {
    const visibleColumnsAmount = columns.filter((col) => !columnsToHide.includes(col));
    const spotsAvailable = 5;
    const diff = spotsAvailable - visibleColumnsAmount.length;

    return (
        <div>
            {title && (
                <div className="table-title"
                    style={{
                        backgroundColor: primaryColor
                    }}
                >
                    {title}
                </div>
            )}

            <table>
                <thead>
                <tr>
                    {
                        visibleColumnsAmount.map((col) => (
                            <th className="table-header"
                                key={col}
                                style={{
                                    backgroundColor: primaryColor
                                }}
                            >
                                {overrideColumnName(col)}
                            </th>
                        ))
                    }

                    {Array.from({ length: diff }).map((_, index) => (
                        <th key={`empty-${index}`}></th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={row.id} style={{ backgroundColor: index % 2 === 0 ? secondaryColor : tertiareColor, color: "black" }}>
                        {visibleColumnsAmount.map((col) => (
                            <td
                                key={`${col}-${row.id}`}
                                className="table-row"
                            >
                                {row[col] || "-"}
                            </td>
                        ))}

                        {Array.from({ length: diff }).map((_, index) => (
                            <td key={`empty-row-${index}`} style={{ backgroundColor: 'transparent' }}></td>
                        ))}

                        <td className="edit-icon-cells">
                            <img src="/icons/editUser.svg" alt="edit-user" className="edit-user-icon" />
                            <img src="/icons/pencil.svg" alt="edit" className="edit-icon" />
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function overrideColumnName(colName) {
    const mapping = { name: "Naam", age: "Leeftijd", lastLogin: "Laatste login" };
    return mapping[colName] || colName;
}

export default Table;
