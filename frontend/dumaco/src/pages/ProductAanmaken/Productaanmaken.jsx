import Navbar from "../../components/navbar/navbar.jsx";
import Style from "../ProductAanmaken/ProductAanMaken.module.css";
import CollapseTable2 from "../../components/CollapseTable2/CollapseTable2.jsx";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";
import CollapseTableAdd from "../../components/CollapseTable2/CollapseTableAdd.jsx";
import Button from "../../components/button/button.jsx";

function Productaanmaken() {

    const BewerkingenContent = [
        { id: 1, label: 'Werkvoorbereiding' },
        { id: 2, label: 'Lasersnijden plaat' },
        { id: 3, label: 'Lasersnijden Buis' },
        { id: 4, label: 'Graveren' },
        { id: 5, label: 'Lasnaaddetectie' },
        { id: 6, label: 'Anti-spat spray' },
        { id: 7, label: 'Afbramen / Orderpicken' },
        { id: 8, label: 'Klanten breken machinaal dubbelz' },
        { id: 9, label: 'Trommelen' },
        { id: 10, label: 'Tappen' },
        { id: 11, label: 'CMA Boorstraat' },
        { id: 12, label: 'Zetten 3M Toolcel' },
        { id: 13, label: 'Zetten Dynacel' },
        { id: 14, label: 'Lassen' },
        { id: 15, label: 'RobotLassen' },
        { id: 16, label: 'Kwaliteitscontrole' },
        { id: 17, label: 'Eindcontrole' },
        { id: 18, label: 'Logistiek' },
      ];                  

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



    return(
        <>
            <Navbar title={"Product aanmaken"} route={route}/>
            <CollapseTable2 content ={BewerkingenContent} title="Bewerkingen"/>
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