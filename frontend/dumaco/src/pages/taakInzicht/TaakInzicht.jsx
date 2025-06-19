import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "./TaakInzicht.module.css";
import Button from "../../components/button/button.jsx";
import {useEffect, useState} from "react";
import {Navigate, useSearchParams} from "react-router-dom";

function taakInzicht() {
    const [palletID, setPalletID] = useState("");
    const [data, setData] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    const OrderId = searchParams.get("o.id");
    const ProductId = searchParams.get("p.id");
    const TaakId = searchParams.get("t.id");

    if(!OrderId || !ProductId || !TaakId) {
        return <Navigate to="/404-not-found" />;
    }
    const route = breadRouteGen({
        "/home": "Home",
        "/orders": "Orders",
        "/orders/order": "Order",
        "/orders/order/product": "Product",
        "/orders/order/product/taak": "Taak",
    });

    const AddPallet = async () => {
        try{
             await fetch("http://localhost:8080/api/pallet/productID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    palletID: palletID,
                    productID: ProductId
                })
            })
        }catch(error){

        }
    }

    const PalletID = (e) => {
        setPalletID(e.currentTarget.value);
    }

    const OpenDrawing = () => {
        window.open(data.drawing);
    }

    useEffect(() => {
        // Get all edits form database
        const getEdit = async (TaakId) => {
            try {
                const requestData = await fetch(`http://localhost:8080/api/edit/${TaakId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const rawData = await requestData.json();
                setData(rawData[0]);
            } catch (e) {
                console.log(e)
                return null;
            }
        }
        getEdit(TaakId);
    }, []);

    return (
        <>
            <Navbar title={"Taak " + TaakId} route={route}/>
            <div className={Style.container}>
                <div className={Style.gridDescription}>
                    <div className={Style.contentDescription}>
                        <h3 className={Style.contentDescriptionTitle}>Opmerkingen</h3>
                        <p>{data ? data.comment : "Geen opmerking beschikbaar"}</p>
                    </div>
                    <div className={Style.contentLocation}>
                        <h3 className={Style.contentDescriptionTitle}>Locatie</h3>
                        <p className={Style.locationDescription}>Zetten Dynacel</p>
                    </div>
                    <div className={Style.viewDrawing}>
                        <div className={Style.viewDrawingIcon}>
                            <img src={`../../../icons/image-upscale.svg`} alt={"imageUpscale"} className={Style.iconUpscale}></img>
                        </div>
                        <div className={Style.viewDrawingText} onClick={OpenDrawing}>
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
                <div className={Style.gridPallet}>
                    <div className={Style.palletContainer}>
                        <div className={Style.palletTitle}>
                            <p>Pallet toevoegen</p>
                        </div>
                        <div className={Style.palletInput}>
                            <input value={palletID} onChange={PalletID}></input>
                        </div>
                        <div className={Style.palletButton}>
                            <Button title="Toevoegen" color={"#0068ff"} borderColor={"#0068ff"} textColor={"#000000"} triggerFunction={AddPallet} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default taakInzicht;
