import Collapsible from 'react-collapsible';
import "./collapse.css";
import Table from "./collapseTable.jsx"

function CollapseParent( {title, openByDefault, children}) {
    return (
        <div className="collapse">
            <Collapsible trigger={title} open={openByDefault}>
                {children}
            </Collapsible>
        </div>
    );
}

export default CollapseParent;