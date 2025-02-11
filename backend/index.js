import express from "express";
import config from "./config.js";

const app = express();

app.use(express.json());

// TODO: database integreren

app.use((req, res, next) => {
    console.log("Request: " + req.url);
    next();
});

app.listen(config.PORT, () => {
    console.log(`Server started on http://localhost:${config.PORT}`);
});