import express from "express";
import config from "./config.js";
import APIRouter from "./api/index.js";
import { initDatebase} from "./db.js";


const app = express();

app.use(express.json());

// TODO: database integreren

app.use((req, res, next) => {
    console.log("Request: " + req.url);
    next();
});

await initDatebase(); 

app.use("/api", APIRouter);

app.listen(config.PORT, () => {
    console.log(`Server started on http://localhost:${config.PORT}`);
});