import Style from  "./collapseTable.module.css"
import CollapseParent from "./collapseParent.jsx";

function Table({ jsonData, title, openByDefault, legenda }) {
    if (!jsonData || jsonData.length === 0) {
        return <p>No data available</p>;
    }

    let headers = Object.keys(jsonData[0]);

    return (
        <CollapseParent trigger={title} openByDefault={openByDefault}>
            {legenda &&
                <div className={Style.legenda}>
                    <div className={Style.vroeg}>
                        <div style={{ backgroundColor: "green"}}></div>
                        <p>Te vroeg</p>
                    </div>
                    <div className={Style.tijd}>
                        <div style={{ backgroundColor: "purple"}}></div>
                        <p>Op tijd</p>
                    </div>
                    <div className={Style.laat}>
                        <div style={{ backgroundColor: "red"}}></div>
                        <p>Te laat</p>
                    </div>
                </div>
            }
            <div className={Style.grayTable}>
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
        </CollapseParent>
    );
}

export default Table;