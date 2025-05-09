import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Style from "../orderbonkantoor/orderbonKantoor.module.css";
import {useEffect, useState} from "react";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import CustomButton from "../../components/button/button.jsx";
import ExcelTable from "../../components/table/table.jsx";


function orderbonnenKantoor() {
    const [tableData, setTableData] = useState([]);
    function changeTime(date) {
        if (date) {
            const ISOdate = new Date(date);
            return `${ISOdate.getDate()}-${ISOdate.getMonth() + 1}-${ISOdate.getFullYear()}`;
        } else{
            return "-";
        }
    }
    const GetData = async (limit, offset, teamID) => {
        try {
            const requestData = await fetch("http://localhost:8080/api/orders/Filtered", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    limit: limit,
                    offset: offset,
                    teamID: teamID
                })
            })
            const data = await requestData.json();
            const formattedData = data.map(item => {
                const {plannedStart, plannedDelivery, username, orderID, customerName, ...rest} = item;
                return {
                    ...rest,
                    Startdatum: changeTime(plannedStart),
                    Leverdatum: changeTime(plannedDelivery),
                    "Gemaakt door": username,
                    Klant: customerName,
                    Ordernummer: orderID,
                };
            })
            console.log(data);
            console.log(formattedData);
            setTableData(formattedData);
        } catch (e) {
            console.log(e)
        }
    }

    const rowsPageDestinations = [
        {0: '/orderbonnenkantoor/order/product/taak'},
        {1: '/orderbonnenkantoor/order/product/taak'},
        {2: '/orderbonnenkantoor/order/product/taak'},
        {3: '/orderbonnenkantoor/order/product/taak'},
        {4: '/orderbonnenkantoor/order/product/taak'},
        {5: '/orderbonnenkantoor/order/product/taak'},
        {6: '/orderbonnenkantoor/order/product/taak'},
        {7: '/orderbonnenkantoor/order/product/taak'},
        {8: '/orderbonnenkantoor/order/product/taak'},
        {9: '/orderbonnenkantoor/order/product/taak'},
        {10: '/orderbonnenkantoor/order/product/taak'},
        {11: '/orderbonnenkantoor/order/product/taak'},
        {12: '/orderbonnenkantoor/order/product/taak'},
        {13: '/orderbonnenkantoor/order/product/taak'},
        {14: '/orderbonnenkantoor/order/product/taak'},
        {15: '/orderbonnenkantoor/order/product/taak'},
        {16: '/orderbonnenkantoor/order/product/taak'},
        {17: '/orderbonnenkantoor/order/product/taak'},
        {18: '/orderbonnenkantoor/order/product/taak'},
        {19: '/orderbonnenkantoor/order/product/taak'},
        {20: '/orderbonnenkantoor/order/product/taak'},
        {21: '/orderbonnenkantoor/order/product/taak'},
    ]

    useEffect(() => {
        GetData(10, 0, -1);
    }, []);

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
        "/orderbonnenkantoor": "Orderbonnen",
        "/orderbonnenkantoor/order": "Order",
        "/orderbonnenkantoor/order/product": "Product",

    });

    return (
        <>
            <Navbar title={"Product bewerkingen"} route={route}/>

            <div className={Style.titleContainer}>
                <h1 className={Style.title}>Product Inzicht</h1>
            </div>


            <div className={Style.headerButtons}>
                <CustomButton title={"Order Bewerken"} triggerFunction={null} icon={"pencil"} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"} />
                <CustomButton title={"Bewerking Aanmaken"} triggerFunction={null} icon={"plus"} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"}/>

            </div>

            <div className={Style.infoContainer}>
                <div>
                    <ExcelTable jsonData={tableData}
                                navigationData={rowsPageDestinations}
                                hideColumns={["orderID", "productNumber", "materialID", "teamID", "createdBy"]}/>
                </div>
                <div className={Style.CollapseTable}>
                    <Table jsonData={Inkoop} title={"Totaal Inkopen"} openByDefault={true} />
                    <Table jsonData={UitbesteedWerk} title={"Totaal Uitbesteed Werk"} openByDefault={true} />
                </div>
            </div>
        </>
    )
}

export default orderbonnenKantoor;
