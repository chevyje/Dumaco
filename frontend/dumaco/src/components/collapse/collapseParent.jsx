import Collapsible from 'react-collapsible';
import "../../styling/collapse.css";
import Table from "./collapseTable.jsx"

function CollapseParent() {
    return (
        <div className="collapse">
            <Collapsible trigger="Lopende Orderbonnen" open={true}>
                <Table key="table1" />
            </Collapsible>
        </div>
    );
}

export default CollapseParent;