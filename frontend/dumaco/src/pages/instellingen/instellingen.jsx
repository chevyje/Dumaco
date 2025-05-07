import Main from "../../layouts/Main.jsx";
import React from "react";
import Style from "./instellingen.module.css";
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";
import InputField from "../../components/inputField/inputField.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Dropdown2 from "../../components/dropdown2/dropdown2.jsx";
import breadRouteGen from "../../components/navbar/breadRouteGen.js";

const Instellingen = () => {
    const navigate = useNavigate();

    const options = [
        { value: 'nederlands', label: 'Nederlands', icon: 'nl' },
        { value: 'engels', label: 'English', icon: 'gb' },
        { value: 'pools', label: 'Polski', icon: 'pl' }
    ];

    const route = breadRouteGen({
        "/home": "Home",
        "/instellingen": "Instellingen"
    });

    return (
        <>
            <Main />
            <Navbar title={"Instellingen"} route={route}/>
            <div className={Style.inputFieldContainer}>
                <div className={Style.formContainer}>
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
                        {<a className={Style.resetPassword}>Herstel wachtwoord</a>}
                    </div>
                    <div className={Style.column}>
                        <div className={Style.languageDropdown}></div>
                        <Dropdown2
                        title={"Taal"}
                        options={options}
                        useIcons={true}
                        ></Dropdown2>
                    </div>
                </div>
            </div>
            <div className={Style.btnsContainer}>
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
        </>
    )
};


function saveUser(){
    console.log("saveUser() function called.");
}

function cancelEdit(navigate){
    if (window.history.length > 1 && window.location.pathname !== '/instellingen') {
        navigate(-1);
    } else {
        navigate('/home');
    }
}

export default Instellingen;