import dotenv from 'dotenv';
// mysql2/promise gives us a Promise-based API so we can use async/await
import mysql from 'mysql2/promise';

dotenv.config();

// DB connection settings, read from env with sensible local defaults
export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'evangadi_demo',
};

// A connection pool reuses connections instead of opening one per query
export const db = mysql.createPool(dbConfig);

/**
 * Run a parameterized SQL query and return only the rows/result.
 * Using '?' placeholders + params guards against SQL injection.
 * @param {string} sql - SQL statement with '?' placeholders
 * @param {Array} params - Values to bind to the placeholders
 * @returns {Promise<any>} The query result (rows for SELECT, metadata otherwise)
 */
export const executeQuery = async (sql, params = []) => {
  // db.execute returns [rows, fields]; we only need the first element
  const [result] = await db.execute(sql, params);
  return result;
};
