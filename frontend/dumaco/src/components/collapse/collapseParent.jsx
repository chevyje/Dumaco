import Collapsible from 'react-collapsible';
import Style from  "./collapse.module.css";

function CollapseParent( {trigger, openByDefault, children}) {
    return (
        <div className={Style.collapse}>
            <Collapsible trigger={trigger} open={openByDefault}>
                {children}
            </Collapsible>
        </div>
    );
}

export default CollapseParent;