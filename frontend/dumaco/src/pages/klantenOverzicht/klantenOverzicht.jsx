import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Style from "./klantenOverzicht.module.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Paginator from "../../components/paginator/paginator.jsx";
import {useEffect, useState} from "react";

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
        { 0: '/klantoverzicht' },
        { 1: '/klantoverzicht' },
        { 2: '/klantoverzicht' },
        { 3: '/klantoverzicht' },
        { 4: '/klantoverzicht' },
        { 5: '/klantoverzicht' },
        { 6: '/klantoverzicht' },
        { 7: '/klantoverzicht' },
        { 8: '/klantoverzicht' },
        { 9: '/klantoverzicht' },
        { 10: '/klantoverzicht' },
        { 11: '/klantoverzicht' },
        { 12: '/klantoverzicht' },
        { 13: '/klantoverzicht' },
        { 14: '/klantoverzicht' },
        { 15: '/klantoverzicht' },
        { 16: '/klantoverzicht' },
        { 17: '/klantoverzicht' },
        { 18: '/klantoverzicht' },
        { 19: '/klantoverzicht' },
        { 20: '/klantoverzicht' },
        { 21: '/klantoverzicht' }

    ]

    useEffect(() => {
        GetData(10, 0, -1);
    }, []);
    return(
        <>
            <Navbar title={"Klanten"} route={"Klanten"} />
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