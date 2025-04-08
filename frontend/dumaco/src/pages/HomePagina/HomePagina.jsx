import Style from "./HomePagina.module.css"
import Navbar from "../../components/navbar/navbar.jsx";
import Card from "../../components/Card/Card.jsx"


function HomePagina() {

    return(
        <>
            <Navbar title={"Home"} route={"Home"} />
            <Card/>
        </>
    )

}

export default HomePagina