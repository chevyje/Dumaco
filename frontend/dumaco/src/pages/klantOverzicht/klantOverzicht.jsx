import Table from "../../components/collapse/collapseTable.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "./klantOverzicht.module.css";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import {Navigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

function klantOverzicht() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [customerData, setCustomerData] = useState([]);

    // values from link params
    const id = searchParams.get("k.id");

    // if param values are empty go to 404 page
    if (!id) {
        return <Navigate to="/404-not-found" />;
    }

    useEffect(() => {
        async function GetCustomer(customerID) {
            try {
                const requestData = await fetch(`http://localhost:8080/api/customers/${customerID}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const data = await requestData.json();
                setCustomerData(data);
            } catch (e) {
                console.log(e)
            }
        }
        GetCustomer(id);
    }, []);

    const LopendeOrders = [
        { "Ordernummer": 32500030, "Status": "Lassen", "Startdatum": "30-01-2025", "Leverdatum": "18-02-2025", "Gemaakt door": "Frits van den Hogen" },
        { "Ordernummer": 32500031, "Status": "Lasersnijden", "Startdatum": "18-02-2025", "Leverdatum": "07-03-2025", "Gemaakt door": "Jurre Blankers" },
    ];
    const ToekomstigeOrders = [
        {"Ordernummer": 32500030, "Startdatum": "30-01-2025", "Leverdatum": "18-02-2025", "Gemaakt door": "Frits van den Hogen" },
        { "Ordernummer": 32500031, "Startdatum": "18-02-2025", "Leverdatum": "07-03-2025", "Gemaakt door": "Jurre Blankers" },
    ];
    const OudeOrders = [
        {"Ordernummer": 32500030, "Startdatum": "30-01-2025", "Startdatum (def.)": "27-01-2025", "Leverdatum": "18-02-2025", "Leverdatum (def.)": "22-02-2025", "Gemaakt door": "Frits van den Hogen" },
        {"Ordernummer": 32500031, "Startdatum": "05-02-2025", "Startdatum (def.)": "05-02-2025", "Leverdatum": "07-03-2025", "Leverdatum (def.)": "07-03-2025", "Gemaakt door": "Jurre Blankers" },
    ];

    const route = breadRouteGen({
        "/home": "Home",
        "/klanten": "Klanten",
        "/klant": "Klant"
    });

    return(
        <>
            <Navbar title={customerData[0]?.customerName} route={route} />
            <div className={Style.CollapsTable}>
                <Table jsonData={LopendeOrders} title={"Lopende Orders"} openByDefault={true} />
                <Table jsonData={ToekomstigeOrders} title={"Toekomstige Orders"} openByDefault={true} />
                <Table jsonData={OudeOrders} title={"Oude Orders"} openByDefault={true} Legenda={true}/>
            </div>
            <div className={Style.KlantInfo}>
                <div>
                    <h3>{customerData[0]?.customerName}</h3>
                </div>
                <div className={Style.info}>
                    <img src="../../../icons/location.svg" alt=""></img>
                    <p>{customerData[0]?.address}</p>
                </div>
                <div className={Style.info}>
                    <img src="../../../icons/user.svg" alt=""></img>
                    <p>Jian Jiao</p>
                </div>
                <div className={Style.info}>
                    <img src="../../../icons/phone.svg" alt=""></img>
                    <p>{customerData[0]?.phoneNumber}</p>
                </div>
                <div className={Style.info}>
                    <img src="../../../icons/truck.svg" alt=""></img>
                    <p>{customerData[0]?.dockerNumber}</p>
                </div>
            </div>
        </>
    );
}

export default klantOverzicht;
