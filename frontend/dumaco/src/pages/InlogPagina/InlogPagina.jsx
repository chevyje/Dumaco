import style from "./inlogPagina.module.css"


function InlogPagina() {
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
    };

    return(
        <>
            <body className={style.loginBody}>
                {/* <img src="./frontend/Assets/DumacoLogoWit.png"/> */}
                <form className={style.loginBox} onSubmit={CheckCredentials}>
                    <div>
                        <label>
                            <img src="/icons/user.svg" alt="" />
                            Username:
                            <br/>
                            <input type="text" className={style.loginInput} name="username"></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            <img src="/icons/lock.svg" alt="" />
                            Password:
                            <br/>
                            <input type="password" className={style.loginInput} name="password"></input>
                        </label>
                    </div>
                    <br/>
                    <button className={style.confirmButton}> Log in</button>
                </form>
            </body>
        </>

    );
}

export default InlogPagina;