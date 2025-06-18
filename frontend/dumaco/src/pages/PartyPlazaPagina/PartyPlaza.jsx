import Navbar from "../../components/navbar/navbar.jsx";
import React from "react";
import Style from "../inkoopPaginaBewerken/inkoopPaginaBewerken.module.css";
import InputField from "../../components/inputField/inputField.jsx";
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

function InkoopPaginaBewerken() {
    const navigate = useNavigate();

    const route = breadRouteGen({
        "/home": "Home",
        "/pallets": "Inkoop Standaarden",
        "/zone": "Zone",
        "/editzone": "Bewerken",
    });

    return (
        <>
            <Navbar title={"Zone bewerken"} route={route} />
            <div className={Style.inputFieldContainer}>
                <div className={Style.formContainer}>
                    <div className={Style.column}>
                        <InputField
                            title={"Artikel"}
                            placeholder={"..."}
                            defaultText={""}
                            fieldId={"artikel"}
                            isLocked={false}
                        />
                        <InputField
                            title={"Gebruikt"}
                            placeholder={""}
                            defaultText={"68 keer"}
                            fieldId={"recoverymail"}
                            isLocked={true}
                        />
                        <div className={Style.omschrijvingContainer}>
                            <label htmlFor={"omschrijving"}>Omschrijving</label>
                            <textarea id={"omschrijving"} className={Style.omschrijving}></textarea>
                        </div>
                    </div>
                    <div className={Style.column}>
                        <div className={Style.calendar}>
                            <label htmlFor={"calendar"}>Laatst besteld</label>
                            <input type="date" id={"calendar"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.buttonsContainer}>
                <Button
                    title={"Opslaan"}
                    triggerFunction={() => saveInkoopStandaard()}
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
            <div className={Style.deleteBtn}>
                <Button
                    title={""}
                    triggerFunction={null}
                    color={'#710000'}
                    icon={"trash"}
                />
            </div>
        </>
    )

    function saveInkoopStandaard(){
        console.log("saveUser() function called.");
    }

    function cancelEdit(navigate){
        navigate("/inkoop");
    }
}

export default InkoopPaginaBewerken;