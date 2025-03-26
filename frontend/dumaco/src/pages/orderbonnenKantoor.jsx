import Navbar from "../components/navbar.jsx";
import Table from "../components/table.jsx";
import Paginator from "../components/paginator.jsx";
import "../styling/klantenOverzicht.css";

function orderbonnenKantoor() {
    const data = [
        {"Startdatum": "27-01-2025", "Bewerking": "Lassen", "Werknemer": "H. Botterboy", "Leverdatum": "18-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500030"},
        {"Startdatum": "28-01-2025", "Bewerking": "Lassen", "Werknemer": "J. Blankers", "Leverdatum": "19-03-2025", "Klant": "Merrell", "Ordernummer": "32500031"},
        {"Startdatum": "29-01-2025", "Bewerking": "Lassen", "Werknemer": "M. de Vrijer", "Leverdatum": "22-03-2025", "Klant": "Merrell", "Ordernummer": "32500032"},
        {"Startdatum": "28-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "17-03-2025", "Klant": "Merrell", "Ordernummer": "32500033"},
        {"Startdatum": "27-01-2025", "Bewerking": "Robot lassen", "Werknemer": "-", "Leverdatum": "18-03-2025", "Klant": "Merrell", "Ordernummer": "32500034"},
        {"Startdatum": "29-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "19-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500035"},
        {"Startdatum": "29-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "22-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500036"},
        {"Startdatum": "29-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "17-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500037"},
        {"Startdatum": "27-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "19-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500038"},
        {"Startdatum": "27-01-2025", "Bewerking": "Robot lassen", "Werknemer": "-", "Leverdatum": "19-03-2025", "Klant": "Merrell", "Ordernummer": "32500039"},
        {"Startdatum": "27-01-2025", "Bewerking": "Robot lassen", "Werknemer": "-", "Leverdatum": "22-03-2025", "Klant": "Merrell", "Ordernummer": "32500038"},
        {"Startdatum": "27-01-2025", "Bewerking": "Robot lassen", "Werknemer": "-", "Leverdatum": "18-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500032"},
        {"Startdatum": "27-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "22-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500034"},
        {"Startdatum": "29-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "17-03-2025", "Klant": "Merrell", "Ordernummer": "32500035"},
        {"Startdatum": "27-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "18-03-2025", "Klant": "Merrell", "Ordernummer": "32500036"},
        {"Startdatum": "29-01-2025", "Bewerking": "Robot lassen", "Werknemer": "-", "Leverdatum": "22-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500037"},
        {"Startdatum": "29-01-2025", "Bewerking": "Robot lassen", "Werknemer": "-", "Leverdatum": "17-03-2025", "Klant": "Lely Industries NV", "Ordernummer": "32500039"},
        {"Startdatum": "28-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "22-03-2025", "Klant": "Merrell", "Ordernummer": "32500038"},
        {"Startdatum": "29-01-2025", "Bewerking": "Lassen", "Werknemer": "-", "Leverdatum": "17-03-2025", "Klant": "Merrell", "Ordernummer": "32500039"}
    ]

    return(
        <>
            <Navbar title={"Orderbonnen"} route={"Orderbonnen"} />
            <div className="table">
                <Table jsonData={data} />
            </div>
            <Paginator />
        </>
    )
}

export default orderbonnenKantoor;
