
  const inputUsername = document.getElementById("Username").value;
  const inputPassword = document.getElementById("Password").value;
  const messageElement = document.getElementById("message");
  inputUsername = "jurre";
  inputPassword = "Jurre";


  const passwordResponse = await fetch("http://localhost:8080/api/users/checkCredentials", {
      method: "POST",
      body: JSON.stringify({
        username: inputUsername,
        password: inputPassword
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  const data = await passwordResponse.json();
  
  if(response.status === 200){
    messageElement.innerText = "Login successful!";
    messageElement.style.color = "green";
    console.log("Succesfull Login");
  } else if(response.status === 401 && data.message.includes("username")){
    messageElement.innerText = "Invalid username";
    messageElement.style.color = "red"; 
    console.log("Incorrect username");
  } else if(response.status === 401 && data.message.includes("password")){
    messageElement.innerText = "Invalid password";
    messageElement.style.color = "red"; 
    console.log("Incorrect password");
  }

/* document.getElementById("loginForm").onsubmit = async function(event) {
            event.preventDefault(); // Prevent normal form submision
    
            if (!encrypt()) {
                return false;
            }
    
            checkCredentials();
        }; */
    
        /* function encrypt() {
            var pass = document.getElementById('Password').value;
    
            if (pass === "") {
                document.getElementById('message').innerText = 'Error: Password is missing';
                document.getElementById('message').style.color = "red";
                return false;
            }
    
            // 8 character hash string
            var salt = CryptoJS.lib.WordArray.random(8).toString(CryptoJS.enc.Hex);
    
            var hash = CryptoJS.SHA256(salt + pass).toString(CryptoJS.enc.Hex);
    
            // opslaan op de server
            //document.getElementById('Password').value = salt + ":" + hash;
            console.log("Hashed password: " + hash);
            return true;
        } */

        /* function getSalts(username) {
            const response = await ('/')
        } */