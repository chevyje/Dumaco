import Navbar from "../../components/navbar/navbar.jsx";
import Card from "../../components/Card/card.jsx";
import Dropdown2 from "../../components/dropdown2/dropdown2.jsx";
import Style from "../../pages/HomePagina/HomePagina.module.css";
import Table from "../../components/table/table.jsx";
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import {useEffect} from "react";

function HomePagina() {
    const navigate  = useNavigate();

    // Zet scrollbaarheid uit voor de home pagina
    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, []);

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
        { 0: '/orderbonnenkantoor/order' },
        { 1: '/orderbonnenkantoor/order' },
        { 2: '/orderbonnenkantoor/order' },
    ];

    const userName = {userName: "Hans"};

    //Datums
    const today = new Date();
    const dayOfWeek = today.getDay();
    let tijdTotWeekend;

    if (dayOfWeek < 5) {
        const DaysTillEndOfWeek = 6 - dayOfWeek;
        tijdTotWeekend = {tijdTotWeekend: `Nog ${DaysTillEndOfWeek} dagen tot het weekend.`};
    } else if (dayOfWeek === 5) {
        const HoursTillEndOfWeek = 16 - today.getHours();
        const MinutesTillEndOfWeek = 60 - today.getMinutes();
        if(HoursTillEndOfWeek === 0) tijdTotWeekend = {tijdTotWeekend: `Nog ${MinutesTillEndOfWeek} minuten tot het weekend.`};
        else if(HoursTillEndOfWeek < 0) tijdTotWeekend = {tijdTotWeekend: "Weekend! wat doe je hier nog?"};
        else tijdTotWeekend = {tijdTotWeekend: `Nog ${HoursTillEndOfWeek} uur en ${MinutesTillEndOfWeek} minuten tot het weekend.`};

        if(MinutesTillEndOfWeek <= 0 || HoursTillEndOfWeek >=60) tijdTotWeekend = {tijdTotWeekend: `Nog ${HoursTillEndOfWeek} uur tot het weekend.`};
    } else if (dayOfWeek > 5) {
        tijdTotWeekend = {tijdTotWeekend: "Weekend! wat doe je hier nog?"};
    } else {
        tijdTotWeekend = {tijdTotWeekend: "Niemand weet wanneer het weekend is."};
    }

    const redirectCreateOrder = () => {
        navigate('/orderbonaanmaken');
    }

    const redirectCreateCustomer = () => {
        navigate('/klantaanmaken');
    }

    const route = breadRouteGen({
        "/home": "Home",
    });

    return(
        <div>
            <div className={Style.dashboard}>
                <Navbar title={"Home"} route={route} />

                <header className={Style.headerContainer}>
                    <h1>Goedendag, {userName.userName}</h1>
                    <p className={Style.headerSubtitle}>{tijdTotWeekend.tijdTotWeekend}</p>
                    <div className={Style.homeBtns}>
                        <Button className={Style.homeBtn} title={"Order"} icon={"plus"} triggerFunction={redirectCreateOrder} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"}/>
                        <Button className={Style.homeBtn} title={"Klant"} icon={"plus"} triggerFunction={redirectCreateCustomer} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"}/>
                    </div>
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
                        <div className={Style.tableHeader}>
                            <h1 className={Style.tableHeaderText}>Te late orders (vandaag)</h1>
                        </div>
                        <Table jsonData={rows} navigationData={rowsPageDestinations} />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default HomePagina;
