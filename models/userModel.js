import pool from '../db.js';

export const createUser = async (username, email, password) => {
    await pool.query(
        "INSERT INTO users(username, email, password) VALUES (?,?,?)",
        [username, email, password] 
    );
};

export const findUserByEmail = async (email) => {
    const [rows] = await pool.query( "SELECT * FROM users WHERE email = ?", [email]);
    return rows[0]||null;
};