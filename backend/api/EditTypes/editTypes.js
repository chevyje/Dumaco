import express from "express";
import {db_execute, db_query} from "../../db.js";
import messages from "../../message.js";

const EditTypesRouter = express.Router();

// Get all edit types
EditTypesRouter.get('/', async (req, res) => {
    try {
        const materials = await db_query("SELECT * FROM edittypes ORDER BY position");
        res.status(200).json(materials);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// Create new edit type
EditTypesRouter.post('/', async (req, res) => {
    let { editName, editDesc, position } = req.body;

    // Check if data is valid
    if(!editName || editName.length <= 0) return res.status(400).json(messages.invalid("edit name"));
    if(!editDesc || editDesc.length <= 0) return res.status(400).json(messages.invalid("edit description"));
    if(!position || position.length <= 0) return res.status(400).json(messages.invalid("position"));

    // Check for duplicate
    try{
        const materials = await db_query("SELECT * FROM edittypes WHERE editName = ?", [editName]);
        if(materials.length >= 1) return res.status(400).json(messages.error.duplicate);
    }catch(err){
        console.error(err);
        res.status(500).json(messages.error.server);
    }

    // Add data to the database
    try{
        await db_execute("INSERT INTO edittypes (editName, editDesc, position) VALUES (?, ?, ?)", [editName, editDesc, position]);
        return res.status(201).json(messages.success.addedRow);
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
});

export default EditTypesRouter;