import { getStudentInfo, getStudentById } from "../service/student.service.js";

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

export const getStudentIdController = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await getStudentById(id);

        res.status(200).json({
            success: true,
            message: 'students fetched by Id successfully',
            data: result,
        })
    }
    catch (error) {
        res.status(error.status ||500).json({
            success: false,
            message: error.message
        });
    }
}