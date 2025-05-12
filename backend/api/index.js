import express from "express";
import UsersRouter from "./users/users.js";
import TeamsRouter from "./teams/teams.js";
import FunctionsRouter from "./functions/functions.js";
import CustomerRouter from "./customers/customers.js";
import OrderRouter from "./orders/orders.js";
import MaterialTypesRouter from "./materialTypes/materialTypes.js";
import EditTypesRouter from "./EditTypes/editTypes.js";
import ProductRouter from "./product/product.js";
import EditRouter from "./edit/edit.js";

const APIRouter = express.Router();

APIRouter.use("/users", UsersRouter);
APIRouter.use("/teams", TeamsRouter);
APIRouter.use("/functions", FunctionsRouter);
APIRouter.use("/customers", CustomerRouter);
APIRouter.use("/orders", OrderRouter);
APIRouter.use("/materialTypes", MaterialTypesRouter);
APIRouter.use("/editTypes", EditTypesRouter);
APIRouter.use("/product", ProductRouter);
APIRouter.use("/edit", EditRouter);

export default APIRouter;
