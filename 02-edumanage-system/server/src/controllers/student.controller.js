import { getStudentInfo } from "../service/student.service.js";

export const getStudentController = async (req, res) => {
    try {
        const result = await getStudentInfo();

        res.status(200).json({
            success: true,
            message: 'Students fetched successfully',
            data: result,
        })
    } 
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}