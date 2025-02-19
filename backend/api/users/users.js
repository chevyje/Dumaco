import express from "express";
import bcrypt from 'bcryptjs';
import {db_execute, db_query} from "../../db.js";
import messages from "../../message.js";

const UsersRouter = express.Router();

UsersRouter.get('/getAllUsers', async (req, res) => {
  try{
    const users = await db_query("SELECT * FROM Users");
    res.status(200).json(users);
  }catch{
    res.status(500).json(messages.error.server);
  }
});

UsersRouter.post('/createUser', async (req, res) => {

    const body = req.body;

    if(body.username === undefined || body.username.length <= 3){res.status(401).json(messages.invalid("username"));return;}
    if(body.password === undefined || body.password.length === 0){res.status(401).json(messages.invalid("password"));return;}
    if(body.recoveryMail === undefined  || body.recoveryMail.length === 0){res.status(401).json(messages.invalid("recovery mail"));return;}

    // TODO: check of foreign job entry bestaat bij TeamCodes

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    try {
        await db_execute("INSERT INTO Users (username, password, recoveryMail, job) VALUES (?, ?, ?, ?)", [body.username, hashedPassword, body.recoveryMail, body.job]).then(result => {
            res.json(messages.succes.addedRow);
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(messages.error.server);
    }

});

UsersRouter.delete('/deleteUser', async (req, res) => {
  const body = req.body;
  if(body.username === undefined || body.username.length <= 3){res.status(401).json(messages.invalid("username"));return;}

  try {
    await db_execute("DELETE FROM Users WHERE username = ?", [body.username])
    res.status(200).json(messages.succes.deletedRow);
  } catch (err) {
      console.error(err);
      res.status(500).json(messages.error.server);
  }
});

UsersRouter.post('/checkCredentials', async (req, res) => {
    const users = await db_query("SELECT password FROM Users WHERE username = ?", [req.body.username]);

    if(users.length <= 0){
      res.status(401).json(messages.invalid("username"))
      return;
    }

    bcrypt.compare(req.body.password, users[0].password, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json(messages.error.server);
        } else if (result) {
          res.status(200).json(messages.succes.login);
        } else {
          res.status(401).json(messages.invalid("password"));
        }
      });
});

export default UsersRouter;

