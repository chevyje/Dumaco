import Main from "../layouts/Main.jsx";
import InputField from "../components/inputField.jsx";


function GebruikersBeheerEdit() {
    return(
        <>
            <Main />
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
            <InputField
                title={"Laatste login"}
                placeholder={""}
                defaultText={"10-03-2025 12:18"}
                fieldId={"lastLogin"}
                isLocked={true}
            />
        </>
    )
}

export default GebruikersBeheerEdit;
