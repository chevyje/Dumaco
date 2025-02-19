import express from "express";
import bcrypt from 'bcryptjs';
import {db_execute, db_query} from "../../db.js";

const UsersRouter = express.Router();

UsersRouter.get('/getAllUsers', async (req, res) => {
    const users = await db_query("SELECT * FROM Users");
    res.json(users);
});

UsersRouter.post('/createUser', async (req, res) => {

    const body = req.body;

    if(body.username === undefined || body.username.length <= 3){res.status(400).send("Invalid username or too short");return;}
    if(body.password === undefined || body.password.length === 0){res.status(400).send("Invalid password");return;}
    if(body.recoveryMail === undefined  || body.recoveryMail.length === 0){res.status(400).send("Invalid recoveryMail");return;}

    // TODO: check of foreign job entry bestaat bij TeamCodes

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    try {
        await db_execute("INSERT INTO Users (username, password, recoveryMail, job) VALUES (?, ?, ?, ?)", [body.username, hashedPassword, body.recoveryMail, body.job]).then(result => {
            res.json(result.message);
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error, user may already exist");
    }

});

UsersRouter.delete('/deleteUser', async (req, res) => {

  const body = req.body;

  if(body.username === undefined || body.username.length <= 3){res.status(400).send("Invalid username");return;}

  try {
      await db_execute("DELETE FROM Users WHERE username = ?", [body.username]).then(result => {
          res.json(result.message);
      });
  } catch (err) {
      console.error(err);
      res.status(500).send("Server Error, user may not exist");
  }

});

UsersRouter.post('/checkCredentials', async (req, res) => {
    const users = await db_query("SELECT password FROM Users WHERE username = ?", [req.body.username]);

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
        }
      });
});

export default UsersRouter;

