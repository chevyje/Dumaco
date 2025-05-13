import express from "express";
import {db_execute, db_query} from "../../db.js";
import messages from "../../message.js";

const CustomerRouter = express.Router();

// Get all Customers
CustomerRouter.get('/', async (req, res) => {
    try {
        const customers = await db_query("SELECT * FROM customers");
        res.status(200).json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// Get 1 Customer
CustomerRouter.get('/:id', async (req, res) => {
    try{
        const customer = await db_query("SELECT * FROM customers WHERE customerID = ?", [req.params.id]);
        res.status(200).json(customer);
    }
    catch(err){
        console.error(err);
        res.status(500).json(messages.error.server);
    }
});

// Get customer id by name
CustomerRouter.post('/name', async (req, res) => {
    const name = req.body.name;

    if (!name || name.length <= 3) return res.status(400).json(messages.invalid("name"));

    try{
        const customers = await db_query("SELECT customerID FROM customers WHERE customerName = ?", [name]);
        if(customers.length > 0) return res.status(200).json({"customerId": customers[0].customerID});
        else return res.status(400).json(messages.invalid("name"));
    } catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
})

// Create new customer
CustomerRouter.post('/', async (req, res) => {
    let { name, address, dockerNumber, palletTracking, phoneNumber, mailAddress } = req.body;

    if (!name || name.length <= 3) return res.status(400).json(messages.invalid("name"));
    if (!address || address.length <= 3) return res.status(400).json(messages.invalid("address"));
    if (!dockerNumber || dockerNumber.length <= 3) {dockerNumber = 0;}
    if (!palletTracking || palletTracking.length <= 3) { palletTracking = false;}
    if (!phoneNumber || phoneNumber.length <= 3) return res.status(400).json(messages.invalid("phone number"));
    if (!mailAddress || mailAddress.length <= 3) return res.status(400).json(messages.invalid("mail address"));

    const customers = await db_query("SELECT * FROM customers WHERE customerName = ?", [name]);
    if(customers.length >= 1) return res.status(400).json(messages.error.duplicate);

    try{
        await db_execute("INSERT INTO customers (customerName, address, dockerNumber, palletTracking, phoneNumber, mailAddress) VALUES (?, ?, ?, ?, ?, ?)",
            [name, address, dockerNumber, palletTracking, phoneNumber, mailAddress]);
        return res.status(201).json(messages.success.addedRow);
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
});

export default CustomerRouter;