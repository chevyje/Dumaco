import express from "express";
import { db_execute } from "../../db.js";
import { db_query } from "../../db.js";
import messages from "../../message.js";

const TeamsRouter = express.Router();

TeamsRouter.post('/createTeam', async (req, res) => {
    const body = req.body;
    if(body.teamName === undefined || body.teamName.length === 0){res.status(400).json(messages.invalid("team name"));return;}
    if(body.color === undefined || body.color.length === 0){res.status(400).json(messages.invalid("color"));return;}
    if(body.description === undefined  || body.description.length === 0){res.status(400).json(messages.invalid("description"));return;}

    const team = await db_query("SELECT * FROM Teams WHERE teamName = ?", [body.teamName]);
    if(team.length >= 1){
        res.status(401).json(messages.error.duplacte);
        return;
    }

    try{
        await db_execute("INSERT INTO Teams (teamName, color, descr) VALUES (?, ?, ?)", [req.body.teamName, req.body.color, req.body.description]);
        res.status(200).json(messages.succes.addedRow);
    }catch (err){
        console.error(err);
        res.status(500).json(messages.error.server);
    }
});

export default TeamsRouter;
