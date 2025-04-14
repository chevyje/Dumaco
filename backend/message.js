const messages = {};

// Error messages
messages.error = {};
messages.error.server = {message: "There went something wrong with the server, please try again or reach out to someone"};
messages.error.duplicate = {message: "The row you try to add already exists"};
messages.error.notFound = {message: "Niet gevonden"};
messages.error.noAccount = {message: "Deze gebruiker heeft geen account"};
messages.error.incorrectPassword = {message: "Onjuist wachtwoord"};

// Success messages
messages.success = {};
messages.success.addedRow = {message: "Row was added succesfully"};
messages.success.deletedRow = {message: "Row was deleted succesfully"};
messages.success.login = {messages: "Ingelogd!"};

// Bad request messages
messages.badreques = {};

// Invalid values
messages.invalid = function(value){

    let msg = "Waarde " + value + " is onjuist."

    switch(value){
        case "username":
            msg = "Gebruikersnaam is onjuist"
            break;
        case "password":
            msg = "Wachtwoord is onjuist"
            break;
    }

    return {message: "Invalid " + value};
}

export default messages;