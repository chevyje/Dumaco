import Table from "../../components/table/table.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from './TeamsBeheer.module.css'
import Navbar from "../../components/navbar/navbar.jsx";


const ColoredBox = ({ colors }) => (
    <div className={Style.coloredBoxContainer}>
        {colors.map((color, index) => (
            <div key={index} className={Style.coloredBox} style={{ backgroundColor: color }}></div>
        ))}
    </div>
);

const TeamsBeheer = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        results: [
            { 
                Team: "Blauw", 
                Beschrijving: "Hier zitten alle coole kikkers", 
                Kleur: <ColoredBox colors={["#E1ECFF", "#A8C3FF", "#0D20E7"]} />
            },
            { 
                Team: "Geel", 
                Beschrijving: "Hier zitten alle flikkers", 
                Kleur: <ColoredBox colors={["#FFF4CC", "#FFD700", "#E6B800"]} />
            },
            { 
                Team: "Oranje", 
                Beschrijving: "Dit zijn de echte kaas vreters", 
                Kleur: <ColoredBox colors={["#FFE4B5", "#FFA500", "#E65100"]} />
            },
            { 
                Team: "Groen", 
                Beschrijving: "Echte boom knuffelaars", 
                Kleur: <ColoredBox colors={["#DFFFD6", "#80E27E", "#008000"]} />
            }
        ]
    });

    function showTeamEdit() {
        navigate("/teamsbeheeredit");
    }

    return (
        <>
            <Navbar title={"Team Beheer"} route={"Team Beheer"} />
            <div className={Style.tableContainer}>
            <Table
                    jsonData={state.results}
                    showUserEdit={false}
                    showPencil={true}
                    editPageFunction={showTeamEdit}
                />
            </div>
        </>
    );
};

export default TeamsBeheer;
