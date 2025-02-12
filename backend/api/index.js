import express from "express";
import UsersRouter from "./users/users.js";

const APIRouter = express.Router();

APIRouter.use("/users", UsersRouter);

export default APIRouter;
