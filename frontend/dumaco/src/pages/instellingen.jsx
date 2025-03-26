import Main from "../layouts/Main.jsx";
import React from "react";
import "../styling/instellingen.css";
import Button from "../components/button.jsx";
import {useNavigate} from "react-router-dom";
import InputField from "../components/inputField.jsx";

const Instellingen = () => {
    const navigate = useNavigate();
    return (
        <>
            <Main />
            <div className={"username-container"}>
                <p className={"username-text"}>Hans Botterboy</p>
            </div>
            <div className="inputField-container">
                <div className="form-container">
                    <div className="column">
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
                        {<a className={"reset-password"}>Reset wachtwoord</a>}
                        <InputField
                            title={"Functie"}
                            placeholder={"functie titel"}
                            defaultText={"Lasser"}
                            fieldId={"function"}
                            isLocked={false}
                        />
                    </div>
                    <div className="column">

                    </div>
                </div>
            </div>
            <div className={"btns-container"}>
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
            <div className={"delete-btn"}>
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