CREATE TABLE IF NOT EXISTS Functions(
    functionName VARCHAR(32) NOT NULL,
    PRIMARY KEY (functionName)
);

CREATE TABLE IF NOT EXISTS Teams (
    teamName VARCHAR(32),
    color VARCHAR(16),
    descr VARCHAR(1024),
    PRIMARY KEY (teamName)
);

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
    editID INTEGER NOT NULL,
    editName VARCHAR(64),
    editDesc VARCHAR(16),
    position INTEGER,
    PRIMARY KEY (editID)
);

CREATE TABLE IF NOT EXISTS TeamCodes (
    code VARCHAR(96) NOT NULL,
    teamName VARCHAR(64),
    functionName VARCHAR(32) NOT NULL,
    PRIMARY KEY (code),
    FOREIGN KEY (teamName) REFERENCES Teams(teamName),
    FOREIGN KEY (functionName) REFERENCES Functions(functionName)
);

CREATE TABLE IF NOT EXISTS Users (
    username VARCHAR(32) NOT NULL,
    password VARCHAR(64) NOT NULL,
    salt INTEGER,
    recoveryMail VARCHAR(128) NOT NULL,
    lastLogin DATETIME DEFAULT CURRENT_TIMESTAMP,
    job VARCHAR(96) NOT NULL,
    PRIMARY KEY (username),
    FOREIGN KEY (job) REFERENCES TeamCodes(code)
);

CREATE TABLE IF NOT EXISTS OrderForm (
    customerID INTEGER NOT NULL,
    orderID INTEGER NOT NULL AUTO_INCREMENT,
    orderIDcustomer VARCHAR(32),
    teamName VARCHAR(32) NOT NULL,
    PRIMARY KEY (orderID),
    FOREIGN KEY (teamName) REFERENCES Teams(teamName),
    FOREIGN KEY (customerID) REFERENCES Customers(customerID)
);

CREATE TABLE IF NOT EXISTS UserWorkTimes (
    username VARCHAR(32),
    orderID INTEGER,
    beginDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    endDate DATETIME,
    PRIMARY KEY (username),
    FOREIGN KEY (username) REFERENCES Users(username),
    FOREIGN KEY (orderID) REFERENCES OrderForm(orderID)
);

CREATE TABLE IF NOT EXISTS TaskForm (
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
    taskFormID VARCHAR(32),
    editTypeID INTEGER,
    comment VARCHAR(1024),
    drawing VARCHAR(32),
    startDate DATETIME,
    endDate DATETIME,
    plannedStart DATETIME,
    plannedEnd DATETIME,
    editID VARCHAR(32) NOT NULL,
    PRIMARY KEY (editID),
    FOREIGN KEY (taskFormID) REFERENCES TaskForm(taskFormID),
    FOREIGN KEY (editTypeID) REFERENCES MaterialTypes(materialID)
);
