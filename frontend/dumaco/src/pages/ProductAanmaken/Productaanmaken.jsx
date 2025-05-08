import Navbar from "../../components/navbar/navbar.jsx";
import Styel from "../ProductAanmaken/ProductAanMaken.module.css";
import CollapseTable2 from "../../components/CollapseTable2/CollapseTable2.jsx";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

function Productaanmaken() {

    const BewerkingenData = [
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

    return(
        <>
            <Navbar title={"Product aanmaken"} route={route}/>
            <CollapseTable2 content ={BewerkingenData} title="Bewerkingen"/>
        </>
    )

}

export default Productaanmaken