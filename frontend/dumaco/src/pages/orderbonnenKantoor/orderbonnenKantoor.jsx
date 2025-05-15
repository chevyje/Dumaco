import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Style from "../klantenOverzicht/klantenOverzicht.module.css";
import { useEffect, useState } from "react";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

function orderbonnenKantoor() {
    const [tableData, setTableData] = useState([]);
    const [rowsPageDestinations, setRowsPageDestinations] = useState([]);

    function changeTime(date) {
        if (date) {
            const ISOdate = new Date(date);
            return `${ISOdate.getDate()}-${ISOdate.getMonth() + 1}-${ISOdate.getFullYear()}`;
        } else {
            return "-";
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const requestData = await fetch("http://localhost:8080/api/orders/Filtered", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        limit: 25,
                        offset: 0,
                        teamID: -1
                    })
                });

                const rawData = await requestData.json();
                const formattedData = rawData.map(item => {
                    const { plannedStart, plannedDelivery, username, orderID, customerName, ...rest } = item;
                    return {
                        ...rest,
                        Startdatum: changeTime(plannedStart),
                        Leverdatum: changeTime(plannedDelivery),
                        "Gemaakt door": username,
                        Klant: customerName,
                        Ordernummer: orderID,
                    };
                });

                setTableData(formattedData);

                const rows = rawData.map((item, index) => ({
                    [index] : `/orders/order?o.id=${item.orderID}`,
                }));

                setRowsPageDestinations(rows);


            } catch (error) {
                console.error("Fout bij ophalen van data:", error);
            }
        }

        fetchData();
    }, []);

    const route = breadRouteGen({
        "/home": "Home",
        "/orders": "Orders"
    });

    return (
        <>
            <Navbar title={"Orderbonnen"} route={route} />
            <div className={Style.table}>
                <Table
                    jsonData={tableData}
                    navigationData={rowsPageDestinations}
                    hideColumns={["deliveryDate", "teamID", "createdBy", "customerID", "orderIDCustomer"]}
                />
            </div>
            {/* <Paginator /> */}
        </>
    );
}

export default orderbonnenKantoor;
