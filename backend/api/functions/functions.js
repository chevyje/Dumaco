import express from "express";
import {createFunction, db_query, getFunctionID} from "../../db.js";
import messages from "../../message.js";

const FunctionsRouter = express.Router();

FunctionsRouter.get('/', async (req, res) => {
    try {
        const functions = await db_query("SELECT * FROM Functions");
        res.status(200).json(functions);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

FunctionsRouter.post('/', async (req, res) => {
    const { name } = req.body;

    if (!name || name.length <= 1) return res.status(400).json(messages.invalid("name"));

    if(await getFunctionID(name) === null) {
        return res.status(409).json(messages.error.duplicate);
    }
    await createFunction(name);
    return res.status(200).json(messages.success.addedRow);

});

FunctionsRouter.delete('/:name', async (req, res) => {
    const { name } = req.params;

    try {
        const result = await db_query("DELETE FROM Functions WHERE name = ?", [name]);

        if(result.affectedRows === 0) {
            return res.status(404).json(messages.invalid("name"));
        }

        res.status(200).json(messages.success.addedRow);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

export default FunctionsRouter;