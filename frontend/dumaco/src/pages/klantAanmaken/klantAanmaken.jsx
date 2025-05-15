import Navbar from "../../components/navbar/navbar.jsx";
import {useNavigate} from "react-router-dom";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import style from "../klantAanmaken/klantAanmaken.module.css";
import {getCookie} from "../../components/Cookies.js";

function KlantAanmaken() {
    const navigate = useNavigate();
    const route = breadRouteGen({
        "/home": "Home",
        "/orders": "Orders",
        "/orders/aanmaken": "Aanmaken",
    });

    const getAddress = async () => {

    }

    const Save = async (e)=> {
        e.preventDefault();

        // Data construct for request
        const data = {
            "name": e.target.name.value,
            "address": e.target.address.value,
            "dockerNumber": e.target.dockerNumber.value,
            "palletTracking": e.target.palletTracking.checked,
            "phoneNumber": e.target.phoneNumber.value,
            "mailAddress": e.target.mailAddress.value,
        }

        // Api call to make the order
        const orderResponse = await fetch("http://localhost:8080/api/customers/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        const orderData = await orderResponse.json()
        console.log(orderData);
        console.log(JSON.stringify(data));
    }
    return(
        <>
            <Navbar title={"Order Aanmaken"} route={route} />
            <form onSubmit={Save}>
                <input className={style.input} name="name" placeholder="naam" />
                <input className={style.input} name="address" placeholder="adres" />
                <input className={style.input} name="dockerNumber" placeholder="deur nummer" />
                <input className={style.input} type="checkbox" name="palletTracking"/>
                <input className={style.input} name="phoneNumber" placeholder="telefoon" />
                <input className={style.input} name="mailAddress" placeholder="email" />
                <button className={style.button}>Opslaan</button>

            </form>
        </>
    );
}

export default KlantAanmaken;
