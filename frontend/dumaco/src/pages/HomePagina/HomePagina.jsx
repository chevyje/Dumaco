import Navbar from "../../components/navbar/navbar.jsx";
import Card from "../../components/Card/card.jsx"
import Dropdown2 from "../../components/dropdown2/dropdown2.jsx";


function HomePagina() {

    const options = [
        { value: 'blauw', label: 'Blauw' },
        { value: 'rood', label: 'Rood' },
        { value: 'oranje', label: 'Oranje' },
        { value: 'geel', label: 'Geel' }
    ];

    return(
        <>
            <Navbar title={"Home"} route={"Home"} />
            <Card>
                <Dropdown2 options={options}/>
            </Card>
        </>
    )

}

export default HomePagina