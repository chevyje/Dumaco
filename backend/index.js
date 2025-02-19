import express from "express";
import config from "./config.js";
import APIRouter from "./api/index.js";
import { initDB } from "./db.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Request: " + req.url);
    next();
});

await initDB();

app.use("/api", APIRouter);

app.listen(config.WEBSITE_PORT, () => {
    console.log(`Server started on http://localhost:${config.WEBSITE_PORT}`);
});