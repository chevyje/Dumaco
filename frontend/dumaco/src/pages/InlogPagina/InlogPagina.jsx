import "./inlogPagina.css"


function InlogPagina() {
    const CheckCredentials = () => {
        console.log("Trying to login");
    };

    return(
        <>
            {/* <img src="./frontend/Assets/DumacoLogoWit.png"/> */}
            <form className="login-box">
                <div>
                    <label>
                        <img src="../../../icons/user.svg" alt="" />
                        Username:
                        <br/>
                        <input type="text" className="login-input" required></input>
                    </label>
                </div>
                <div>
                    <label>
                        <img src="../../../icons/lock.svg" alt="" />
                        Password:
                        <br/>
                        <input type="password" className="login-input" required></input>
                    </label>
                </div>
                <br/>
                <button className="confirm-button" onClick={CheckCredentials}> Log in</button>
            </form>
        </>

    );
}

export default InlogPagina;