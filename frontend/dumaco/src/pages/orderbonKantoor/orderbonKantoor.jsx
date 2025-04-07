import Table from "../../components/collapse/collapseTable.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import CustomButton from "../../components/button/button.jsx";
import Style from "./orderbonKantoor.module.css";

function klantOverzicht() {
    const Bewerking = [
        {"Startdatum": "27-01-2025", "Omschrijving": "Werkvoorbereiding", "Type": "", "Startdatum (def.)": "27-01-2025", "Werknemer": "H. Botterboy", "Tijd": "0:20"},
        {"Startdatum": "27-01-2025", "Omschrijving": "Lasersnijden Plaat 3000×1500", "Type": "parent", "Startdatum (def.)": "27-01-2025", "Werknemer": "J. Blankers", "Tijd": "0:50"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Lasersnijden Buis", "Type": "parent", "Startdatum (def.)": "31-01-2025", "Werknemer": "M. de Vrijer", "Tijd": "0:24"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Graveren", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Lasnaaddetectie", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Anti-spat spray", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "29-01-2025", "Omschrijving": "Afbramen / Orderpicken", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "29-01-2025", "Omschrijving": "Kanten breken machinaal dubbelZ", "Type": "buis", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Trommelen", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Tappen", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "CMA Boorstraat", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "30-01-2025", "Omschrijving": "Zetten 3M Toolcel", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "31-01-2025", "Omschrijving": "Zetten Dynacel", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "04-02-2025", "Omschrijving": "Lassen", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "04-02-2025", "Omschrijving": "RobotLassen", "Type": "plaat", "Startdatum (def.)": "", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "05-02-2025", "Omschrijving": "Kwaliteitscontrole", "Type": "", "Startdatum (def.)": "30-01-2025", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "06-02-2025", "Omschrijving": "Eindcontrole", "Type": "", "Startdatum (def.)": "12-02-2025", "Werknemer": "-", "Tijd": "--:--"},
        {"Startdatum": "08-02-2025", "Omschrijving": "Logistiek", "Type": "", "Startdatum (def.)": "03-02-2025", "Werknemer": "-", "Tijd": "--:--"}
    ]
    const Inkoop = [
        {"Code": "5-1004-1998-0-C", "Omschrijving": "Buis RVS-316 inw Ra=0,6µm", "Aantal": 60, "Ontvangen": false},
        {"Code": "5-1003-2916-0-J", "Omschrijving": "Lagerplaat", "Aantal": 15, "Ontvangen": false},
        {"Code": "5-1003-2924-0-B", "Omschrijving": "Pin, ø21 L=51", "Aantal": 15, "Ontvangen": true},
        {"Code": "5-1004-0807-0-A", "Omschrijving": "Bush, HVV ø15 L=59,5", "Aantal": 30, "Ontvangen": false},
        {"Code": "5-1003-2945-0", "Omschrijving": "Gebogen buis", "Aantal": 15, "Ontvangen": false},
        {"Code": "5-1003-2935-0-A", "Omschrijving": "Staf, ø6 L=135", "Aantal": 15, "Ontvangen": false}
    ];

    const UitbesteedWerk = [
        {"Stuklijst": "5-1105-3180-0-A5", "Omschrijving": "Nabewerking gat ø26H7 (2x)", "Startdatum": "30-01-2025", "Bedrijf": "Kessel Machinefabriek B.V.", "Aantal": 15, "Ontvangen": false},
        {"Stuklijst": "5-1105-3456-0-J", "Omschrijving": "Beitsen", "Startdatum": "05-02-2025", "Bedrijf": "", "Aantal": 15, "Ontvangen": false}
    ];

    return(
        <>
            <Navbar title={"Lely Industries #32500030"} route={"Orderbonnen / Lely Industries NV / #32500030"} />
            <div className={Style.CollapsTable}>
                <Table jsonData={Bewerking} title={"Bewerking"} openByDefault={true} />
                <Table jsonData={Inkoop} title={"Inkoop"} openByDefault={true} />
                <Table jsonData={UitbesteedWerk} title={"Uitbesteed Werk"} openByDefault={true} />
            </div>
            <div className={Style.customButton}>
                <CustomButton title={"Bewerken"} triggerFunction={null} icon={"pencil"} color={"#D9D9D9"} />
            </div>
        </>
    );
}

export default klantOverzicht;
