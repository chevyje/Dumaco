import Style from './inkoopPagina.module.css';
import Navbar from "../../components/navbar/navbar.jsx";
import Table from "../../components/table/table.jsx";
import Button from "../../components/button/button.jsx";
import { useNavigate } from "react-router-dom";
import React from "react";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

function InkoopPagina() {

    const navigate = useNavigate();


    const rows = [
        {"Artikel": "Plaat 2000 x 1500", "Omschrijving": "Dikte 2cm", "Bestellingen": 17, "Laatst besteld": "4 dagen geleden"},
        {"Artikel": "Zeskantmoer", "Omschrijving": "Verzinkt", "Bestellingen": 68, "Laatst besteld": "2 uur geleden"},
        {"Artikel": "Buis", "Omschrijving": "5 meter?", "Bestellingen": 0, "Laatst besteld": "Niet besteld"},
        {"Artikel": "Iets", "Omschrijving": "Groene verf", "Bestellingen": 5, "Laatst besteld": "1 dag geleden"},
    ];

    const rowsPageDestinations = [
        { 0: '/inkoop/edit' },
        { 1: '/inkoop/edit' },
        { 2: '/inkoop/edit' },
        { 3: '/inkoop/edit' }
    ];

    const createArtikel = () => {
        navigate("/inkoop/edit")
    }

    const route = breadRouteGen({
        "/home": "Home",
        "/inkoop": "Inkoop Standaarden",
        "inkoop/edit": "Edit",
    });

    return (
        <>
            <Navbar title={"Inkoop standaarden"} route={route} />

            <div className={Style.header}>
                <div className={Style.btnLeft}>
                    <Button
                        title={"Terug"}
                        triggerFunction={null}
                        color={'#FFFFFF'}
                        icon={"arrow-left"}
                        textColor={"#000000"}
                        borderColor={"#000000"}
                    />
                </div>
                <div className={Style.btnRight}>
                    <Button
                        title={"Artikel aanmaken"}
                        triggerFunction={ () => createArtikel()}
                        color={'#FFFFFF'}
                        icon={"plus"}
                        textColor={"#000000"}
                        borderColor={"#000000"}
                    />
                </div>
            </div>
            <div className={Style.tableContainer}>
                <Table jsonData={rows} navigationData={rowsPageDestinations} />
            </div>

        </>
    )
}

export default InkoopPagina;