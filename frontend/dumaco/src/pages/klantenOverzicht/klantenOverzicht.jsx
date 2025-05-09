import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Style from "./klantenOverzicht.module.css";
import {useEffect, useState} from "react";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

function klantenOverzicht() {
    const [tableData, setTableData] = useState([]);
    const GetData = async () => {
        try {
            const requestData = await fetch("http://localhost:8080/api/customers/", {
                method: "Get",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await requestData.json();
            const formattedData = data.map(item => {
                const {customerName, mailAddress, phoneNumber} = item;
                return {
                    "Klant naam": customerName,
                    "Mail": mailAddress,
                    "Nummer": phoneNumber,
                }
            });
            setTableData(formattedData);
        } catch (e) {
            console.log(e)
        }
    }

    const navigationData = [
        { 0: '/klanten/klant' },
        { 1: '/klanten/klant' },
        { 2: '/klanten/klant' },
        { 3: '/klanten/klant' },
        { 4: '/klanten/klant' },
        { 5: '/klanten/klant' },
        { 6: '/klanten/klant' },
        { 7: '/klanten/klant' },
        { 8: '/klanten/klant' },
        { 9: '/klanten/klant' },
        { 10: '/klanten/klant' },
        { 11: '/klanten/klant' },
        { 12: '/klanten/klant' },
        { 13: '/klanten/klant' },
        { 14: '/klanten/klant' },
        { 15: '/klanten/klant' },
        { 16: '/klanten/klant' },
        { 17: '/klanten/klant' },
        { 18: '/klanten/klant' },
        { 19: '/klanten/klant' },
        { 20: '/klanten/klant' },
        { 21: '/klanten/klant' }

    ]

    useEffect(() => {
        GetData(10, 0, -1);
    }, []);

    const route = breadRouteGen({
        "/home": "Home",
        "/klanten": "Klanten"
    });

    return(
        <>
            <Navbar title={"Klanten"} route={route} />
            <div className={Style.table}>
                <Table jsonData={tableData} navigationData={navigationData}
                       hideColumns={["customerID", "address", "palletTracking", "dockerNumber"]}
                />
            </div>
            {/* <Paginator /> */}
        </>
    )
}

export default klantenOverzicht;