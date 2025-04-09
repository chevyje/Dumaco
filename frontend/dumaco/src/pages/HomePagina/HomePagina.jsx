import Navbar from "../../components/navbar/navbar.jsx";
import Card from "../../components/Card/card.jsx";
import Dropdown2 from "../../components/dropdown2/dropdown2.jsx";
import Style from "../../pages/HomePagina/HomePagina.module.css";


function HomePagina() {


    const options = [
        { value: 'vandaag', label: 'Vandaag' },
        { value: 'week', label: 'Deze week' },
        { value: 'maand', label: 'Deze maand' },
    ];

    const userName = {userName: "Hans"};

    const tijdTotWeekend = {tijdTotWeekend: 3}

    return(
        <>
            <div className={Style.dashboard}>
                <Navbar title={"Home"} route={"Home"} />

                <header className={Style.headerContainer}>
                    <h1>Goedendag, {userName.userName}</h1>
                    <p>Nog {tijdTotWeekend.tijdTotWeekend} dagen tot het weekend!</p>
                </header>

                <hr />
                <div className={Style.cardsContainer}>
                <div className={Style.cardGrid}>
                    <div className={Style.card}>
                        <Card H1Stats={12}
                              icon={"ban"} 
                              pStats="7  t.o.v. week"
                              PSoort="Openstaande orders">
                            <Dropdown2 options={options}/>
                        </Card>
                    </div>
                    <div className={Style.card}>
                        <Card H1Stats={5} 
                              icon={"ban"} 
                              pStats="1  t.o.v. week" 
                              PSoort="Afgewezen orders">
                            <Dropdown2 options={options}/>
                        </Card>
                    </div>
                    <div className={Style.card}>
                        <Card H1Stats={8} 
                              icon={"ban"} 
                              pStats="5  t.o.v. week"
                              PSoort="Afgeronde orders">
                            <Dropdown2 options={options}/>
                        </Card>
                    </div>
                    <div className={Style.card}>
                        <Card H1Stats="27 Dagen" PSoort="Gem doorlooptijd">
                            <Dropdown2 options={options}/>
                        </Card>
                    </div>
                </div>

                </div>
            </div>

        </>
    )

}

export default HomePagina