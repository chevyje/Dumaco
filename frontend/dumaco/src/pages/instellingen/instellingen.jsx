import Main from "../../layouts/Main.jsx";
import React from "react";
import Style from "./instellingen.module.css";
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";
import InputField from "../../components/inputField/inputField.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

const Instellingen = () => {
    const navigate = useNavigate();
    return (
        <>
            <Main />
            <Navbar title={"Gebruikers beheer"} route={"Hans Botterboy / Instellingen"}/>
            <div className={Style.username-container}>
                <p className={Style.username-text}>Hans Botterboy</p>
            </div>
            <div className={Style.inputField-container}>
                <div className={Style.form-container}>
                    <div className={Style.column}>
                        <InputField
                            title={"Naam"}
                            placeholder={"..."}
                            defaultText={"Hans Botterboy"}
                            fieldId={"naam"}
                            isLocked={false}
                        />
                        <InputField
                            title={"Herstel email"}
                            placeholder={"voorbeeld@domein.com"}
                            defaultText={""}
                            fieldId={"recoverymail"}
                            isLocked={false}
                        />
                        {<a className={Style.reset-password}>Reset wachtwoord</a>}
                        <InputField
                            title={"Functie"}
                            placeholder={"functie titel"}
                            defaultText={"Lasser"}
                            fieldId={"function"}
                            isLocked={false}
                        />
                    </div>
                    <div className={Style.column}>
                        <p>teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeste</p>
                    </div>
                </div>
            </div>
            <div className={Style.btns-container}>
                <Button
                    title={"Opslaan"}
                    triggerFunction={saveUser}
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
            <div className={Style.delete-btn}>
                <Button
                    title={""}
                    triggerFunction={null}
                    color={'#710000'}
                    icon={"trash"}
                />
            </div>
        </>
    )
};


function saveUser(){
    console.log("saveUser() function called.");
}

function cancelEdit(navigate){
    navigate("/Instellingen");
}

export default Instellingen;