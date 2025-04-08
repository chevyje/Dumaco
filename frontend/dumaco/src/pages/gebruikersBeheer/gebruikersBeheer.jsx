import { useState } from "react";
import Table from "../../components/table/table.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import Styles from "./gebruikersBeheer.module.css";

function GebruikersBeheer() {
    const navigate = useNavigate();

    const [state, setState] = useState({
        results: [
            { Naam: "Tobias", 'Laatste Login': "18" },
            { Naam: "Henk", 'Laatste Login': "38" },
            { Naam: "Tasdasdasdasd", 'Laatste Login': "300" },
        ]
    });

    function showUserEdit() {
        navigate("/gebruikersbeheeredit");
    }

    return (
        <>
            <Navbar title={"Gebruikers beheer"} route={"Management / Gebruikers"}/>
            <div className={Styles.tableContainer}>
                <Table
                    jsonData={state.results}
                    title={"Ontkoppelde gebruikers"}
                    showUserEdit={true}
                    showPencil={true}
                    editPageFunction={showUserEdit}
                />
                <Table
                    jsonData={state.results}
                    title={"Team Blauw"}
                    showUserEdit={true}
                    showPencil={true}
                    editPageFunction={showUserEdit}
                />
                <Table
                    jsonData={state.results}
                    title={"Team Blauw"}
                    showUserEdit={true}
                    showPencil={true}
                    editPageFunction={showUserEdit}
                />
            </div>
        </>
    );
}

export default GebruikersBeheer;
