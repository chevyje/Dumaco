import Navbar from "../../components/navbar/navbar.jsx";
import CollapseTable from "../../components/collapse/collapseTable.jsx";
import Style from "../orderbonkantoor/orderbonKantoor.module.css";
import {useEffect, useState} from "react";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import CustomButton from "../../components/button/button.jsx";
import ExcelTable from "../../components/table/table.jsx";


function orderbonnenKantoor() {
    const [bewerkingen, setTableData] = useState([]);
    function changeTime(date) {
        if (date) {
            const ISOdate = new Date(date);
            return `${ISOdate.getDate()}-${ISOdate.getMonth() + 1}-${ISOdate.getFullYear()}`;
        } else{
            return "-";
        }
    }
    const GetEdits = async (productID) => {
        try {
            const requestData = await fetch("http://localhost:8080/api/edit/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: productID,
                })
            })
            const data = await requestData.json();
            const formattedData = data.map(item => {
                let {plannedStart, editDesc, startDate, username, endDate, time, ...rest} = item;
                if (startDate == null && endDate == null) time = "--:--";
                else {
                    if (endDate == null) endDate = new Date();
                    let timeDifference = startDate - endDate;
                    if (timeDifference < 0) timeDifference = timeDifference * -1;
                    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

                    if (hours < 10 && minutes < 10) console.log(`0${hours}:0${minutes}`);
                    else if (hours < 10) console.log(`0${hours}:${minutes}`);
                    else if (minutes < 10) console.log(`${minutes}:0${minutes}`);
                    else console.log(`${hours}:${minutes}`);
                }
                return {
                    "Startdatum": changeTime(plannedStart),
                    "Omschrijving": editDesc,
                    "Type": null,
                    "Startdatum (def.)": startDate,
                    "Werknemer  ": username,
                    "Tijd": time
                };
            })
            setTableData(formattedData);
        } catch (e) {
            console.log(e)
            return null;
        }
    }

    const rowsPageDestinations = [
        {0: '/orders/order/product/taak'},
        {1: '/orders/order/product/taak'},
        {2: '/orders/order/product/taak'},
        {3: '/orders/order/product/taak'},
        {4: '/orders/order/product/taak'},
        {5: '/orders/order/product/taak'},
        {6: '/orders/order/product/taak'},
        {7: '/orders/order/product/taak'},
        {8: '/orders/order/product/taak'},
        {9: '/orders/order/product/taak'},
        {10: '/orders/order/product/taak'},
        {11: '/orders/order/product/taak'},
        {12: '/orders/order/product/taak'},
        {13: '/orders/order/product/taak'},
        {14: '/orders/order/product/taak'},
        {15: '/orders/order/product/taak'},
        {16: '/orders/order/product/taak'},
        {17: '/orders/order/product/taak'},
        {18: '/orders/order/product/taak'},
        {19: '/orders/order/product/taak'},
        {20: '/orders/order/product/taak'},
        {21: '/orders/order/product/taak'},
    ]

    useEffect(() => {
        GetEdits("1/1");
    }, []);

    const Bewerking = [
        {"Startdatum": "27-01-2025", "Omschrijving": "Werkvoorbereiding", "Type": "", "Startdatum (def.)": "27-01-2025", "Werknemer": "H. Botterboy", "Tijd": "0:20"},
        {"Startdatum": "27-01-2025", "Omschrijving": "Lasersnijden Plaat 3000×1500", "Type": "parent", "Startdatum (def.)": "27-01-2025", "Werknemer": "J. Blankers", "Tijd": "0:50"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Lasersnijden Buis", "Type": "parent", "Startdatum (def.)": "31-01-2025", "Werknemer": "M. de Vrijer", "Tijd": "0:24"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Graveren", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Lasnaaddetectie", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Anti-spat spray", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "29-01-2025", "Omschrijving": "Afbramen / Orderpicken", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "29-01-2025", "Omschrijving": "Kanten breken machinaal dubbelZ", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Trommelen", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Tappen", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "CMA Boorstraat", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "30-01-2025", "Omschrijving": "Zetten 3M Toolcel", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Zetten Dynacel", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "04-02-2025", "Omschrijving": "Lassen", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "04-02-2025", "Omschrijving": "RobotLassen", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "05-02-2025", "Omschrijving": "Kwaliteitscontrole", "Type": "", "Startdatum (def.)": "30-01-2025", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "06-02-2025", "Omschrijving": "Eindcontrole", "Type": "", "Startdatum (def.)": "12-02-2025", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "08-02-2025", "Omschrijving": "Logistiek", "Type": "", "Startdatum (def.)": "03-02-2025", "Werknemer": "-", "Tijd": "--:--"}
    ]

    const Inkoop = [
        {"Code": "5-1004-1998-0-C", "Omschrijving": "Buis RVS-316 inw Ra=0,6µm", "Aantal": 60, "Ontvangen": false},
        {"Code": "5-1003-2916-0-J", "Omschrijving": "Lagerplaat", "Aantal": 15, "Ontvangen": false},
        {"Code": "5-1003-2924-0-B", "Omschrijving": "Pin, ø21 L=51", "Aantal": 15, "Ontvangen": true},
        {"Code": "5-1004-0807-0-A", "Omschrijving": "Bush, HVV ø15 L=59,5", "Aantal": 30, "Ontvangen": false},
        {"Code": "5-1003-2945-0", "Omschrijving": "Gebogen buis", "Aantal": 15, "Ontvangen": false},
        {"Code": "5-1003-2935-0-A", "Omschrijving": "Staf, ø6 L=135", "Aantal": 15, "Ontvangen": false}
    ];

    const UitbesteedWerk = [
        {"Stuklijst": "5-1105-3180-0-A5", "Omschrijving": "Nabewerking gat ø26H7 (2x)", "Startdatum": "30-01-2025", "Bedrijf": "Kessel Machinefabriek B.V.", "Aantal": 15, "Ontvangen": false},
        {"Stuklijst": "5-1105-3456-0-J", "Omschrijving": "Beitsen", "Startdatum": "05-02-2025", "Bedrijf": "", "Aantal": 15, "Ontvangen": false}
    ];

    const route = breadRouteGen({
        "/home": "Home",
        "/orders": "Orders",
        "/orders/order": "Order",
        "/orders/order/product": "Product",

    });

    return (
        <>
            <Navbar title={"Product bewerkingen"} route={route}/>

            <div className={Style.titleContainer}>
                <h1 className={Style.title}>Product Inzicht</h1>
            </div>


            <div className={Style.headerButtons}>
                <CustomButton title={"Product Bewerken"} triggerFunction={null} icon={"pencil"} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"} />
                <CustomButton title={"Bewerking Aanmaken"} triggerFunction={null} icon={"plus"} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"}/>

            </div>

            <div className={Style.infoContainer}>
                <div>
                    <ExcelTable jsonData={bewerkingen}
                                navigationData={rowsPageDestinations}
                                hideColumns={["orderID", "productNumber", "materialID", "teamID", "createdBy"]}/>
                </div>
                <div className={Style.CollapseTable}>
                    <CollapseTable jsonData={Inkoop} title={"Product inkopen"} openByDefault={true} />
                    <CollapseTable jsonData={UitbesteedWerk} title={"Product uitbesteed werk"} openByDefault={true} />
                </div>
            </div>
        </>
    )
}

export default orderbonnenKantoor;
