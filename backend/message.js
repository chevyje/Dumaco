const messages = {};

// Error messages
messages.error = {};
messages.error.server = {message: "There went something wrong with the server, please try again or reach out to someone"};
messages.error.duplacte = {message: "The row you try to add already exists"}

// Succes messages
messages.succes = {};
messages.succes.addedRow = {message: "Row was added succesfully"};
messages.succes.deletedRow = {message: "Row was deleted succesfully"};
messages.succes.login = {messages: "lgoin succesfull"};

// Bad request messages
messages.badreques = {};

// Invalid values
messages.invalid = function(value){
    const returnMessage = "Invalid " + value;
    return {message: returnMessage};
}

export default messages;