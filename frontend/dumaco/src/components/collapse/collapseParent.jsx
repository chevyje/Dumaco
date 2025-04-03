import Collapsible from 'react-collapsible';
import Style from  "./collapse.module.css";
import Table from "./collapseTable.jsx"

function CollapseParent( {title, openByDefault, children}) {
    return (
        <div className={Style.collapse}>
            <Collapsible trigger={title} open={openByDefault}>
                {children}
            </Collapsible>
        </div>
    );
}

export default CollapseParent;