import Table from "../../components/collapse/collapseTable.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "./productAanmaak.module.css";
import Button from "../../components/button/button.jsx";
import React, { useState } from 'react';

function ProductAanmaak() {
    const Bewerking = [
        {"Bewerking": "Werkvoorbereiding", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Lasersnijden Plaat", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Lasersnijden Buis", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Graveren", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Lasnaaddetectie", "Startdatum": "14-04-2025", "Opmerking": ""},
        {"Bewerking": "Anti-spat spray", "Startdatum": "15-04-2025", "Opmerking": ""},
        {"Bewerking": "Afbramen / Orderpicken", "Startdatum": "15-04-2025", "Opmerking": ""},
        {"Bewerking": "Kanten breken machinaal dubbelzetten", "Startdatum": "15-04-2025", "Opmerking": ""},
        {"Bewerking": "Trommelen", "Startdatum": "15-04-2025", "Opmerking": ""},
        {"Bewerking": "Tappen", "Startdatum": "15-04-2025", "Opmerking": ""},
        {"Bewerking": "CMA Boorstraat", "Startdatum": "16-04-2025", "Opmerking": ""},
        {"Bewerking": "Zetten 3M", "Startdatum": "16-04-2025", "Opmerking": ""},
        {"Bewerking": "Zetten Dynacel", "Startdatum": "16-04-2025", "Opmerking": ""},
        {"Bewerking": "Lassen", "Startdatum": "16-04-2025", "Opmerking": ""},
        {"Bewerking": "Robotlassen", "Startdatum": "16-04-2025", "Opmerking": ""},
        {"Bewerking": "Kwaliteitscontrole", "Startdatum": "17-04-2025", "Opmerking": ""},
        {"Bewerking": "Eindcontrole", "Startdatum": "17-04-2025", "Opmerking": ""},
        {"Bewerking": "Logistiek", "Startdatum": "17-04-2025", "Opmerking": ""}
    ];

    const Inkoop = [
        {"Artikel": "Plaat 1500x1000", "Omschrijving": "Aluminium, 2cm dik", "Aantal": 60},
        {"Artikel": "Buis ø5cm", "Omschrijving": "Staal, 3m", "Aantal": 12},
        {"Artikel": "...", "Omschrijving": "...", "Aantal": "..."}
    ];

    const UitbesteedWerk = [
        {"Stuklijst": "5-1105-3180-0-A5", "Omschrijving": "Nabewerking gat ø26H7 (2x)", "Startdatum": "30-01-2025", "Bedrijf": "Kessel Machinefabriek B.V.", "Aantal": 15},
        {"Stuklijst": "5-1105-3456-0-J", "Omschrijving": "Beitsen", "Startdatum": "05-02-2025", "Bedrijf": "", "Aantal": 15}
    ];

    const [data, setData] = useState([]);
    const [newProduct, setNewProduct] = useState("");

    async function addProduct() {
        if (newProduct.trim() === "") return;

        const newEntry = {
            "customerID": 1,
            "orderID": 1,
            "orderIDCustomer": null,
            "teamID": -1,
            "createdBy": 1,
            "plannedStart": "2025-04-20T00:00:00.000Z",
            "plannedDelivery": "2025-04-25T00:00:00.000Z",
            "deliveryDate": null
        };

        try {
            const response = await fetch("http://localhost:8080/api/products/create", {
                method: "POST",
                body: JSON.stringify(newEntry),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setData(t => [...t, result]);
            setNewProduct("");
        } catch (error) {
            console.error("Failed to add product:", error);
        }
    }

    return (
        <>
            <Navbar title={"Product Aanmaken"} route={"Producten / Product Aanmaken"} />
            <div className={Style.CollapsTable}>
                <Table jsonData={Bewerking} title={"Bewerking"} openByDefault={true} />
                <Table jsonData={Inkoop} title={"Inkoop"} openByDefault={true} />
                <Table jsonData={UitbesteedWerk} title={"Uitbesteed Werk"} openByDefault={true} />
                <Button
                    title={"Opslaan"}
                    triggerFunction={addProduct}
                    color={'#FFFFFF'}
                />
            </div>
        </>
    );
}

export default ProductAanmaak;
