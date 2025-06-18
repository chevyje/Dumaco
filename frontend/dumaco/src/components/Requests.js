export async function authLevel(userID) {
    try {
        // Request to the server
        const passwordResponse = await fetch(`http://localhost:8080/api/functions/accesslevel/${userID}`, {
            method: "get",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        // Response Handling
        const data = await passwordResponse.json();
        return data[0].accessLevel;
    } catch (e) {
        console.log(e);
    }
}