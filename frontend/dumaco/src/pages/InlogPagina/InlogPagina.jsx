import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import style from "./inlogPagina.module.css"



function InlogPagina() {
    const navigate = useNavigate();
    const CheckCredentials = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log("Trying to login");
        console.log(username);
        console.log(JSON.stringify({username: username, password: password}))
        const passwordResponse = await fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await passwordResponse.json();
        console.log(data);
        navigate("/");
    };

    return(
        <>
            <body className={style.inlogBody}>
            <div className={style.inlogContainer}>
                <h2 className={style.title}>Inloggen</h2>
                <form className={style.form} onSubmit={CheckCredentials}>
                    <div className={style.inputContainer}>
                        <img className={style.image} src="/icons/user.svg" alt="" />
                        <input className={style.input} name="username" placeholder="Gebruikersnaam"></input>
                    </div>
                    <div className={style.inputContainer}>
                        <img className={style.image} src="/icons/lock.svg" alt="" />
                        <input type="password" className={style.input} name="password" placeholder="Wachtwoord"></input>
                    </div>
                    <div className={style.forgotPassword}>
                        <NavLink to="/" className={style.link}>wachtwoord vergeten?</NavLink>
                    </div>
                    <div className={style.buttonContainer}>
                        <button className={style.confirmButton}>Inloggen</button>
                    </div>
                </form>
            </div>
            </body>
        </>

    );
}

export default InlogPagina;