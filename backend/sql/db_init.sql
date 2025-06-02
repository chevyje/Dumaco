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

CREATE TABLE IF NOT EXISTS EditTypes (
    editID INTEGER NOT NULL AUTO_INCREMENT,
    editName VARCHAR(64),
    editDesc VARCHAR(1024),
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
    orderIDCustomer VARCHAR(32),
    teamID INTEGER NOT NULL,
    createdBy INTEGER NOT NULL,
    plannedStart DATETIME,
    plannedDelivery DATETIME,
    deliveryDate DATETIME,
    PRIMARY KEY (orderID),
    FOREIGN KEY (teamID) REFERENCES Teams(teamID),
    FOREIGN KEY (customerID) REFERENCES Customers(customerID),
    FOREIGN KEY (createdBy) REFERENCES Users(userID)
);

CREATE TABLE IF NOT EXISTS Product (
    orderID INTEGER NOT NULL,
    productID VARCHAR(64) NOT NULL,
    productNumber INTEGER NOT NULL DEFAULT 1,
    palletNumber INTEGER,
    deliveryDate DATETIME NOT NULL,
    materialID INTEGER,
    quantity INTEGER,
    createdBy INTEGER NOT NULL,
    PRIMARY KEY (productID),
    FOREIGN KEY (orderID) REFERENCES Orders(orderID),
    FOREIGN KEY (materialID) REFERENCES MaterialTypes(materialID),
    FOREIGN KEY (createdBy) REFERENCES  Users(userID)
);

CREATE TABLE IF NOT EXISTS Edit (
    productID VARCHAR(64),
    editTypeID INTEGER,
    comment VARCHAR(1024),
    drawing VARCHAR(32),
    startDate DATETIME,
    endDate DATETIME,
    plannedStart DATETIME,
    plannedEnd DATETIME,
    editID INTEGER NOT NULL AUTO_INCREMENT,
    userID INTEGER,
    PRIMARY KEY (editID),
    FOREIGN KEY (productID) REFERENCES Product(productID),
    FOREIGN KEY (editTypeID) REFERENCES EditTypes(editID),
    FOREIGN KEY (userID) REFERENCES Users(userID)
);

CREATE TABLE IF NOT EXISTS Outsourced (
    outsourcedID INTEGER NOT NULL AUTO_INCREMENT,
    code VARCHAR(64),
    outsourcedDesc VARCHAR(1024),
    company VARCHAR(64),
    startDate DATETIME,
    quantity INTEGER,
    received BOOLEAN,
    productID VARCHAR(64),
    PRIMARY KEY (outsourcedID),
    FOREIGN KEY (productID) REFERENCES Product(productID)
);

CREATE TABLE IF NOT EXISTS Purchase (
    purchaseID INTEGER NOT NULL AUTO_INCREMENT,
    code VARCHAR(64),
    purchaseDesc VARCHAR(1024),
    quantity INTEGER,
    received BOOLEAN,
    productID VARCHAR(64),
    PRIMARY KEY (purchaseID),
    FOREIGN KEY (productID) REFERENCES Product(productID)
);

CREATE TABLE IF NOT EXISTS Pallet (
    palletID VARCHAR(64) NOT NULL,
    productID VARCHAR(64) NULL,
    zone VARCHAR(64) DEFAULT 'Default',
    PRIMARY KEY (palletID),
    FOREIGN KEY (productID) REFERENCES Product(productID)
);
