import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Navbar from "../../components/navbar/navbar.jsx";

function taakInzicht() {

    const route = breadRouteGen({
        "/home": "Home",
        "/orderbonnenkantoor": "Orderbonnen",
        "/orderbonnenkantoor/order": "Order",
        "/orderbonnenkantoor/order/product": "Product",
        "/orderbonnenkantoor/order/product/taak": "Taak",
    });

    return (
        <>
            <Navbar title={"Taak"} route={route}/>
        </>
    );
}

export default taakInzicht;