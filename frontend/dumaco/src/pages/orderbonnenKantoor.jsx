import Navbar from "../components/navbar.jsx";
import Table from "../components/table.jsx";
import Paginator from "../components/paginator.jsx";
import Sidebar from "../components/sidebar.jsx";
import "../styling/klantenOverzicht.css";

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

    return(
        <>
            <Navbar title={"Orderbonnen"} route={"Orderbonnen"} />
            <Sidebar Orderbonnen={"selected"} />
            <div className="table">
                <Table jsonData={data} />
            </div>
            <Paginator />
        </>
    )
}

export default orderbonnenKantoor;
