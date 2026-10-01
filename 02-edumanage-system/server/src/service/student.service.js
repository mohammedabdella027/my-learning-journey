import db from "../../config/db.js";

export const getStudentInfo = async () => {
    const [rows] = await db.query('SELECT * FROM students');
    return rows
}

export const getStudentById = async (id) => {
    const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);

    if (rows.length === 0) {
        const error = new Error ('Students not found')
        error.status = 404;
        throw error
    }

    return rows[0];
}

export const createStudentInfo = async (studentData) => {
    const {name, email, course} = studentData;

    const [result] = await db.query('INSERT INTO students (name, email, course) VALUE (?, ?, ?)', [name, email, course]);

    return {id: result.insertId, name, email, course}
}