import express from "express";
import { fileURLToPath } from 'url';
import path from "path";
import config from "./config.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(import.meta.url); // voor database later

app.use(express.json());

app.use((req, res, next) => {
    console.log("Request: " + req.url);
    next();
});

app.listen(config.PORT, () => {
    console.log(`Server started on http://localhost:${config.PORT}`);
});