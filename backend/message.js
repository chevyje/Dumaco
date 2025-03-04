const messages = {};

// Error messages
messages.error = {};
messages.error.server = {message: "There went something wrong with the server, please try again or reach out to someone"};
messages.error.duplicate = {message: "The row you try to add already exists"};
messages.error.notFound = {message: "Not found"};

// Success messages
messages.success = {};
messages.success.addedRow = {message: "Row was added succesfully"};
messages.success.deletedRow = {message: "Row was deleted succesfully"};
messages.success.login = {messages: "login succesfull"};

// Bad request messages
messages.badreques = {};

// Invalid values
messages.invalid = function(value){
    return {message: "Invalid " + value};
}

export default messages;