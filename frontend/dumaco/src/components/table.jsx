import '../styling/table.css'

function Table({ columns, columnsToHide, data, primaryColor, secondaryColor, tertiareColor, columnAlignments }) {
    return (
        <table style={{ position: "fixed", top: "13vh", left: "16vw", width: "80%", borderCollapse: "collapse", zIndex: 1 }}>
            <thead>
            <tr>
                {columns
                    .filter((col) => !columnsToHide.includes(col))
                    .map((col) => (
                        <th
                            key={col}
                            style={{
                                backgroundColor: primaryColor,
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "large",
                                height: "3vh",
                                paddingLeft: "1vw",
                                textAlign: columnAlignments[col] || "left"
                            }}
                        >
                            {overrideColumnName(col)}
                        </th>
                    ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={row.id} style={{ backgroundColor: index % 2 === 0 ? secondaryColor : tertiareColor, color: "black" }}>
                    {columns
                        .filter((col) => !columnsToHide.includes(col))
                        .map((col) => (
                            <td
                                key={`${col}-${row.id}`}
                                style={{
                                    textAlign: columnAlignments[col] || "left",
                                    padding: columnAlignments[col] === "left" ? "0.5vh 1vw 0.5vh 0.5vw" : "0.5vh 0.5vw 0.5vh 1vw"
                                }}
                            >
                                {row[col] || "-"}
                            </td>
                        ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}


function overrideColumnName(colName) {
    const mapping = { name: "Naam", age: "Leeftijd" };
    return mapping[colName] || colName;
}

export default Table;