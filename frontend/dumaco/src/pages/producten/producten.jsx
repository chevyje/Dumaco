import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Style from "../klantenOverzicht/klantenOverzicht.module.css";
import {useEffect, useState} from "react";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

function producten() {
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
            const requestData = await fetch("http://145.89.192.195:8080/api/orders/Filtered", {
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
        {0: '/orderbonnenkantoor/order'},
        {1: '/orderbonnenkantoor/order'},
        {2: '/orderbonnenkantoor/order'},
        {3: '/orderbonnenkantoor/order'},
        {4: '/orderbonnenkantoor/order'},
        {5: '/orderbonnenkantoor/order'},
        {6: '/orderbonnenkantoor/order'},
        {7: '/orderbonnenkantoor/order'},
        {8: '/orderbonnenkantoor/order'},
        {9: '/orderbonnenkantoor/order'},
        {10: '/orderbonnenkantoor/order'},
        {11: '/orderbonnenkantoor/order'},
        {12: '/orderbonnenkantoor/order'},
        {13: '/orderbonnenkantoor/order'},
        {14: '/orderbonnenkantoor/order'},
        {15: '/orderbonnenkantoor/order'},
        {16: '/orderbonnenkantoor/order'},
        {17: '/orderbonnenkantoor/order'},
        {18: '/orderbonnenkantoor/order'},
        {19: '/orderbonnenkantoor/order'},
        {20: '/orderbonnenkantoor/order'},
        {21: '/orderbonnenkantoor/order'},
    ]

    useEffect(() => {
        GetData(10, 0, -1);
    }, []);

    const route = breadRouteGen({
        "/home": "Home",
        "/producten": "Producten"
    });

    return (
        <>
            <Navbar title={"Producten"} route={route}/>
            <div className={Style.table}>
                <Table jsonData={tableData}
                       navigationData={rowsPageDestinations}
                       hideColumns={["deliveryDate", "teamID", "createdBy", "customerID", "orderIDCustomer"]}/>
            </div>
            {/* <Paginator /> */}
        </>
    )
}

export default producten;
