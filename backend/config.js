import dotenv from "dotenv";

dotenv.config();

const config = {};

config.DB_PORT = process.env.DB_PORT || 8080;
config.DB_HOST = process.env.DB_HOST;
config.DB_PASSWORD = process.env.DB_PASSWORD;
config.DB_USER = process.env.DB_USER;
config.DB_NAME = process.env.DB_NAME;
config.WEBSITE_PORT = process.env.WEBSITE_PORT || 80;

console.log("Data verkregen uit .env!");

export default config;