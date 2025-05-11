import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "./TaakInzicht.module.css";

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
            <div className={Style.mainContainer}>
                <div className={Style.contentContainer}>
                    <div className={Style.contentDescription}></div>
                    <div className={Style.contentLocation}></div>
                    <div className={Style.viewDrawing}>
                        <div className={Style.viewDrawingIcon}>
                            <img src={`../../../icons/image-upscale.svg`} alt={"imageUpscale"} className={Style.icon}></img>
                        </div>
                        <div className={Style.viewDrawingText}>
                            <p>Bekijk tekening</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default taakInzicht;