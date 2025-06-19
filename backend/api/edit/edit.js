import express from "express";
import {db_execute, db_query} from "../../db.js";
import messages from "../../message.js";
import {dateToISO} from "../../functions.js";

const EditRouter = express.Router();

// Get all edit types
EditRouter.get('/', async (req, res) => {
    try {
        const materials = await db_query("SELECT * FROM edit");
        res.status(200).json(materials);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// Get 1 edit
EditRouter.get('/:id', async (req, res) => {
   let id = req.params.id;
    try {
        const edit = await db_query("SELECT * FROM edit WHERE editID = ?", [id]);
        res.status(200).json(edit);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});


// Get all edits for product page
EditRouter.post('/product', async (req, res) => {
    let { productId } = req.body;

    // Check if product exists
    try{
        let products = await db_query("SELECT productID FROM product WHERE productID = ?", [productId],);
        if (products.length <= 0) return res.status(400).json(messages.invalid("product id"));
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }

    // Get data
    try{
        let edits = await db_query(`
        SELECT e.plannedStart, e.startDate, e.endDate, et.editDesc, u.username, e.editID FROM edit e
        JOIN edittypes et ON e.editTypeID = et.editID
        JOIN users u ON e.userID = u.userID
        WHERE productID = ?
        `, [productId],);
        return res.status(200).json(edits);
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
})


// Create new edit type
EditRouter.post('/', async (req, res) => {
    let { productID, editTypeID, comment, drawing, startDate, endDate, plannedStart, plannedEnd, userID } = req.body;

    // Check if data is valid
    if (!productID || productID.length <= 0) return res.status(400).json(messages.invalid("product id"));
    if (!editTypeID || editTypeID.length <= 0) return res.status(400).json(messages.invalid("edit type id"));
    if (!drawing || drawing.length <= 0) return res.status(400).json(messages.invalid("drawing"));
    if (!plannedStart || plannedStart.length <= 0) return res.status(400).json(messages.invalid("planned start"));
    if (!userID || userID.length <= 0) return res.status(400).json(messages.invalid("user id"));

    // Check if product, user and edit type exists
    try{
        let products = await db_query("SELECT productID FROM product WHERE productID = ?", [productID],);
        if (products.length <= 0) return res.status(400).json(messages.invalid("product id"));

        let editTypes = await db_query("SELECT editID FROM edittypes WHERE editID = ?", [editTypeID]);
        if (editTypes.length <= 0) return res.status(400).json(messages.invalid("edit type id"));

        let users = await db_query("SELECT userID FROM users WHERE userID = ?", [userID]);
        if (users.length <= 0) return res.status(400).json(messages.invalid("user id"));
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }

    // dates to isoDate
    try{
        if(!dateToISO(plannedStart)){
            return res.status(400).json(messages.invalid("date"));
        }
        if ((!plannedStart || !dateToISO(plannedStart)) || (!plannedEnd || !dateToISO(plannedEnd))) {
            return res.status(400).json(messages.invalid("date"));
        }
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }

    // Add data to the database
    try{
        await db_execute(
            "INSERT INTO edit (productID, editTypeID, comment, drawing, startDate, endDate, plannedStart, plannedEnd, userID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [productID, editTypeID, comment, drawing, dateToISO(startDate), dateToISO(endDate), dateToISO(plannedStart), dateToISO(plannedEnd), userID]
        );
        return res.status(201).json(messages.success.addedRow);
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
});

export default EditRouter;