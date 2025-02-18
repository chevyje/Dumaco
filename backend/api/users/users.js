import express from "express";
import bcrypt from 'bcryptjs';
import { db_query } from "../../db.js";

const UsersRouter = express.Router();

UsersRouter.get('/getUsers', async (req, res) => {
    const users = await db_query("SELECT * FROM users");
    res.json(users);
  });

UsersRouter.post('/checkCredentials', async (req, res) => {
    const users = await db_query("SELECT password FROM users WHERE username = ?", [req.body.username]);

    if(users.length <= 0){
      res.status(401).json({message: "Incorrect username"})
      return;
    }

    bcrypt.compare(req.body.password, users[0].password, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({message: "There went something wrong on the server"});
        } else if (result) {
          res.status(200).json({message: "Succesfull Login"});
        } else {
          res.status(401).json({message: "Incorrect password"});
          console.log(req.body.password)
          console.log(users[0].password)
        }
      });
});

UsersRouter.post('/getSalt', async (req, res) => {
  const users = await db_query("SELECT salt FROM users WHERE username = ?", [req.body.username]);
  if(users.length <= 0){
    res.status(401).json({message: "Incorrect username"})
    return;
  }
  res.status(200).json(users);
});

export default UsersRouter;

