import Style from "./inlogPagina.module.css"

function InlogPagina() {
    const CheckCredentials = () => {
        console.log("Trying to login");
    };

    return(
        <>
            <div className={Style.inlogBody}>
                <div className={Style.inlogContainer}>
                    <h1>Login</h1>
                    <div className={Style.Input}>
                        <img src="../../../icons/user.svg" alt="" />
                        <input type="text" />
                    </div>
                    <div className={Style.Input}>
                        <img src="../../../icons/lock.svg" alt="" />
                        <input type="password" />
                    </div>
                    <button onClick={CheckCredentials}> Log in</button>
                </div>
            </div>
        </>

    );
}

export default InlogPagina;