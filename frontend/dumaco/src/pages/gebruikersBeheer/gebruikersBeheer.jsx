import Table from "../../components/table/table.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import Styles from "./gebruikersBeheer.module.css";

function GebruikersBeheer() {
    const navigate = useNavigate();

        const rows = [
            { Naam: "Tobias", 'Laatste Login': "18" },
            { Naam: "Henk", 'Laatste Login': "38" },
            { Naam: "Tasdasdasdasd", 'Laatste Login': "300" },
        ];

        const rowsPageDestinations = [
            { 0: '/gebruikersbeheeredit' },
            { 1: '/gebruikersbeheeredit' },
            { 2: '/gebruikersbeheeredit' },
        ]

    function showUserEdit() {
        navigate("/gebruikersbeheeredit");
    }

    return (
        <>
            <Navbar title={"Gebruikers beheer"} route={"Management / Gebruikers"}/>
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
