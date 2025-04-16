import Navbar from "../../components/navbar/navbar.jsx";
import React from "react";
import Style from "../gebruikersBeheerEdit/gebruikersBeheerEdit.module.css";
import InputField from "../../components/inputField/inputField.jsx";
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";

function InkoopPaginaBewerken() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar title={"Inkoop standaarden"} route={"Orders / Order aanmaken / Inkoop standaarden / Bewerken"} />
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
                        <InputField
                            title={"Functie"}
                            placeholder={"functie titel"}
                            defaultText={"Lasser"}
                            fieldId={"function"}
                            isLocked={false}
                        />
                    </div>
                    <div className={Style.column}>
                        <div className={Style.lastLogin}>
                            <input type="date" className={Style.calendar}/>
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