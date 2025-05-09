import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Navbar from "../../components/navbar/navbar.jsx";

function taakInzicht() {

    const route = breadRouteGen({
        "/home": "Home",
        "/producten": "Producten",
        "/taak": "Taak"
    });

    return (
        <>
            <Navbar title={"Taak"} route={route}/>
        </>
    );
}

export default taakInzicht;