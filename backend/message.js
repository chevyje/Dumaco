const messages = {};

// Error messages
messages.error = {};
messages.error.server = {message: "There went something wrong with the server, please try again or reach out to someone"};
messages.error.duplicate = {message: "The row you try to add already exists"};
messages.error.notFound = {message: "Not found"};
messages.error.notFound = function(value){return {message: `No ${value} found`}}
messages.error.noAccount = {message: "this user doesn't exist"};
messages.error.incorrectPassword = {message: "incorrect password"};
messages.error.deleteForeignKey = {message: "you are not allowed to delete a foreign key"};

// Success messages
messages.success = {};
messages.success.addedRow = {message: "Row was added successfully"};
messages.success.deletedRow = {message: "Row was deleted successfully"};
messages.success.login = {messages: "login successful!"};
messages.success.updateRow = {messages: "Row was updated successfully!"};

// Bad request messages
messages.badreques = {};

// Invalid values
messages.invalid = function(value){
    return {message: "Invalid " + value};
}

export default messages;