import express from "express";
import UsersRouter from "./users/users.js";
import TeamsRouter from "./teams/teams.js";
import FunctionsRouter from "./functions/functions.js";
import CustomerRouter from "./customers/customers.js";
import OrderRouter from "./orders/orders.js";

const APIRouter = express.Router();

APIRouter.use("/users", UsersRouter);
APIRouter.use("/teams", TeamsRouter);
APIRouter.use("/functions", FunctionsRouter);
APIRouter.use("/customers", CustomerRouter);
APIRouter.use("/orders", OrderRouter);

export default APIRouter;
