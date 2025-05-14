import Navbar from "../../components/navbar/navbar.jsx";
import {useNavigate} from "react-router-dom";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import style from "../orderAanmaken/orderAanmaken.module.css";
import {getCookie} from "../../components/Cookies.js";

function OrderAanmaken() {
    const navigate = useNavigate();
    const route = breadRouteGen({
        "/home": "Home",
        "/orders": "Orders",
        "/orders/aanmaken": "Aanmaken",
    });

    const Save = async (e)=> {
        e.preventDefault();

        // Api call to get customerID from customerName
        const customerResponse = await fetch("http://localhost:8080/api/customers/name", {
            method: "POST",
            body: JSON.stringify({
                name: e.target.customerName.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const customerData = await customerResponse.json()
        let customerID = customerData.customerId;

        // Data construct for request
        const data = {
            "customerID": customerID.toString(),
            "orderIDCustomer": e.target.orderIdCustomer.value,
            "teamId": "",
            "createdBy": getCookie("userID") || "1",
            "plannedStart": e.target.plannedStart.value,
            "plannedDelivery": e.target.plannedDelivery.value,
            "deliveryDate": ""
        }


        // Api call to make the order
        const orderResponse = await fetch("http://localhost:8080/api/orders/", {
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
                <input className={style.input} name="customerName" placeholder="Klantnaam" />
                <input className={style.input} name="orderIdCustomer" placeholder="Ordernummer klant" />
                <input className={style.date} type="date" name="plannedStart"></input>
                <input className={style.date} type="date" name="plannedDelivery"></input>
                <button className={style.button}>Opslaan</button>

            </form>
        </>
    );
}

export default OrderAanmaken;
