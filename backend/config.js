import dotenv from "dotenv";

dotenv.config();

const config = {};

config.PORT = process.env.PORT || 3000;
config.DB_HOST = process.env.DB_HOST;
config.DB_PASSWORD = process.env.DB_PASSWORD;
config.DB_USER = process.env.DB_USER;
config.DB_NAME = process.env.DB_NAME;

console.log("Data verkregen uit .env!");

export default config;