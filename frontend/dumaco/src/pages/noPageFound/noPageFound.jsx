import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "./noPageFound.module.css";
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";

function noPageFound() {
    const navigate = useNavigate();

    const route = breadRouteGen({
        "/home": "Home"
    });

    const redirectHome = () => {
        navigate("/home");
    }

    return (
        <>
            <Navbar title={"404 ‒ Pagina niet gevonden"} route={route}/>
            <div className={Style.contentContainer}>
                <h1 className={Style.contentTitle}>Geen inhoud gevonden.</h1>
                <h2 className={Style.contentSubtitle}>De inhoud is mogelijk verouderd, tijdelijk niet zichtbaar of verwijderd.</h2>
                <h2 className={Style.contentSubtitle}>Controleer de link of klik hieronder om naar Home te gaan.</h2>
                <Button title={"Home"} triggerFunction={redirectHome} icon={"home"} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"} className={Style.homeBtn} doHover={true} hoverColor={"#000000"} hoverTextColor={"#FFFFFF"} hoverChangeIcon={"white-home"}/>
            </div>
        </>
    );
}

export default noPageFound;