import bcrypt from 'bcryptjs';

// TODO: vervang username en password met de gegevens die worden ingevuld
const username = "jurre";
const password = "Jurre";

const passwordResponse = await fetch("http://localhost:8080/api/users/checkCredentials", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
const data = await passwordResponse.json();

if(passwordResponse.status === 200){
    // TODO: redirect naar nieuwe pagina (login succesvol)
    console.log("Succesfull Login");
} else if(passwordResponse.status === 401 && data.message.includes("username")){
    // TODO: geef de error dat de username incorrect is. 
    console.log("Incorrect username");
} else if(passwordResponse.status === 401 && data.message.includes("password")){
    // TODO: geef de error dat de password incorrect is. 
    console.log("Incorrect password");
}