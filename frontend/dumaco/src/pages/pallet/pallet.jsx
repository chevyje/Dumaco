import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import Navbar from "../../components/navbar/navbar.jsx";
import Style from "../noPageFound/noPageFound.module.css";
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";

function pallet() {
    const navigate = useNavigate();

    const route = breadRouteGen({
        "/home": "Home",
        "/pallets": "Pallets",
        "/zone": "Zone",
        "/pallet": "Pallet",
    });

    const redirectHome = () => {
        navigate("/pallets/zone/bewerken");
    }

    return (
        <>
            <Navbar title={"Pallet Informatie"} route={route}/>
            <div className={Style.contentContainer}>
                <h1 className={Style.contentTitle}>Ehh ja komt nog.</h1>
                <h2 className={Style.contentSubtitle}>dus je mag terug naar de pallets pagina.</h2>
                <Button title={"Zone Bewerken"} triggerFunction={redirectHome} icon={"home"} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"} className={Style.homeBtn} doHover={true} hoverColor={"#000000"} hoverTextColor={"#FFFFFF"} hoverChangeIcon={"white-home"}/>
            </div>
        </>
    );
}

export default pallet;