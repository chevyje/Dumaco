import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "./noAccess.module.css";
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";

function noAccess() {
    const navigate = useNavigate();

    const route = breadRouteGen({
        "/home": "Home"
    });

    const redirectHome = () => {
        navigate("/home");
    }

    return (
        <>
            <Navbar title={"Geen toegang"} route={route}/>
            <div className={Style.contentContainer}>
                <h1 className={Style.contentTitle}>Geen toegang</h1>
                <h2 className={Style.contentSubtitle}>Je mag deze pagina niet bezoeken met de functie die je hebt.</h2>
                <h2 className={Style.contentSubtitle}>Kijk na of je naar de goede pagina gaat of ga terug naar home.</h2>
                <Button title={"Home"} triggerFunction={redirectHome} icon={"home"} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"} className={Style.homeBtn} doHover={true} hoverColor={"#000000"} hoverTextColor={"#FFFFFF"} hoverChangeIcon={"white-home"}/>
            </div>
        </>
    );
}

export default noAccess;