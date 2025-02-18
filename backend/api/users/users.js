import express from "express";
import { db_query } from "../../db.js";

const UsersRouter = express.Router();

UsersRouter.get('/getUsers', async (req, res) => {
    const users = await db_query("SELECT * FROM users");
    res.json(users);
  });

UsersRouter.post('/checkCredentials', async (req, res) => {
    const users = await db_query("SELECT * FROM users WHERE username = ?", [req.body.username]);

    if(users.length <= 0){
      res.status(401).json({message: "Incorrect username"})
      return;
    }

    if(users[0].password === req.body.password){
      res.status(200).json({message: "Succesfull Login"});
      return;
    }else{
      res.status(401).json({message: "Incorrect password"});
    }
});

export default UsersRouter;

