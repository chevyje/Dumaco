import express from "express";
import UsersRouter from "./users/users.js";
import TeamsRouter from "./teams/teams.js";
import FunctionsRouter from "./functions/functions.js";

const APIRouter = express.Router();

APIRouter.use("/users", UsersRouter);
APIRouter.use("/teams", TeamsRouter);
APIRouter.use("/functions", FunctionsRouter);

export default APIRouter;
