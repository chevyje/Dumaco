import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Paginator from "../../components/paginator/paginator.jsx";
import Style from "../klantenOverzicht/klantenOverzicht.module.css";

function orderbonnenKantoor() {
    const data = [
        {"Startdatum": "27-01-2025", "Status": "Lassen", "Werknemer": "H. Botterboy", "Leverdatum": "18-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500030"},
        {"Startdatum": "28-01-2025", "Status": "Zetten", "Werknemer": "J. Blankers", "Leverdatum": "19-03-2025", "Klant": "Merrell", "Ordernummer": "32500031"},
        {"Startdatum": "29-01-2025", "Status": "Lassen", "Werknemer": "M. de Vrijer", "Leverdatum": "22-03-2025", "Klant": "Merrell", "Ordernummer": "32500032"},
        {"Startdatum": "27-01-2025", "Status": "Lassen", "Werknemer": "-", "Leverdatum": "17-03-2025", "Klant": "Merrell", "Ordernummer": "32500033"},
        {"Startdatum": "28-01-2025", "Status": "Afbramen", "Werknemer": "-", "Leverdatum": "18-03-2025", "Klant": "Merrell", "Ordernummer": "32500034"},
        {"Startdatum": "29-01-2025", "Status": "Lassen", "Werknemer": "-", "Leverdatum": "19-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500035"},
        {"Startdatum": "27-01-2025", "Status": "Tappen", "Werknemer": "J. Blankers", "Leverdatum": "22-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500036"},
        {"Startdatum": "28-01-2025", "Status": "Tappen", "Werknemer": "M. de Vrijer", "Leverdatum": "17-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500037"},
        {"Startdatum": "29-01-2025", "Status": "Lassen", "Werknemer": "-", "Leverdatum": "18-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500038"},
        {"Startdatum": "27-01-2025", "Status": "Robot lassen", "Werknemer": "-", "Leverdatum": "19-03-2025", "Klant": "Merrell", "Ordernummer": "32500039"},
        {"Startdatum": "28-01-2025", "Status": "Robot lassen", "Werknemer": "-", "Leverdatum": "22-03-2025", "Klant": "Merrell", "Ordernummer": "32500030"},
        {"Startdatum": "29-01-2025", "Status": "Graveren", "Werknemer": "-", "Leverdatum": "17-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500031"},
        {"Startdatum": "27-01-2025", "Status": "Anit-spat Spray", "Werknemer": "-", "Leverdatum": "18-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500032"},
        {"Startdatum": "28-01-2025", "Status": "Lassen", "Werknemer": "-", "Leverdatum": "19-03-2025", "Klant": "Merrell", "Ordernummer": "32500033"},
        {"Startdatum": "29-01-2025", "Status": "Lassen", "Werknemer": "-", "Leverdatum": "22-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500034"},
        {"Startdatum": "27-01-2025", "Status": "Robot lassen", "Werknemer": "-", "Leverdatum": "17-03-2025", "Klant": "Merrell", "Ordernummer": "32500035"},
        {"Startdatum": "28-01-2025", "Status": "Robot lassen", "Werknemer": "-", "Leverdatum": "22-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500036"},
        {"Startdatum": "29-01-2025", "Status": "Lassen", "Werknemer": "-", "Leverdatum": "19-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500037"},
        {"Startdatum": "28-01-2025", "Status": "Eindcontrole", "Werknemer": "J. Blankers", "Leverdatum": "22-03-2025", "Klant": "Merrell", "Ordernummer": "32500038"},
        {"Startdatum": "29-01-2025", "Status": "Eindcontrole", "Werknemer": "M. de Vrijer", "Leverdatum": "17-03-2025", "Klant": "Merrell", "Ordernummer": "32500039"},
        {"Startdatum": "29-01-2025", "Status": "Lassen", "Werknemer": "-", "Leverdatum": "22-03-2025", "Klant": "Merrell", "Ordernummer": "32500038"},
        {"Startdatum": "29-01-2025", "Status": "Logistiek", "Werknemer": "-", "Leverdatum": "17-03-2025", "Klant": "Merrell", "Ordernummer": "32500039"}
    ]

    const rowsPageDestinations = [
        { 0: '/orderbonkantoor' },
        { 1: '/orderbonkantoor' },
        { 2: '/orderbonkantoor' },
        { 3: '/orderbonkantoor' },
        { 4: '/orderbonkantoor' },
        { 5: '/orderbonkantoor' },
        { 6: '/orderbonkantoor' },
        { 7: '/orderbonkantoor' },
        { 8: '/orderbonkantoor' },
        { 9: '/orderbonkantoor' },
        { 10: '/orderbonkantoor' },
        { 11: '/orderbonkantoor' },
        { 12: '/orderbonkantoor' },
        { 13: '/orderbonkantoor' },
        { 14: '/orderbonkantoor' },
        { 15: '/orderbonkantoor' },
        { 16: '/orderbonkantoor' },
        { 17: '/orderbonkantoor' },
        { 18: '/orderbonkantoor' },
        { 19: '/orderbonkantoor' },
        { 20: '/orderbonkantoor' },
        { 21: '/orderbonkantoor' },
    ]

    return(
        <>
            <Navbar title={"Orderbonnen"} route={"Orderbonnen"} />
            <div className={Style.table}>
                <Table jsonData={data}
                navigationData={rowsPageDestinations}/>
            </div>
            {/* <Paginator /> */}
        </>
    )
}

export default orderbonnenKantoor;
