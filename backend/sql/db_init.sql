CREATE TABLE IF NOT EXISTS Functions(
    functionID INTEGER NOT NULL AUTO_INCREMENT,
    functionName VARCHAR(32) NOT NULL,
    PRIMARY KEY (functionID)
);

CREATE TABLE IF NOT EXISTS Teams (
    teamID INTEGER NOT NULL AUTO_INCREMENT,
    teamName VARCHAR(32),
    color VARCHAR(16),
    descr VARCHAR(1024),
    PRIMARY KEY (teamID)
);

INSERT INTO Teams (teamID, teamName, color, descr)
SELECT -1, 'Geen Team', 'gray', 'Standaard team voor gebruikers zonder aangewezen team.'
WHERE NOT EXISTS (SELECT 1 FROM Teams WHERE teamID = -1);

CREATE TABLE IF NOT EXISTS Customers (
    customerID INTEGER NOT NULL AUTO_INCREMENT,
    customerName VARCHAR(32),
    address VARCHAR(32),
    dockerNumber VARCHAR(32),
    palletTracking BOOLEAN,
    phoneNumber VARCHAR(16),
    mailAddress VARCHAR(128),
    PRIMARY KEY (customerID)
);

CREATE TABLE IF NOT EXISTS MaterialTypes (
    materialID INTEGER NOT NULL AUTO_INCREMENT,
    materialName VARCHAR(64),
    width DOUBLE,
    PRIMARY KEY (materialID)
);

CREATE TABLE IF NOT EXISTS EditTypeList (
    editID VARCHAR(32) NOT NULL,
    editName VARCHAR(64),
    editDesc VARCHAR(16),
    position INTEGER,
    PRIMARY KEY (editID)
);

CREATE TABLE IF NOT EXISTS Users (
    userID INTEGER NOT NULL AUTO_INCREMENT,
    username VARCHAR(32) NOT NULL,
    password VARCHAR(64) NOT NULL,
    recoveryMail VARCHAR(128) NOT NULL,
    lastLogin DATETIME DEFAULT CURRENT_TIMESTAMP,
    functionID INTEGER NOT NULL,
    teamID INTEGER NOT NULL,
    PRIMARY KEY (userID),
    FOREIGN KEY (functionID) REFERENCES Functions(functionID),
    FOREIGN KEY (teamID) REFERENCES Teams(teamID)
);

CREATE TABLE IF NOT EXISTS Orders (
    customerID INTEGER NOT NULL,
    orderID INTEGER NOT NULL AUTO_INCREMENT,
    orderIDcustomer VARCHAR(32),
    teamID INTEGER NOT NULL,
    PRIMARY KEY (orderID),
    FOREIGN KEY (teamID) REFERENCES Teams(teamID),
    FOREIGN KEY (customerID) REFERENCES Customers(customerID)
);

CREATE TABLE IF NOT EXISTS Tasks (
    orderID INTEGER NOT NULL,
    taskFormID VARCHAR(64) NOT NULL,
    taskFormNumber INTEGER NOT NULL DEFAULT 1,
    palletNumber INTEGER,
    deliveryDate DATETIME NOT NULL,
    materialID INTEGER,
    quantity INTEGER,
    PRIMARY KEY (taskFormID),
    FOREIGN KEY (orderID) REFERENCES OrderForm(orderID),
    FOREIGN KEY (materialID) REFERENCES MaterialTypes(materialID)
);

CREATE TABLE IF NOT EXISTS Edit (
    taskFormID VARCHAR(64),
    editTypeID VARCHAR(32),
    comment VARCHAR(1024),
    drawing VARCHAR(32),
    startDate DATETIME,
    endDate DATETIME,
    plannedStart DATETIME,
    plannedEnd DATETIME,
    editID VARCHAR(32) NOT NULL,
    userID INTEGER,
    PRIMARY KEY (editID),
    FOREIGN KEY (taskFormID) REFERENCES TaskForm(taskFormID),
    FOREIGN KEY (editTypeID) REFERENCES EditTypeList(editID),
    FOREIGN KEY (userID) REFERENCES Users(userID)
);
