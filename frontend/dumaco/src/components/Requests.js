export async function authLevel(userID) {
    try {
        // Request to the server
        const accessLevelResponse = await fetch(`http://localhost:8080/api/functions/accesslevel/${userID}`, {
            method: "get",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        // Response Handling
        const data = await accessLevelResponse.json();
        return data[0].accessLevel;
    } catch (e) {
        console.log(e);
    }
}

export async function userNameAPI(userID) {
    try {
        const userNameResponse = await fetch(`http://localhost:8080/api/users/${userID}`, {
            method: "get",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        // Response Handling
        const data = await userNameResponse.json();
        return data.username;
    }catch (e) {
        console.log(e);
    }
}