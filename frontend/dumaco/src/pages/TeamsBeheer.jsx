import Main from "../layouts/Main.jsx";
import Table from "../components/table.jsx";
import { useState, useEffect } from "react";



const TeamsBeheer = () => {
    
    const [state, setState] = useState({
            columns: [],
            columnsToHide: ["id"],
            results: [
                { id: 0, Team: "Blauw", Beschrijving: "Hier zitten alle coole kikkers", Kleur:"Blauw"},
                { id: 1, Team: "Geel", Beschrijving: "Hier zitten alle flikkers", Kleur:"Geel"},
                { id: 2, Team: "Oranje", Beschrijving: "Dit zijn de echte kaas vreters", Kleur:"Oranje"},
                { id: 3, Team: "Groen", Beschrijving: "Echte boom knuffelaars", Kleur:"Groen"}

            ]
            //, Kleur:{Kleur1: "#E1ECFF", Kleur2: "#A8C3FF", Kleur3: "#0D20E7"}
        });
    
        const columnAlignments = {
            Team: "left",
            Beschrijving: "left",
            Kleur: "right",
        };
    
        useEffect(() => {
            if (state.results.length > 0) {
                setState((prevState) => ({
                    ...prevState,
                    columns: Object.keys(state.results[0])
                }));
            }
        }, [state.results]);
    
    return(
        <>
            <Main/>
            <div className="table-container">
                <Table
                    columns={state.columns}
                   columnsToHide={state.columnsToHide}
                    data={state.results}
                    primaryColor="#0D20E7"
                    secondaryColor="#E1ECFF"
                    tertiareColor="#A8C3FF"
                    columnAlignments={columnAlignments}
                    showUserEdit={false}
                    showPencil={true}
                /> 
            </div>
        </>
    )

}
export default TeamsBeheer;