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

    return(
        <>
            <div className={Style.dashboard}>
                <Navbar title={"Home"} route={"Home"} />
                <hr />
                <div className={Style.cardsContainer}>
                <div className={Style.cardGrid}>
                    <div className={Style.card}>
                        <Card H1Stats={12} pStats="7  t.o.v. week" PSoort="Openstaande orders">
                            <Dropdown2 options={options}/>
                        </Card>
                    </div>
                    <div className={Style.card}>
                        <Card H1Stats={5} pStats="1  t.o.v. week" PSoort="Afgewezen orders">
                            <Dropdown2 options={options}/>
                        </Card>
                    </div>
                    <div className={Style.card}>
                        <Card H1Stats={8} pStats="5  t.o.v. week" PSoort="Afgeronde orders">
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