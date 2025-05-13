import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "./TaakInzicht.module.css";
import Button from "../../components/button/button.jsx";

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
            <div className={Style.container}>
                <div className={Style.gridDescription}>
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
                            <img src={`../../../icons/image-upscale.svg`} alt={"imageUpscale"} className={Style.iconUpscale}></img>
                        </div>
                        <div className={Style.viewDrawingText}>
                            <p>Bekijk tekening</p>
                        </div>
                    </div>
                </div>

                <div className={Style.gridClock}>
                    <div className={Style.clockContainer}>
                        <div className={`${Style.clockOff} ${Style.hidden}`}>
                            <div className={Style.clockTimes}>
                                <Button title={"Uitklokken"} color={"#FF3434"} textColor={"#FFFFFF"} borderColor={"#FF3434"} icon={"clock-off"} className={Style.clockOffBtn}/>
                                <div className={Style.timesTextContainer}>
                                    <div className={Style.clockOffInfoContainer}>
                                        <img src={"../../../icons/arrow-right.svg"} alt={"arrow to right"} className={Style.icon}></img>
                                        <div className={Style.clockTimeText}>14:15</div>
                                    </div>
                                    <div className={Style.clockOffInfoContainer}>
                                        <img src={"../../../icons/arrow-left.svg"} alt={"arrow to left"} className={Style.icon}></img>
                                        <div className={Style.clockTimeText}>--:--</div>
                                    </div>
                                    <div className={Style.clockOffInfoContainer}>
                                        <img src={"../../../icons/clock.svg"} alt={"clock"} className={Style.icon}></img>
                                        <div className={Style.clockTimeText}>--:--</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.clockIn}>
                            <div className={Style.clockInInfo}>
                                <Button title={"Inklokken"} color={"#0EAA00"} textColor={"#FFFFFF"} borderColor={"#0EAA00"} icon={"alarm"} className={Style.clockOffBtn}/>
                                <Button title={"Afronden"} color={"#0EAA00"} textColor={"#FFFFFF"} borderColor={"#0EAA00"} icon={"flag"} className={Style.clockOffBtn}/>
                                <div className={Style.clockInCurrentTime}>
                                    <img src={"../../../icons/clock.svg"} alt={"clock"} className={Style.clockInTimeIcon}></img>
                                    <p className={Style.clockInTimeText}>0:45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.gridBewerker}>
                    <div className={Style.huidigeBewerkingContainer}>
                        <div className={Style.huidigeBewerkingTitle}>
                            <p>Huidige bewerking</p>
                        </div>
                        <div className={Style.huidigeBewerkingPersoon}>
                            <img src={"../../../icons/user.svg"} alt={"user"} className={Style.huidigeBewerkingGebruikerIcon}></img>
                            <p>J. Blankers</p>
                        </div>
                        <div className={Style.huidigeBewerkingTimestamp}>
                            <div className={Style.huidigeBewerkingTimestampText}>
                                <p>05-03-2025 14:15</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default taakInzicht;
