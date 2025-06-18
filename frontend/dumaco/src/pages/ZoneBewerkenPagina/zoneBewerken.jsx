import Style from './zoneBewerken.module.css'
import Button from "../../components/button/button.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Main from "../../layouts/Main.jsx";
import React from "react";
import Table from "../../components/table/table.jsx";

const zoneBewerken = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { zone } = location.state || {};

    const route = breadRouteGen({
        "/home": "Home",
        "/pallets": "Pallets",
        "zone/bewerken": "Zone Bewerken",
    });


    const cancelEdit = () => {
        navigate("/pallets");
    };

    const rows = [
        {"Artikel": "Plaat 2000 x 1500", "Omschrijving": "Dikte 2cm", "Bestellingen": 17, "Laatst besteld": "4 dagen geleden"},
        {"Artikel": "Zeskantmoer", "Omschrijving": "Verzinkt", "Bestellingen": 68, "Laatst besteld": "2 uur geleden"},
        {"Artikel": "Buis", "Omschrijving": "5 meter?", "Bestellingen": 0, "Laatst besteld": "Niet besteld"},
        {"Artikel": "Iets", "Omschrijving": "Groene verf", "Bestellingen": 5, "Laatst besteld": "1 dag geleden"},
    ];

    const rowsPageDestinations = [
        { 0: '/pallets/zone/pallet' },
        { 1: '/pallets/zone/pallet' },
        { 2: '/pallets/zone/pallet' },
        { 3: '/pallets/zone/pallet' }
    ];

    return (
        <>
            <Main />
            <Navbar title={"Zone bewerken"} route={route}/>
            <div className={Style.headerContainer}>
                <div className={Style.backBtn}>
                    <Button
                        title={"Terug"}
                        triggerFunction={cancelEdit}
                        color={'#FFFFFF'}
                        icon={"arrow-left"}
                        textColor={"#000000"}
                        borderColor={"#000000"}
                    />
                </div>
                <h2 className={Style.zoneTitle}>{zone}</h2>
                <div className={Style.editZone}>
                    <Button
                        title={"Hernoemen"}
                        triggerFunction={cancelEdit}
                        color={'#FFFFFF'}
                        icon={"cursor-text"}
                        textColor={"#000000"}
                        borderColor={"#000000"}
                    />
                    <Button
                        title={"Kleur"}
                        triggerFunction={cancelEdit}
                        color={'#FFFFFF'}
                        icon={"color-circle"}
                        textColor={"#000000"}
                        borderColor={"#000000"}
                    />
                </div>
            </div>
            <div className={Style.tableContainer}>
                <Table jsonData={rows} navigationData={rowsPageDestinations} />
            </div>
        </>
    );
};



function saveUser(){
    console.log("saveUser() function called.");
}

export default zoneBewerken;
