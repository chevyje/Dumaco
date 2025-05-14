import Navbar from "../../components/navbar/navbar.jsx";
import Style from "../ProductAanmaken/ProductAanMaken.module.css";
import CollapseTable2 from "../../components/CollapseTable2/CollapseTable2.jsx";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import CollapseTableAdd from "../../components/CollapseTable2/CollapseTableAdd.jsx";
import Button from "../../components/button/button.jsx";
import {useEffect, useState} from "react";

function Productaanmaken() {
    const [editTypes, setEditTypes] = useState([]);

    const EditTypesData = async () => {
        const requestData = await fetch("http://localhost:8080/api/editTypes", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        const rawData = await requestData.json();
        const formattedData = rawData.map(item => {
            const { editID, editName } = item;
            return {
                id: editID,
                label: editName,
            };
        });
        setEditTypes(formattedData);
    }

      const route = breadRouteGen({
        "/home": "Home",
        "/productaanmaken": "Product Aanmaken",
        });

    function logAllData(){
        console.log("Alle data opgeslagen.... hoop ik")
    }

    const InkoopData = [
        { item1: "Plaat 1500 x 1000", item2: "Aluminium, 2cm dikte", item3: 60 },
        { item1: "ADG47284F", item2: "Plaat 2000x1500", item3: 30 }
    ]

    const UitbesteedWerkData = [
        { item1: "Las Bewerking", item2: "Verbinden van metalen door verhitting", item3: 500 },
        { item1: "CNC-frezen", item2: "Nauwkeurig metaal verwijderen met machine", item3: 200 }
    ]

    useEffect(() => {
        async function EditTypesData(){
            const requestData = await fetch("http://localhost:8080/api/editTypes", {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const rawData = await requestData.json();
            const formattedData = rawData.map(item => {
                const { editID, editName } = item;
                return {
                    id: editID,
                    label: editName,
                };
            });
            setEditTypes(formattedData);
        }

        EditTypesData();
    }, []);

    return(
        <>
            <Navbar title={"Product aanmaken"} route={route}/>
            <CollapseTable2 content ={editTypes} title="Bewerkingen"/>
            <CollapseTableAdd content ={InkoopData} title="Inkoop"/>
            <CollapseTableAdd content ={UitbesteedWerkData} title="Uitbesteed werk"/>
            <Button
                title={"Opslaan"}
                triggerFunction={logAllData}
                color={'#2eb822'}
                icon={"save"}
            />        
        </>
    )

}

export default Productaanmaken