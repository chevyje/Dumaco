import Collapsible from 'react-collapsible';
import "../../styling/collapse.css";
import Table from "./collapseTable.jsx"

function CollapseParent( {jsonData, title, openByDefault, Legenda}) {
    return (
        <div className="collapse">
            <Collapsible trigger={title} open={openByDefault}>
                {Legenda &&
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
                <Table jsonData={jsonData} />
            </Collapsible>
        </div>
    );
}

export default CollapseParent;