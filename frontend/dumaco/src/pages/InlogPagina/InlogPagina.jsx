import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import style from "./inlogPagina.module.css"
import {setCookies} from "../../components/Cookies.js";

function InlogPagina() {
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const Login = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        // Checking for empty values
        if(username === "" && password === ""){
            e.target.username.parentElement.style.borderColor = "red";
            e.target.password.parentElement.style.borderColor = "red";
            setText("Velden gebruikersnaam en wachtwoord zijn verplicht.");
            return;
        }
        if(username === ""){
            e.target.username.parentElement.style.borderColor = "red";
            e.target.password.parentElement.style.borderColor = "#d9d9d9";
            setText("Gebruikersnaam is verplicht");
            return;
        }
        if(password === ""){
            e.target.username.parentElement.style.borderColor = "#d9d9d9";
            e.target.password.parentElement.style.borderColor = "red";
            setText("Wachtwoord is verplicht");
            return;
        }

        try {
            // Request to the server
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

            // Response Handling
            const data = await passwordResponse.json();
            const status = passwordResponse.status;

            // Success Response
            if(status === 200) {
                setCookies("userID", data.userId, 8);
                navigate("/Home");
            }

            // Unauthorized Response
            else if(status === 401 && data.message.includes("user")) {
                e.target.username.parentElement.style.borderColor = "red";
                e.target.password.parentElement.style.borderColor = "red";
                setText("Deze gebruiker bestaat niet");
            }
            else if(status === 401 && data.message.includes("password")) {
                e.target.username.parentElement.style.borderColor = "#d9d9d9";
                e.target.password.parentElement.style.borderColor = "red";
                setText("Wachtwoord is onjuist");
            }

            // Invalid data response
            else if(status === 400 && data.message.includes("username")) {
                e.target.username.parentElement.style.borderColor = "red";
                e.target.password.parentElement.style.borderColor = "red";
                setText("Deze gebruiker bestaat niet");
            }
            else if(status === 400 && data.message.includes("password")) {
                e.target.username.parentElement.style.borderColor = "#d9d9d9";
                e.target.password.parentElement.style.borderColor = "red";
                setText("Wachtwoord is onjuist");
            }

        } catch (e) {
            setText("Er is iets fout gegaan.");
        }

    };

    return(
        <div className={style.inlogBody}>
            <div className={style.inlogContainer}>
                <h2 className={style.title}>Inloggen</h2>
                <form className={style.form} onSubmit={Login}>
                    <div className={style.inputContainer}>
                        <img className={style.image} src="/icons/user.svg" alt="" />
                        <input className={style.input} name="username" placeholder="Gebruikersnaam"></input>
                    </div>
                    <div className={style.inputContainer}>
                        <img className={style.image} src="/icons/lock.svg" alt="" />
                        <input type="password" className={style.input} name="password" placeholder="Wachtwoord"></input>
                    </div>
                    <div className={style.forgotPassword}>
                        <NavLink to="/" className={style.link}>Wachtwoord vergeten?</NavLink>
                    </div>
                    <div className={style.buttonContainer}>
                        <button className={style.confirmButton}>Inloggen</button>
                    </div>
                    <div className={style.errorMessageContainer}>
                        <p className={style.errorMessage}>{text}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InlogPagina;