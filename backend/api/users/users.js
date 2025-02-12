import express from "express";
import { db_query } from "../../db.js";

const router = express.Router();

router.get('/getUsers', (req, res) => {
    res.json({ message: 'Hello, World!' });
    console.log(db_query("SELECT * FROM users"))
  });

export default router;
