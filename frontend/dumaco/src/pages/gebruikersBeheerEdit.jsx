import Main from "../layouts/Main.jsx";
import InputField from "../components/inputField.jsx";
import '../styling/gebruikersBeheerEdit.css'
import Button from "../components/button.jsx";

const GebruikersBeheerEdit = () => {
    return (
        <>
            <Main />
            <div className={"username-container"}>
                <p className={"username-text"}>Tobias Beumer</p>
            </div>
            <div className="inputField-container">
                <div className="form-container">
                    <div className="column">
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
                    <div className="column">
                        <InputField
                            title={"Laatste login"}
                            placeholder={""}
                            defaultText={"10-03-2025 12:18"}
                            fieldId={"lastLogin"}
                            isLocked={true}
                        />
                    </div>
                    <Button
                    title={"Opslaan"}
                    triggerFunction={saveUser}
                    color={'#2eb822'}
                    icon={"save"}
                    />
                </div>
            </div>
        </>
    );
};

function saveUser(){
    console.log("saveUser() function called.");
}

export default GebruikersBeheerEdit;
