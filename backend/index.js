import express from "express";
import config from "./config.js";
import users from "./api/users/users.js";


const app = express();

app.use(express.json());

// TODO: database integreren

app.use((req, res, next) => {
    console.log("Request: " + req.url);
    next();
});

app.use("/api/users", users);

app.listen(config.PORT, () => {
    console.log(`Server started on http://localhost:${config.PORT}`);
});