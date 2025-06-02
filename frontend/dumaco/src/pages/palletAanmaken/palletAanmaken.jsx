import Navbar from "../../components/navbar/navbar.jsx";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Button from "../../components/button/Button.jsx";
import {useEffect, useRef, useState} from "react";
import JsBarcode from "jsbarcode";
import Style from "./palletAanmaken.module.css"

function PalletAanmaken() {
    const canvasRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [newCode, setNewCode] = useState(false);
    const [palletID, setPalletID] = useState("");

    const route = breadRouteGen({
        "/home": "Home",
        "/pallet/aanmaken": "Pallet aanmaken",
    });

    useEffect(() => {
        getPalletID();
    }, []);

    useEffect(() => {
        if (visible && palletID && canvasRef.current) {
            JsBarcode(canvasRef.current, palletID, {
                format: "CODE128",
                width: 2,
                height: 100,
                displayValue: true,
            });
        }
    }, [visible, palletID]);

    const Download = async () => {
        let path;
        if (newCode) {
            let data;
            try{
                const response = await fetch("http://localhost:8080/api/pallet", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
                data = await response.json();
            }catch(error){
                console.error(error);
                return;
            }
            path = `${data.palletID}.png`;
        }
        if (path == null) {path = palletID; }
        const canvas = canvasRef.current;
        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = path;
        link.click();
        location.reload();
    };

    const getPalletID = async () => {
        const response = await fetch("http://localhost:8080/api/pallet/nextID", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();
        setPalletID(data.ID);
    }

    const NewBarcode = () => {
        setNewCode(true);
        setVisible(true);
    }

    const LookForBarcode = async(e) => {
        e.preventDefault();
        let data = null;
        let num = `${e.target.id.value}`
        let pad = "000000"
        let value = pad + num.toString();
        let result = "pallet-" + value.substring(value.length - 6, value.length);
        try{
            const response = await fetch(`http://localhost:8080/api/pallet/${result}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            data = await response.json();
        }catch(error){
            console.error(error);
            return;
        }
        if(data.message && data.message.includes("Found")){
            return;
        }
        if (!data || !data[0].palletID) {
            console.error("Geen pallet gevonden");
            return;
        }
        setPalletID(data[0].palletID);
        setVisible(prev => false);
        setTimeout(() => setVisible(true), 0);
    }

    return (
        <>
            <Navbar title={"Pallet aanmaken"} route={route}></Navbar>
            <form onSubmit={LookForBarcode}>
                <label>Pallet-</label>
                <input name="id"/>
                <button type="submit">Zoeken</button>
            </form>
            <Button className={Style.homeBtns} title={"Nieuwe Barcode"} icon={""} triggerFunction={NewBarcode} color={"#0068ff"} textColor={"#f8fbfe"} borderColor={"#000000"}/>
            {visible && <div>
                <canvas ref={canvasRef} />
                <Button className={Style.homeBtns} title={"Downloaden"} icon={""} triggerFunction={Download} color={"#0068ff"} textColor={"#f8fbfe"} borderColor={"#000000"}/>
            </div>}
        </>
    );
}

export default PalletAanmaken;