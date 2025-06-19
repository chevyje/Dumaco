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

        // Validate input
        let emptyfields = 0;
        if(!e.target.plannedStart.value) e.target.plannedStart.parentElement.style.borderColor = "red"; emptyfields++;
        if(!e.target.plannedDelivery.value) e.target.plannedDelivery.parentElement.style.borderColor = "red"; emptyfields++;
        if(!e.target.name.value || e.target.name.value === "") e.target.name.parentElement.style.borderColor = "red"; emptyfields++;
        if(!e.target.order.value || e.target.order.value === "") e.target.order.parentElement.style.borderColor = "red"; emptyfields++;
        if(emptyfields < 0) return;

        try{
            // Api call to get customerID from customerName
            const customerResponse = await fetch("http://localhost:8080/api/customers/name", {
                method: "POST",
                body: JSON.stringify({
                    name: e.target.name.value,
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
                "orderIDCustomer": e.target.order.value,
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
        }catch(e){
            console.error(e);
            return;
        }

        navigate("/home");
    }
    return(
        <>
            <Navbar title={"Order Aanmaken"} route={route} />
                <form onSubmit={Save}>
                    <div className={style.container}>
                        <div className={style.inputField}>
                            <label>klantnaam</label>
                            <div className={style.inputContainer}>
                                <input className={style.input} name="name"/>
                            </div>
                        </div>
                        <div className={style.inputField}>
                            <label>order id klant</label>
                            <div className={style.inputContainer}>
                                <input className={style.input} name="order"/>
                            </div>
                        </div>
                        <div className={style.inputField}>
                            <label>start datum</label>
                            <div className={style.dateContainer}>
                                <input className={style.date} type="date" name="plannedStart"></input>
                            </div>
                        </div>
                        <div className={style.inputField}>
                            <label>lever datum</label>
                            <div className={style.dateContainer}>
                                <input className={style.date} type="date" name="plannedDelivery"></input>
                            </div>
                        </div>
                        <button className={style.button}>Opslaan</button>
                    </div>
                </form>
        </>
    );
}

export default OrderAanmaken;
