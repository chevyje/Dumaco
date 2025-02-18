import mysql from "mysql2/promise";
import config from "./config.js"
import path from "path";
import fs from "fs";

const db = await mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    port : config.DB_PORT,
});

console.log("Verbonden met de database!");

export async function initDB() {

    const dbInitSqlFile = fs.readFileSync(path.join(import.meta.dirname, "/sql/db_init.sql"), { encoding: "utf-8" }).split(";");
    for (let query of dbInitSqlFile) {
        if (query.trim()) {
            await db.execute(query, []);
        }
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
