import express from "express";
import UsersRouter from "./users/users.js";
import TeamsRouter from "./teams/teams.js";

const APIRouter = express.Router();

APIRouter.use("/users", UsersRouter);
APIRouter.use("/teams", TeamsRouter);

export default APIRouter;
