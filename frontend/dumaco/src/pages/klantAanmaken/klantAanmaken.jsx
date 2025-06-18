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
                <div className={style.container}>
                    <div className={style.inputField}>
                        <label>Naam</label>
                        <div className={style.inputContainer}>
                            <input className={style.input} name="name" />
                        </div>
                    </div>
                    <div className={style.inputField}>
                        <label>Adres</label>
                        <div className={style.inputContainer}>
                            <input className={style.input} name="address" />
                        </div>
                    </div>
                    <div className={style.inputField}>
                        <label>Deur nummer</label>
                        <div className={style.inputContainer}>
                            <input className={style.input} name="dockerNumber" />
                        </div>
                    </div>
                    <div className={style.inputField}>
                        <label>pallet tracking</label>
                        <div className={style.inputContainer}>
                            <input className={style.input} type="checkbox" name="palletTracking"/>
                        </div>
                    </div>
                    <div className={style.inputField}>
                        <label>Telefoon nummer</label>
                        <div className={style.inputContainer}>
                            <input className={style.input} name="phoneNumber" />
                        </div>
                    </div>
                    <div className={style.inputField}>
                        <label>Email adres</label>
                        <div className={style.inputContainer}>
                            <input className={style.input} name="mailAddress" />
                        </div>
                    </div>
                    <button className={style.button}>Opslaan</button>
                </div>
            </form>
        </>
    );
}

export default KlantAanmaken;
