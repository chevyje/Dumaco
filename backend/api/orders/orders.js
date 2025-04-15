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

// Create new Order
OrderRouter.post('/', async (req, res) => {
    let { customerID, orderIDCustomer, teamID } = req.body;

    if (!customerID || customerID.length <= 0) return res.status(400).json(messages.invalid("customer ID"))
    if (!orderIDCustomer || orderIDCustomer.length <= 0) { orderIDCustomer = null; }
    if (!teamID || teamID.length <= 3) {teamID = -1; }

    try{
        const Customers = await db_query("SELECT * FROM Customers WHERE customerID = ?",[customerID]);
        if (Customers.length <= 0) return res.status(400).json(messages.invalid("customer ID"))

        const Teams = await db_query("SELECT * FROM Teams WHERE teamID = ?",[teamID]);
        if (Teams.length <= 0) return res.status(400).json(messages.invalid("teamID"))
    }catch(error){
        console.error(error);
        return res.status(500).json(messages.error.server);
    }

    try{
        await db_execute("INSERT INTO Orders (customerID, orderIDCustomer, teamID) VALUES (?, ?, ?)",
            [customerID, orderIDCustomer, teamID]);
        return res.status(200).json(messages.success.addedRow);
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }

});

export default OrderRouter;