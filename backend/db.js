import mysql from "mysql2";
import config from "./config.js"

const db = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("Error tijdens verbinden met database: " +err.message);
        return;
    }
    console.log("Verbonden met de database!");
});

/**
 * Queries the database
 * @param {string} query sqlite query
 * @param {any[]} params sequentially replace '?' in query with value
 * @returns {Promise<Database.SqliteError|any[]>}
 */
export async function db_query(query, params) {
    return new Promise((resolve, reject) => {
        try {
            if (params === undefined) params = [];
            resolve(db.prepare(query).all(...params));
        } catch(e) {
            reject(e);
        }
    });
}

/**
 * Runs a query on the database. Does not return data
 * @param {string} query sqlite query
 * @param {any[]} params sequentially replace '?' in query with value
 * @returns {Promise<Database.SqliteError|null>}
 */
export async function db_execute(query, params) {
    return new Promise((resolve, reject) => {
        try {
            if (params === undefined) params = [];
            resolve(db.prepare(query).run(...params));
        } catch (e) {
            reject(e);
        }
    });
}
