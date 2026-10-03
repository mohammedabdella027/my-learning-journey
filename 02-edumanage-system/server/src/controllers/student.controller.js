import { getStudentInfo, getStudentById, createStudentInfo, deleteStudentInfo } from "../service/student.service.js";

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

export const createStudentController = async (req, res) => {
    try {
        const newStudent = await createStudentInfo(req.body);
    
        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: newStudent
        })
    }
    catch (error) {
        res.status(error.status || 500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteStudentController = async (req, res) => {
    try{
        const {id} = req.params;
        await deleteStudentInfo(id);
    
        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        })
    }
    catch (error) {
        res.status(error.status || 500).json({
            success: false,
            message: error.message
        })
    }
}