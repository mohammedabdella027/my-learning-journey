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

    // 1. Validate that all required fields are present
    if (!name || !email || !course) {
        const error = new Error("All fields (name, email, course) are required");
        error.status = 400;
        throw error
    }

    // 2. Proceed with database insertion if validation passes
    const [result] = await db.query('INSERT INTO students (name, email, course) VALUES (?, ?, ?)', [name, email, course]);

    return {id: result.insertId, name, email, course}
}

export const deleteStudentInfo = async (id) => {
    const [result] = await db.query('DELETE FROM students WHERE id = ?', [id]);

    // If affectedRows is 0, the student ID doesn't exist in the database
    if (result.affectedRows === 0) {
        const error = new Error('Student not found.')
        error.status = 404;
        throw error;
    }

    return {message: "Student deleted successfully"}
}