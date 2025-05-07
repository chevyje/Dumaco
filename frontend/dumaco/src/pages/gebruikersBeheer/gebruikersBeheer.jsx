import Table from "../../components/table/table.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import Styles from "./gebruikersBeheer.module.css";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

function GebruikersBeheer() {
    const navigate = useNavigate();

        const rows = [
            { Naam: "Tobias", 'Laatste Login': "18" },
            { Naam: "Henk", 'Laatste Login': "38" },
            { Naam: "Tasdasdasdasd", 'Laatste Login': "300" },
        ];

        const rowsPageDestinations = [
            { 0: '/gebruikersbeheer/edit' },
            { 1: '/gebruikersbeheer/edit' },
            { 2: '/gebruikersbeheer/edit' },
        ]

    function showUserEdit() {
        navigate("/gebruikersbeheer/edit");
    }

    const route = breadRouteGen({
        "/home": "Home",
        "/gebruikersbeheer": "Gebruikers beheer"
    });

    return (
        <>
            <Navbar title={"Gebruikers beheer"} route={route}/>
            <div className={Styles.tableContainer}>
                <Table
                    jsonData={rows}
                    navigationData={rowsPageDestinations}
                    title={"Ontkoppelde gebruikers"}
                    showUserEdit={true}
                    showPencil={true}
                />
                <Table
                    jsonData={rows}
                    navigationData={rowsPageDestinations}
                    title={"Team Blauw"}
                    showUserEdit={true}
                    showPencil={true}
                />
                <Table
                    jsonData={rows}
                    navigationData={rowsPageDestinations}
                    title={"Team Rood"}
                    showUserEdit={true}
                    showPencil={true}
                />
            </div>
        </>
    );
}

export default GebruikersBeheer;
