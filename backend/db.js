import mysql from "mysql2/promise";
import config from "./config.js"

const db = await mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
});

console.log("Verbonden met de database!");

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
