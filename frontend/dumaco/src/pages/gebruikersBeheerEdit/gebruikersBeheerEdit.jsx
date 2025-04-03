import Main from "../../layouts/Main.jsx";
import InputField from "../../components/inputField/inputField.jsx";
import Style from './gebruikersBeheerEdit.module.css'
import Button from "../../components/button/button.jsx";
import {useNavigate} from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";

const GebruikersBeheerEdit = () => {
    const navigate = useNavigate();
    return (
        <>
            <Main />
            <Navbar title={"Gebruikers beheer"} route={"Management / Gebruikers / Tobias Beumer"}/>
            <div className={Style.username-container}>
                <p className={Style.username-text}>Tobias Beumer</p>
            </div>
            <div className={Style.inputField-container}>
                <div className={Style.form-container}>
                    <div className={Style.column}>
                        <InputField
                            title={"Naam"}
                            placeholder={"..."}
                            defaultText={"Tobias Beumer"}
                            fieldId={"naam"}
                            isLocked={false}
                        />
                        <InputField
                            title={"Recovery mail"}
                            placeholder={"example@domain.com"}
                            defaultText={""}
                            fieldId={"recoverymail"}
                            isLocked={false}
                        />
                        <InputField
                            title={"Function"}
                            placeholder={"functie titel"}
                            defaultText={"Lasser"}
                            fieldId={"function"}
                            isLocked={false}
                        />
                    </div>
                    <div className={Style.column}>
                        <InputField
                            title={"Laatste login"}
                            placeholder={""}
                            defaultText={"10-03-2025 12:18"}
                            fieldId={"lastLogin"}
                            isLocked={true}
                        />
                        <div className={Style.reset-password-container}>
                            {<a className={Style.reset-password}>Reset wachtwoord</a>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.buttons-container}>
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
    );
};



function saveUser(){
    console.log("saveUser() function called.");
}

function cancelEdit(navigate){
    navigate("/gebruikersbeheer");
}

export default GebruikersBeheerEdit;
