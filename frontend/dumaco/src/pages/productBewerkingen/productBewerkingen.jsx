import Navbar from "../../components/navbar/navbar.jsx";
import CollapseTable from "../../components/collapse/collapseTable.jsx";
import Style from "../orderbonkantoor/orderbonKantoor.module.css";
import {useEffect, useState} from "react";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import CustomButton from "../../components/button/button.jsx";
import ExcelTable from "../../components/table/table.jsx";
import {Navigate, useSearchParams} from "react-router-dom";


function orderbonnenKantoor() {
    const [bewerkingen, setTableData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [rowsPageDestinations, setRowsPageDestinations] = useState([]);

    // Values from link params
    const OrderId = searchParams.get("o.id");
    const ProductId = searchParams.get("p.id");

    // if param values are empty go to 404
    if (!OrderId || !ProductId) {
        return <Navigate to="/404-not-found" />;
    }

    // ISO date to normal date
    function changeTime(date) {
        if (date) {
            const ISOdate = new Date(date);
            return `${ISOdate.getDate()}-${ISOdate.getMonth() + 1}-${ISOdate.getFullYear()}`;
        } else{
            return "-";
        }
    }


    useEffect(() => {
        // Get all edits form database
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
                console.log(data);

                const rows = data.map((item, index) => ({
                    [index] : `/orders/order/product/taak?o.id=${OrderId}&p.id=${ProductId}&t.id=${item.editID}`,
                }));

                setRowsPageDestinations(rows);
            } catch (e) {
                console.log(e)
                return null;
            }
        }
        GetEdits(ProductId);
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
