import Navbar from "../../components/navbar/navbar.jsx";
import Card from "../../components/Card/card.jsx";
import Dropdown2 from "../../components/dropdown2/dropdown2.jsx";
import Style from "../../pages/HomePagina/HomePagina.module.css";
import Table from "../../components/table/table.jsx";

function HomePagina() {

    const options = [
        { value: 'vandaag', label: 'Vandaag' },
        { value: 'week', label: 'Deze week' },
        { value: 'maand', label: 'Deze maand' },
    ];

    const rows = [
        {"Startdatum": "27-01-2025", "Status": "Lassen", "Werknemer": "H. Botterboy", "Leverdatum": "18-03-2025", "Klant": "Lely Industries NV"},
        {"Startdatum": "28-01-2025", "Status": "Zetten", "Werknemer": "J. Blankers", "Leverdatum": "19-03-2025", "Klant": "Merrell"},
        {"Startdatum": "29-01-2025", "Status": "Lassen", "Werknemer": "M. de Vrijer", "Leverdatum": "22-03-2025", "Klant": "Merrell"},
    ];

    const rowsPageDestinations = [
        { 0: '/orderbonkantoor' },
        { 1: '/orderbonkantoor' },
        { 2: '/orderbonkantoor' },
    ];

    const userName = {userName: "Hans"};
    const tijdTotWeekend = {tijdTotWeekend: 3};

    return(
        <>
            <div className={Style.dashboard}>
                <Navbar title={"Home"} route={"Home"} />

                <header className={Style.headerContainer}>
                    <h1>Goedendag, {userName.userName}</h1>
                    <p className={Style.headerSubtitle}>Nog {tijdTotWeekend.tijdTotWeekend} dagen tot het weekend!</p>
                </header>

                <hr />

                <div className={Style.mainContent}>
                    <div className={Style.cardsContainer}>
                        <h1 className={Style.actueleHeader}>Actuele cijfers</h1>
                        <div className={Style.cardGrid}>
                            <Card H1Stats={12} icon={"arrow-up"} pStats="7  t.o.v. week" PSoort="Openstaande orders">
                                <Dropdown2 options={options}/>
                            </Card>
                            <Card H1Stats={5} icon={"arrow-down"} pStats="1  t.o.v. week" PSoort="Afgewezen orders">
                                <Dropdown2 options={options}/>
                            </Card>
                            <Card H1Stats={8} icon={"arrow-up"} pStats="5  t.o.v. week" PSoort="Afgeronde orders">
                                <Dropdown2 options={options}/>
                            </Card>
                            <Card H1Stats="27 dagen" PSoort="Gem. doorlooptijd">
                                <Dropdown2 options={options}/>
                            </Card>
                        </div>
                    </div>
                    <div className={Style.tableContainer}>
                        <h1 className={Style.tableHeader}>Te late orders</h1>
                        <Table jsonData={rows} navigationData={rowsPageDestinations} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePagina;
