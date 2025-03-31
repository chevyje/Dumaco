import "./inlogPagina.css"

function InlogPagina() {
    const CheckCredentials = () => {
        console.log("Trying to login");
    };

    return(
        <>
            <div className="container">
                <h1>Login</h1>
                <div className="Input">
                    <img src="../../../public/icons/user.svg" alt="" />
                    <input type="text" />
                </div>
                <div className="Input">
                    <img src="../../../public/icons/lock.svg" alt="" />
                    <input type="password" />
                </div>
                <button onClick={CheckCredentials}> Log in</button>
            </div>
        </>
    );
}

export default InlogPagina;