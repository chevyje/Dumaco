import Collapse from "../components/collapse/collapseParent.jsx";
import "../styling/klantOverzicht.css"


function klantOverzicht() {
    return(
        <>
            <div className="CollapsTable">
                <Collapse />
                <Collapse />
                <Collapse />
            </div>
        </>
    );
}

export default klantOverzicht;
