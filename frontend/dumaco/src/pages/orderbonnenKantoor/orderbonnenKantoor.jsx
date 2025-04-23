import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Paginator from "../../components/paginator/paginator.jsx";
import Style from "../klantenOverzicht/klantenOverzicht.module.css";
import {useEffect, useState} from "react";

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
        {0: '/orderbonkantoor'},
        {1: '/orderbonkantoor'},
        {2: '/orderbonkantoor'},
        {3: '/orderbonkantoor'},
        {4: '/orderbonkantoor'},
        {5: '/orderbonkantoor'},
        {6: '/orderbonkantoor'},
        {7: '/orderbonkantoor'},
        {8: '/orderbonkantoor'},
        {9: '/orderbonkantoor'},
        {10: '/orderbonkantoor'},
        {11: '/orderbonkantoor'},
        {12: '/orderbonkantoor'},
        {13: '/orderbonkantoor'},
        {14: '/orderbonkantoor'},
        {15: '/orderbonkantoor'},
        {16: '/orderbonkantoor'},
        {17: '/orderbonkantoor'},
        {18: '/orderbonkantoor'},
        {19: '/orderbonkantoor'},
        {20: '/orderbonkantoor'},
        {21: '/orderbonkantoor'},
    ]

    useEffect(() => {
        GetData(10, 0, -1);
    }, []);
    return (
        <>
            <Navbar title={"Orderbonnen"} route={"Orderbonnen"}/>
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
