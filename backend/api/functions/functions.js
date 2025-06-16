import express from "express";
import {createFunction, db_execute, db_query, getFunctionID} from "../../db.js";
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
    const { name, accessLevel } = req.body;
    if (!name || name.length <= 1) return res.status(400).json(messages.invalid("name"));

    try{
        let functions = await db_query("SELECT functionName FROM functions WHERE functionName = ?", [name]);
        if (functions.length > 0) return res.status(400).json(messages.error.duplicate);
        await db_execute("INSERT INTO Functions (functionName, accessLevel) VALUES (?, ?)", [name, accessLevel]);
        return res.status(200).json(messages.success.addedRow);
    }catch(error){
        console.error(error);
        res.status(500).json(messages.error.server);
    }

});

FunctionsRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    let { name, accessLevel } = req.body;

    try{
        let functions = await db_query("SELECT * FROM Functions WHERE functionID = ?", [id]);
        if(!functions || functions.length <= 0) return res.status(400).json(messages.invalid("id"));
        console.log(functions);
        if(!name || name.length <= 0) name = functions[0].functionName;
        if(!accessLevel || accessLevel <= 0) accessLevel = functions[0].accessLevel;
        await db_execute("UPDATE functions SET functionName = ?, accessLevel = ? WHERE functionID = ?", [name, accessLevel, id]);
        return res.status(200).json(messages.success.updateRow);
    }catch (error){
        console.error(error);
        return res.status(500).json(messages.error.server);
    }
})

FunctionsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db_query("DELETE FROM Functions WHERE functionID = ?", [id]);

        if(result.affectedRows === 0) {
            return res.status(404).json(messages.invalid("id"));
        }

        res.status(200).json(messages.success.deletedRow);
    } catch (error) {
        if(error.code === 'ER_ROW_IS_REFERENCED_2'){
            return res.status(403).json(messages.error.deleteForeignKey);
        }
        console.error(error);
        return res.status(500).json(messages.error.server);
    }
});

export default FunctionsRouter;