import express from "express";
import {db_execute, db_query} from "../../db.js";
import messages from "../../message.js";
import {dateToISO} from "../../functions.js";
import teams from "../teams/teams.js";

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
OrderRouter.post('/Filtered', async (req, res) => {
    let { limit, offset, teamID } = req.body;
    if (!limit || limit.length <= 0) return res.status(400).json(messages.invalid("limit"));
    if (!offset || offset.length <= 0) offset = 0;
    if (!teamID || teamID.length <= 0) teamID = 0;

    try{
        const Teams = await db_query("SELECT * FROM teams WHERE teamID = ?", [teamID]);
        if(Teams.length <= 0) teamID = 0;
    }catch(err){
        return res.status(500).json(messages.error.server);
    }

    try{
        if(teamID === 0) {
            const orders = await db_query("SELECT * FROM orders LIMIT ? OFFSET ?", [limit, offset]);
            return res.status(200).json(orders);
        }
        else{
            const orders = await db_query("SELECT * FROM Orders WHERE teamID = ? LIMIT ? OFFSET ?", [teamID, limit, offset]);
            return res.status(200).json(orders);
        }
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
});

// Create new Order
OrderRouter.post('/', async (req, res) => {
    let { customerID, orderIDCustomer, teamID, createdBy, plannedStart, plannedDelivery, deliveryDate } = req.body;
    let ISOdeliveryDate = null;

    if (!customerID || customerID.length <= 0) return res.status(400).json(messages.invalid("customer ID"))
    if (!orderIDCustomer || orderIDCustomer.length <= 0) { orderIDCustomer = null; }
    if (!teamID || teamID.length <= 3) {teamID = -1; }
    if (!createdBy || createdBy.length <= 0) return res.status(400).json(messages.invalid("user ID"))
    if (!plannedStart || plannedStart <= 0) return res.status(400).json(messages.invalid("planned start date"))
    if (!plannedDelivery || plannedDelivery <= 0) return res.status(400).json(messages.invalid("planned delivery date"))
    if (!deliveryDate || deliveryDate.length <= 2) { deliveryDate = null; }

    try{
        const Customers = await db_query("SELECT * FROM customers WHERE customerID = ?",[customerID]);
        if (Customers.length <= 0) return res.status(400).json(messages.invalid("customer ID"))

        const Teams = await db_query("SELECT * FROM teams WHERE teamID = ?",[teamID]);
        if (Teams.length <= 0) return res.status(400).json(messages.invalid("teamID"))

        const Users = await db_query("SELECT * FROM users WHERE userID = ?",[createdBy]);
        if (Users.length <= 0) return res.status(400).json(messages.invalid("userID"))
    }catch(error){
        console.error(error);
        return res.status(500).json(messages.error.server);
    }

    if(dateToISO(plannedStart) == null || dateToISO(plannedDelivery)  == null){
        return res.status(400).json(messages.invalid("date"))
    }

    if(deliveryDate != null && dateToISO(deliveryDate) == null){
        return res.status(400).json(messages.invalid("date"))
    }

    if(deliveryDate != null) ISOdeliveryDate = dateToISO(deliveryDate);

    try{
        await db_execute("INSERT INTO Orders (customerID, orderIDCustomer, teamID, createdBy, plannedStart, plannedDelivery, deliveryDate) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [customerID, orderIDCustomer, teamID, createdBy, dateToISO(plannedStart), dateToISO(plannedDelivery), ISOdeliveryDate]);
        return res.status(201).json(messages.success.addedRow);
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }

});

export default OrderRouter;