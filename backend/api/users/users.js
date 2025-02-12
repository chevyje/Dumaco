import express from "express";
import { db_query } from "../../db.js";

const UsersRouter = express.Router();

UsersRouter.get('/getUsers', (req, res) => {
    res.json({ message: 'Hello, World!' });
    console.log(db_query("SELECT * FROM users"))
  });

export default UsersRouter;
