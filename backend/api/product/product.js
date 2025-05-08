import express from "express";
import {db_execute, db_query} from "../../db.js";
import messages from "../../message.js";
import { dateToISO } from "../../functions.js";
import OrderRouter from "../orders/orders.js";

const ProductRouter = express.Router();

// Get all products
ProductRouter.get('/', async (req, res) => {
    try {
        const materials = await db_query("SELECT * FROM product");
        res.status(200).json(materials);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// Get all products with a filter
ProductRouter.post('/Filtered', async (req, res) => {
    let { limit, offset, teamID } = req.body;
    if (!limit || limit.length <= 0) return res.status(400).json(messages.invalid("limit"));
    if (!offset || offset.length <= 0) offset = 0;
    if (!teamID || teamID.length <= 0) teamID = 0;

    // Get team to check if exists else set team to 0 to get all teams
    try{
        const Teams = await db_query("SELECT * FROM teams WHERE teamID = ?", [teamID]);
        if(Teams.length <= 0) teamID = 0;
    }catch(err){
        return res.status(500).json(messages.error.server);
    }

    // SQL query to database to get data with team filter or without team filter
    try{
        if(teamID === 0) {
            const orders = await db_query(
                `SELECT p.*, o.teamID, c.customerName
                FROM product p 
                JOIN  orders o ON p.orderID = o.orderID
                JOIN customers c ON o.customerID = c.customerID
                LIMIT ? OFFSET ?`,
                [limit, offset]);
            return res.status(200).json(orders);
        }
        else{
            const orders = await db_query(
                `SELECT p.*, o.teamID, c.customerName
                FROM product p
                JOIN  orders o ON p.orderID = o.orderID
                JOIN customers c ON o.customerID = c.customerID
                WHERE o.teamID = ? 
                LIMIT ? OFFSET ?`, [teamID, limit, offset]);
            return res.status(200).json(orders);
        }
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
});

// Create new product
ProductRouter.post('/', async (req, res) => {
    let { orderID, palletNumber, deliveryDate, materialID, quantity, createdBy } = req.body;
    let productNumber, productID;

    // Check if data is valid
    if (!orderID || orderID.length <= 0) return res.status(400).json(messages.invalid("order ID"));
    if (!palletNumber || palletNumber <= 0) palletNumber = null;
    if (!deliveryDate || deliveryDate.length <= 0) return res.status(400).json(messages.invalid("delivery date"));
    if (!materialID || materialID <= 0) return res.status(400).json(messages.invalid("material ID"));
    if (!quantity || quantity <= 0) return res.status(400).json(messages.invalid("quantity"));
    if (!createdBy || createdBy <= 0) return res.status(400).json(messages.invalid("created by"));

    // Check for existing foreign keys
    try{
        const Orders = await db_query("SELECT * FROM orders WHERE orderID = ?", [orderID]);
        if(Orders.length <= 0) return res.status(400).json(messages.invalid("order ID"));

        const Materials = await db_query("SELECT * FROM materialtypes WHERE materialID = ?", [materialID]);
        if(Materials.length <= 0) return res.status(400).json(messages.invalid("material ID"));

        const Users = await db_query("SELECT * FROM users WHERE userID = ?", [createdBy])
        if(Users.length <= 0) return res.status(400).json(messages.invalid("created by"));
    }catch(err){
        console.error(err);
        res.status(500).json(messages.error.server);
    }

    // Get product number
    try{
        const count = await db_query("SELECT COUNT(*) as count FROM product WHERE orderID = ?", [orderID]);
        productNumber = count[0]['count'] + 1;
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }

    // Create Product ID
    productID = `${productNumber}/${orderID}`;

    // Set dates to right format
    if(dateToISO(deliveryDate) == null){
        return res.status(400).json(messages.invalid("date"))
    }

    // Add data to the database
    try{
        await db_execute("INSERT INTO product (orderID, productID, productNumber, palletNumber, deliveryDate, materialID, quantity, createdBy) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [orderID, productID, productNumber, palletNumber, dateToISO(deliveryDate), materialID, quantity, createdBy]);
        return res.status(201).json(messages.success.addedRow);
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
});

export default ProductRouter;