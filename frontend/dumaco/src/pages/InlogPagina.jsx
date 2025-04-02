import "../styling/inlogPagina.css"

function InlogPagina() {
    const CheckCredentials = async () => {
        await fetch("http://localhost:8080/api/users/checkCredentials", {
            method: "POST",
            body: JSON.stringify({
                username: inputUsername,
                password: inputPassword
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
    };

    return(
        <>
            <div className="container">
                <h1>Login</h1>
                <div className="Input">
                    <img src="../../public/icons/user.svg" alt="" />
                    <input type="text" />
                </div>
                <div className="Input">
                    <img src="../../public/icons/lock.svg" alt="" />
                    <input type="password" />
                </div>
                <button onClick={CheckCredentials}> Log in</button>
            </div>
        </>
    );
}

export default InlogPagina;