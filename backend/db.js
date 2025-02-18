import mysql from "mysql2/promise";
import config from "./config.js"
import path from "path";
import fs from "fs";

console.log("host: " + config.DB_HOST);
console.log("port: " + config.PORT);
console.log("username: " + config.DB_USER);
console.log("password: " + config.DB_PASSWORD);
console.log("database: " + config.DB_NAME);

const db = await mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    port : config.DB_PORT,
});

console.log("Verbonden met de database!");

// Functie die zorgt dat alle tabellen zijn aangemaakt voor de db
export async function initDatebase() {
    try {
        const sqlPath = path.join(process.cwd(), "sql", "db_inits.sql");
        const sql = fs.readFileSync(sqlPath, "utf8");
        await db.query(sql);
        console.log("Database initialized succesfully");
    } catch (error) {
        console.error("Error initializing database: ", error);
    }
}

// Functie om SELECT queries uit te voeren
export async function db_query(query, params = []) {
    try {
        const [rows] = await db.execute(query, params);
        return rows;
    } catch (error) {
        throw error;
    }
}

// Functie om INSERT, UPDATE, DELETE queries uit te voeren
export async function db_execute(query, params = []) {
    try {
        const [result] = await db.execute(query, params);
        return result;
    } catch (error) {
        throw error;
    }
}

export { db };
