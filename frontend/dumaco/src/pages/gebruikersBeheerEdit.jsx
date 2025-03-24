import Main from "../layouts/Main.jsx";
import InputField from "../components/inputField.jsx";


const GebruikersBeheerEdit = () => {
    return (
        <>
            <Main />
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
                    </div>
                    <div className="column">
                        <InputField
                            title={"Function"}
                            placeholder={"functie titel"}
                            defaultText={"Lasser"}
                            fieldId={"function"}
                            isLocked={false}
                        />
                        <InputField
                            title={"Laatste login"}
                            placeholder={""}
                            defaultText={"10-03-2025 12:18"}
                            fieldId={"lastLogin"}
                            isLocked={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GebruikersBeheerEdit;
