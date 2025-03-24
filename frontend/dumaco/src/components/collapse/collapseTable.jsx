import "../../styling/collapseTable.css"
import CollapseParent from "./collapseParent.jsx";

function Table({ jsonData, title, openByDefault, legenda }) {
    if (!jsonData || jsonData.length === 0) {
        return <p>No data available</p>;
    }

    let headers = Object.keys(jsonData[0]);

    return (
        <CollapseParent title={title} openByDefault={openByDefault}>
            {legenda &&
                <div className="legenda">
                    <div className="vroeg">
                        <div style={{ backgroundColor: "green"}}></div>
                        <p>Te vroeg</p>
                    </div>
                    <div className="tijd">
                        <div style={{ backgroundColor: "purple"}}></div>
                        <p>Op tijd</p>
                    </div>
                    <div className="laat">
                        <div style={{ backgroundColor: "red"}}></div>
                        <p>Te laat</p>
                    </div>
                </div>
            }
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
        </CollapseParent>
    );
}

export default Table;