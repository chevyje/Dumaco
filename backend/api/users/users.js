 import express from "express";
import bcrypt from 'bcryptjs';
import {createFunction, db_execute, db_query, getFunctionID} from "../../db.js";
import messages from "../../message.js";

const UsersRouter = express.Router();

// Get all users
UsersRouter.get('/', async (req, res) => {
    try {
        const users = await db_query("SELECT * FROM Users");
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// Get a single user by ID
UsersRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const users = await db_query("SELECT * FROM Users WHERE id = ?", [id]);
        if (users.length === 0) {
            return res.status(404).json(messages.error.notFound);
        }
        res.status(200).json(users[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// Create a new user
UsersRouter.post('/', async (req, res) => {
    const { username, password, recoveryMail, job } = req.body;

    if (!username || username.length <= 3) return res.status(400).json(messages.invalid("username"));
    if (!password || password.length <= 3) return res.status(400).json(messages.invalid("password"));
    if (!recoveryMail || recoveryMail.length <= 3) return res.status(400).json(messages.invalid("recovery mail"));
    if (!job || job.length <= 3) return res.status(400).json(messages.invalid("job"));

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        let functionID = await getFunctionID(job);

        if (functionID === null) {
            functionID = await createFunction(job);
        }

        const teamID = -1;

        await db_execute(
            "INSERT INTO Users (username, password, recoveryMail, functionID, teamID) VALUES (?, ?, ?, ?, ?)",[username, hashedPassword, recoveryMail, functionID, teamID]
        );

        res.status(201).json(messages.success.addedRow);
    } catch (err) {
        console.error(err);
        res.status(500).json(messages.error.server);
    }
});

// Update user by ID
UsersRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { username, recoveryMail, job } = req.body;

    try {
        const existingUser = await db_query("SELECT * FROM Users WHERE id = ?", [id]);
        if (existingUser.length === 0) {
            return res.status(404).json(messages.error.notFound);
        }

        await db_execute(
            "UPDATE Users SET username = ?, recoveryMail = ?, job = ? WHERE id = ?",
            [username, recoveryMail, job, id]
        );

        res.status(200).json(messages.success.addedRow);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// Delete user by ID
UsersRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db_execute("DELETE FROM Users WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json(messages.error.notFound);
        }

        res.status(200).json(messages.success.deletedRow);
    } catch (error) {
        console.error(error);
        res.status(500).json(messages.error.server);
    }
});

// User login
UsersRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if(!username) return res.status(400).json(messages.invalid("username"));
    if(password.length <= 3 || !password) return res.status(400).json(messages.invalid("password"));

    const users = await db_query("SELECT userID, password FROM Users WHERE username = ?", [username]);

    if (users.length === 0) {
        return res.status(401).json(messages.error.noAccount);
    }

    const isValid = await bcrypt.compare(password, users[0].password);

    if (isValid) {
        res.status(200).json({ message: messages.success.login, userId: users[0].id });
    } else {
        res.status(401).json(messages.error.incorrectPassword);
    }
});

export default UsersRouter;
