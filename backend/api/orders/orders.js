import express from "express";
import {db_execute, db_query} from "../../db.js";
import messages from "../../message.js";

const OrderRouter = express.Router();

// Get all Orders
OrderRouter.get('/', async (req, res) => {
    try {
        const customers = await db_query("SELECT * FROM Orders");
        res.status(200).json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// Limit records and sort with team
OrderRouter.get('/Limit', async (req, res) => {
    let { limit, offset, teamID } = req.body;
    if (!limit || limit <= 0) return res.status(400).json(messages.invalid("limit"));
    if (!offset || offset <= 0) {offset = 0}
    if (!teamID || teamID <= 0) {teamID = null}

    try{
        let orders = await db_query("SELECT * FROM Orders WHERE teamID = ? LIMIT ? OFFSET ?" [limit, offset, teamID])
    }catch(err){
        console.error(err);
        res.status(500).json(messages.error.server);
    }
})

// Create new Order
OrderRouter.post('/', async (req, res) => {
    let { customerID, orderIDCustomer, teamID, createdBy, plannedStart, plannedDelivery, deliveryDate } = req.body;
    let parsedPlannedStart, parsedPlannedDelivery, ParsedDeliveryDate;

    if (!customerID || customerID.length <= 0) return res.status(400).json(messages.invalid("customer ID"))
    if (!orderIDCustomer || orderIDCustomer.length <= 0) { orderIDCustomer = null; }
    if (!teamID || teamID.length <= 3) {teamID = -1; }
    if (!createdBy || createdBy.length <= 0) return res.status(400).json(messages.invalid("user ID"))
    if (!plannedStart || plannedStart <= 0) return res.status(400).json(messages.invalid("planned start date"))
    if (!plannedDelivery || plannedDelivery <= 0) return res.status(400).json(messages.invalid("planned delivery date"))
    if (!deliveryDate || deliveryDate.length <= 0) { deliveryDate = null; }

    try{
        const Customers = await db_query("SELECT * FROM Customers WHERE customerID = ?",[customerID]);
        if (Customers.length <= 0) return res.status(400).json(messages.invalid("customer ID"))

        const Teams = await db_query("SELECT * FROM Teams WHERE teamID = ?",[teamID]);
        if (Teams.length <= 0) return res.status(400).json(messages.invalid("teamID"))

        const Users = await db_query("SELECT * FROM Users WHERE userID = ?",[teamID]);
        if (Users.length <= 0) return res.status(400).json(messages.invalid("userID"))
    }catch(error){
        console.error(error);
        return res.status(500).json(messages.error.server);
    }

    try{
        parsedPlannedStart = Date.parse(plannedStart)
    }catch(error){
        console.error(error);
        return res.status(400).json(messages.invalid("planned start date"));
    }

    try{
        parsedPlannedDelivery = Date.parse(plannedDelivery)
    }catch(error){
        console.error(error);
        return res.status(400).json(messages.invalid("planned delivery date"));
    }

    try{
        ParsedDeliveryDate = Date.parse(deliveryDate)
    }catch(error){
        console.error(error);
        return res.status(400).json(messages.invalid("delivery date"));
    }

    try{
        await db_execute("INSERT INTO Orders (customerID, orderIDCustomer, teamID, createdBy, plannedStart, plannedDelivery, deliveryDate) VALUES (?, ?, ?, ?, ?, ?)",
            [customerID, orderIDCustomer, teamID, createdBy, parsedPlannedStart, parsedPlannedDelivery, ParsedDeliveryDate]);
        return res.status(201).json(messages.success.addedRow);
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }

});

export default OrderRouter;