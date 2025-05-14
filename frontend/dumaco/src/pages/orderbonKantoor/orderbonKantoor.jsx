import Table from "../../components/collapse/collapseTable.jsx";
import ExcelTable from "../../components/table/table.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import CustomButton from "../../components/button/button.jsx";
import Style from "./orderbonKantoor.module.css";
import KlantenStyle from "../klantOverzicht/klantOverzicht.module.css";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

function klantOverzicht() {
    const navigate = useNavigate();
    const [productData, setProductData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const { id} = useParams();

    function changeTime(date) {
        if (date) {
            const ISOdate = new Date(date);
            return `${ISOdate.getDate()}-${ISOdate.getMonth() + 1}-${ISOdate.getFullYear()}`;
        } else{
            return "-";
        }
    }

    const GetProduct = async (limit, offset, orderID) => {
        try {
            const requestData = await fetch("http://localhost:8080/api/product/Filtered", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    limit: limit,
                    offset: offset,
                    orderID: orderID
                })
            })
            const data = await requestData.json();
            const formattedData = data.map(item => {
                const { productID, palletNumber, deliveryDate, quantity, customerName, ...rest} = item;
                return {
                    "Product id": productID,
                    "Pallet nummer": palletNumber,
                    "Leverdatum": changeTime(deliveryDate),
                    "Klant": customerName,
                    "Aantal": quantity,
                    ...rest,
                };
            })
            setProductData(formattedData);
        } catch (e) {
            console.log(e)
        }
    }

    const GetCustomer = async (customerID) => {
        try {
            const requestData = await fetch(`http://localhost:8080/api/customers/${customerID}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await requestData.json();
            setCustomerData(data);
        } catch (e) {
            console.log(e)
        }
    }

    const redirectKlant = () => {
        navigate("/klanten/klant");
    }

    const rowsPageDestinations = [
        {0: '/orders/order/product'}
    ]

    useEffect(() => {
        GetProduct(10, 0, id);
        GetCustomer(1);
    }, []);

    const Inkoop = [
        {"Code": "5-1004-1998-0-C", "Omschrijving": "Buis RVS-316 inw Ra=0,6µm", "Aantal": 60, "Ontvangen": false},
        {"Code": "5-1003-2916-0-J", "Omschrijving": "Lagerplaat", "Aantal": 15, "Ontvangen": false},
        {"Code": "5-1003-2924-0-B", "Omschrijving": "Pin, ø21 L=51", "Aantal": 15, "Ontvangen": true},
        {"Code": "5-1004-0807-0-A", "Omschrijving": "Bush, HVV ø15 L=59,5", "Aantal": 30, "Ontvangen": false},
        {"Code": "5-1003-2945-0", "Omschrijving": "Gebogen buis", "Aantal": 15, "Ontvangen": false},
        {"Code": "5-1003-2935-0-A", "Omschrijving": "Staf, ø6 L=135", "Aantal": 15, "Ontvangen": false}
    ];

    const UitbesteedWerk = [
        {"Stuklijst": "5-1105-3180-0-A5", "Omschrijving": "Nabewerking gat ø26H7 (2x)", "Startdatum": "30-01-2025", "Bedrijf": "Kessel Machinefabriek B.V.", "Aantal": 15, "Ontvangen": false},
        {"Stuklijst": "5-1105-3456-0-J", "Omschrijving": "Beitsen", "Startdatum": "05-02-2025", "Bedrijf": "", "Aantal": 15, "Ontvangen": false}
    ];

    const route = breadRouteGen({
        "/home": "Home",
        "/orders": "Orders",
        "/orders/order": "Order",
    });

    return(
        <>
            <Navbar title={`Order Inzicht #${id}`} route={route} />
            <div className={Style.headerButtons}>
                <CustomButton title={"Order Bewerken"} triggerFunction={null} icon={"pencil"} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"} />
                <CustomButton title={"Product Aanmaken"} triggerFunction={null} icon={"plus"} color={"#FFFFFF"} textColor={"#000000"} borderColor={"#000000"}/>
            </div>

            <div className={Style.infoContainer}>
                <div>
                    <ExcelTable jsonData={productData}
                                navigationData={rowsPageDestinations}
                                hideColumns={["orderID", "productNumber", "materialID", "teamID", "createdBy"]}/>
                </div>
                <div className={Style.CollapseTable}>
                    <Table jsonData={Inkoop} title={"Totaal Inkopen"} openByDefault={true} />
                    <Table jsonData={UitbesteedWerk} title={"Totaal Uitbesteed Werk"} openByDefault={true} />
                </div>
            </div>
            <div className={Style.klantenContainer} onClick={redirectKlant}>
                <div className={KlantenStyle.KlantInfo}>
                    <div>
                        <h3>{customerData[0]?.customerName}</h3>
                    </div>
                    <div className={KlantenStyle.info}>
                        <img src="../../../icons/location.svg" alt=""></img>
                        <p>{customerData[0]?.address}</p>
                    </div>
                    <div className={KlantenStyle.info}>
                        <img src="../../../icons/user.svg" alt=""></img>
                        <p>Jian Jiao {customerData[0]?.contact}</p>
                    </div>
                    <div className={KlantenStyle.info}>
                        <img src="../../../icons/phone.svg" alt=""></img>
                        <p>{customerData[0]?.phoneNumber}</p>
                    </div>
                    <div className={KlantenStyle.info}>
                        <img src="../../../icons/truck.svg" alt=""></img>
                        <p>Deur {customerData[0]?.dockerNumber}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default klantOverzicht;
