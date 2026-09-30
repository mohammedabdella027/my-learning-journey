import db from "../../config/db.js";

export const getStudentInfo = async () => {
    const [rows] = await db.query('SELECT * FROM students');
    return rows
}