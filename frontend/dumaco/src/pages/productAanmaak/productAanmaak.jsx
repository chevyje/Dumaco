import Table from "../../components/collapse/collapseTable.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "./productAanmaak.module.css";

function productAanmaak() {
    const Bewerking = [
        {"Bewerking": "Werkvoorbereiding", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Lasersnijden Plaat", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Lasersnijden Buis", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Graveren", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Lasnaaddetectie", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Anti-spat spray", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Afbramen / Orderpicken", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Kanten breken machinaa dubbelz", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Trommelen", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Tappen", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "CMA Boorstraat", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Zetten 3M", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Zetten Dynacel", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Lassen", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Robotlassen", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Kwaliteitscontrole", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Eindcontrole", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Logistiek", "Startdatum": "14-04-2025", "Opmerking": ""}
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
            <Navbar title={"Product Aanmaken #32500030"} route={"Producten / Product Aanmaken"} />
            <div className={Style.CollapsTable}>
                <Table jsonData={Bewerking} title={"Bewerking"} openByDefault={true} />
                <Table jsonData={Inkoop} title={"Inkoop"} openByDefault={true} />
                <Table jsonData={UitbesteedWerk} title={"Uitbesteed Werk"} openByDefault={true} />
            </div>

        </>
    );
}

export default productAanmaak;
