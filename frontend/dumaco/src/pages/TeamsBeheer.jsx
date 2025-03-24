import Main from "../layouts/Main.jsx";
import Table from "../components/table.jsx";
import { useState, useEffect } from "react";



const TeamsBeheer = () => {

    const [color1, setColor1] = useState()

    function handelColor1Change(event){
        setColor1(event.target.value)
    }
    const [color2, setColor2] = useState()

    function handelColor2Change(event){
        setColor2(event.target.value)
    }

    const [color3, setColor3] = useState()

    function handelColor3Change(event){
        setColor3(event.target.value)
    }


    
    const [state, setState] = useState({
            columns: [],
            columnsToHide: ["id"],
            results: [
                { id: 0, Team: "Blauw", Beschrijving: "Hier zitten alle coole kikkers", Kleur: ""},
                { id: 1, Team: "Geel", Beschrijving: "Hier zitten alle flikkers", Kleur: "y"},
                { id: 2, Team: "Oranje", Beschrijving: "Dit zijn de echte kaas vreters", Kleur: ""},
                { id: 3, Team: "Groen", Beschrijving: "Echte boom knuffelaars", Kleur: ""}

            ]
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
                /> 
            </div>
        </>
    )

}
export default TeamsBeheer;