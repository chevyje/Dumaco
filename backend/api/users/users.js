import express from "express";
import { db_query } from "../../db.js";

const UsersRouter = express.Router();

UsersRouter.get('/getUsers', async (req, res) => {
    const users = await db_query("SELECT * FROM users");
    res.json(users);
  });

export default UsersRouter;

