import '../styling/table.css';

function Table({ jsonData, title }) {
    if (!jsonData || jsonData.length === 0) {
        return <p>No data available</p>;
    }

    let headers = Object.keys(jsonData[0]);
    return (
        <div className="colorTable">
            {title && (
                <div className="table-title">
                    {title}
                </div>
            )}

            <table>
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {jsonData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, colIndex) => (
                            <td key={colIndex}>{row[header]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
