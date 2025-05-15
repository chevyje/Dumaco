import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Style from "./klantenOverzicht.module.css";
import {useEffect, useState} from "react";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

function klantenOverzicht() {
    const [tableData, setTableData] = useState([]);
    const [rowsPageDestinations, setRowsPageDestinations] = useState([]);
    const GetData = async () => {
        try {
            const requestData = await fetch("http://localhost:8080/api/customers/", {
                method: "Get",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const rawData = await requestData.json();
            const formattedData = rawData.map(item => {
                const {customerName, mailAddress, phoneNumber} = item;
                return {
                    "Klant naam": customerName,
                    "Mail": mailAddress,
                    "Nummer": phoneNumber,
                }
            });
            setTableData(formattedData);

            const rows = rawData.map((item, index) => ({
                [index] : `/klanten/klant?k.id=${item.customerID}`,
            }));

            setRowsPageDestinations(rows);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        GetData(25, 0, -1);
    }, []);

    const route = breadRouteGen({
        "/home": "Home",
        "/klanten": "Klanten"
    });

    return(
        <>
            <Navbar title={"Klanten"} route={route} />
            <div className={Style.table}>
                <Table jsonData={tableData} navigationData={rowsPageDestinations}
                       hideColumns={["customerID", "address", "palletTracking", "dockerNumber"]}
                />
            </div>
            {/* <Paginator /> */}
        </>
    )
}

export default klantenOverzicht;