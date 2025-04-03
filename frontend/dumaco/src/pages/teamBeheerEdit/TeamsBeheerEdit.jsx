import Style from './teamsBeheerEdit.module.css'
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react"
import Navbar from "../../components/navbar/navbar.jsx";


function TeamsBeheerEdit(){
    const navigate = useNavigate();

    const [PrimareKleur, setPrimareKleur] = useState("#0D20E7")

    function handelPrimareKleurChange(event){
        setPrimareKleur(event.target.value)
    }

    const [SecundaireKleur, setSecundaireKleur] = useState("#A8C3FF")

    function handelSecundaireKleurChange(event){
        setSecundaireKleur(event.target.value)
    }

    const [TertiareKleur, setTertiareKleur] = useState("#E1ECFF")

    function handelTertiareKleurChange(event){
        setTertiareKleur(event.target.value)
    }

    const [Naam, setNaam] = useState("Team Blauw")
    function handelNaamChange(event){
        setNaam(event.target.value)
    }

    const [Beschrijving, setBeschrijving] = useState("Dit is waar alle coole kikkers zitten")
    function handelBeschrijvingChange(event){
        setBeschrijving(event.target.value)
    }

    return(
        <>
            <Navbar title={"Team Beheer"} route={"Team Beheer"} />
            <div className={Style.team-beheer-container}>
                <p>Team naam</p>
                <input type="text" className={Style.team-beheer-text} value={Naam} onChange={handelNaamChange}></input>
                <p>Primare Kleur</p>
                <input type="color" className={Style.team-beheer-color} value={PrimareKleur} onChange={handelPrimareKleurChange}></input>
                <p>Secundaire Kleur</p>
                <input type="color" className={Style.team-beheer-color} value={SecundaireKleur} onChange={handelSecundaireKleurChange}></input>
                <p>Tertiare Kleur</p>
                <input type="color" className={Style.team-beheer-color} value={TertiareKleur} onChange={handelTertiareKleurChange}></input>
                <p>Beschrijving</p>
                <textarea className={Style.team-beheer-textArea} value={Beschrijving} onChange={handelBeschrijvingChange}></textarea>
                <br/>
                    <div className={Style.team-beheer-buttons}>
                        <Button
                            title={"Opslaan"}
                            triggerFunction={null}
                            color={'#2eb822'}
                            icon={"save"}
                        />
                        <Button
                            title={"Annuleren"}
                            triggerFunction={() => cancelEdit(navigate)}
                            color={'#757575'}
                            icon={"ban"}
                        />
                    </div>
            </div>
        </>

    )
    function cancelEdit(navigate){
        navigate("/teamsbeheer");
    }
    
}

export default TeamsBeheerEdit