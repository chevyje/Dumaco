import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Style from "../klantenOverzicht/klantenOverzicht.module.css";
import {useEffect, useState} from "react";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

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
        {0: '/orders/order'},
        {1: '/orders/order'},
        {2: '/orders/order'},
        {3: '/orders/order'},
        {4: '/orders/order'},
        {5: '/orders/order'},
        {6: '/orders/order'},
        {7: '/orders/order'},
        {8: '/orders/order'},
        {9: '/orders/order'},
        {10: '/orders/order'},
        {11: '/orders/order'},
        {12: '/orders/order'},
        {13: '/orders/order'},
        {14: '/orders/order'},
        {15: '/orders/order'},
        {16: '/orders/order'},
        {17: '/orders/order'},
        {18: '/orders/order'},
        {19: '/orders/order'},
        {20: '/orders/order'},
        {21: '/orders/order'},
    ]

    useEffect(() => {
        GetData(10, 0, -1);
    }, []);

    const route = breadRouteGen({
        "/home": "Home",
        "/orders": "Orders"
    });

    return (
        <>
            <Navbar title={"Orderbonnen"} route={route}/>
            <div className={Style.table}>
                <Table jsonData={tableData}
                       navigationData={rowsPageDestinations}
                       hideColumns={["deliveryDate", "teamID", "createdBy", "customerID", "orderIDCustomer"]}/>
            </div>
            {/* <Paginator /> */}
        </>
    )
}

export default orderbonnenKantoor;
