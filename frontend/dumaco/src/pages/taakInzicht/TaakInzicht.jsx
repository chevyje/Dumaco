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
                    <div className={Style.contentDescription}>
                        <h3 className={Style.contentDescriptionTitle}>Opmerkingen</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dictum nisl. Pellentesque eget porta ligula. Quisque id blandit nunc, non sagittis purus. Aliquam erat volutpat. Nunc sed magna et nunc accumsan malesuada sit amet vel leo.</p>
                    </div>
                    <div className={Style.contentLocation}>
                        <h3 className={Style.contentDescriptionTitle}>Locatie</h3>
                        <p className={Style.locationDescription}>Zetten Dynacel</p>
                    </div>
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