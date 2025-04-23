import express from "express";
import {db_execute, db_query} from "../../db.js";
import messages from "../../message.js";

const MaterialTypesRouter = express.Router();

// Get all material Types
MaterialTypesRouter.get('/', async (req, res) => {
    try {
        const materials = await db_query("SELECT * FROM materialtypes");
        res.status(200).json(materials);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// Create new material type
MaterialTypesRouter.post('/', async (req, res) => {
    let { materialName, width } = req.body;

    if(!materialName || materialName.length <= 0) return res.status(400).json(messages.invalid("materialName"));
    if(!width || width.length <= 0) return res.status(400).json(messages.invalid("width"));

    const materials = await db_query("SELECT * FROM materialtypes WHERE materialName = ? AND width = ?", [materialName, width]);
    if(materials.length >= 1) return res.status(400).json(messages.error.duplicate);

    try{
        await db_execute("INSERT INTO materialtypes (materialName, width) VALUES (?, ?)", [materialName, width]);
        return res.status(201).json(messages.success.addedRow);
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
});

export default MaterialTypesRouter;