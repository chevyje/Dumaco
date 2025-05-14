import Navbar from "../../components/navbar/navbar.jsx";
import {useNavigate} from "react-router-dom";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import style from "../InlogPagina/inlogPagina.module.css";
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
                <input name="customerName" placeholder="Klant naam"></input>
                <input name="orderIdCustomer" placeholder="Order nummer klant"></input>
                <input type="date" name="plannedStart"></input>
                <input type="date" name="plannedDelivery"></input>
                <button>Opslaan</button>
            </form>
        </>
    );
}

export default OrderAanmaken;
