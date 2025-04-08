import Navbar from "../../components/navbar/navbar.jsx";
import Card from "../../components/Card/card.jsx"
import Dropdown2 from "../../components/dropdown2/dropdown2.jsx";
import Style from "../../pages/HomePagina/HomePagina.module.css";


function HomePagina() {

    const options = [
        { value: 'blauw', label: 'Blauw' },
        { value: 'rood', label: 'Rood' },
        { value: 'oranje', label: 'Oranje' },
        { value: 'geel', label: 'Geel' }
    ];

    return(
        <>
            <div className={Style.dashboard}>
                <Navbar title={"Home"} route={"Home"} />
                <div className={Style.cardGrid}>
                    <div className={Style.card}>
                        <Card>
                            <Dropdown2 options={options}/>
                        </Card>
                    </div>
                    <div className={Style.card}>
                        <Card>
                            <Dropdown2 options={options}/>
                        </Card>
                    </div>
                    <div className={Style.card}>
                        <Card>
                            <Dropdown2 options={options}/>
                        </Card>
                    </div>
                </div>
            </div>

        </>
    )

}

export default HomePagina