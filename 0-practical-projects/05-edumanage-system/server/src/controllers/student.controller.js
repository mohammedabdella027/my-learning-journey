import { getStudentInfo, getStudentById, createStudentInfo, deleteStudentInfo, updateStudentInfo } from "../service/student.service.js";

export const getStudentController = async (req, res, next) => {
    try {
        const result = await getStudentInfo();

        res.status(200).json({
            success: true,
            message: 'Students fetched successfully',
            data: result,
        })
    } 
    catch (error) {
        next(error);
    }
}

export const getStudentIdController = async (req, res, next) => {
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
        next(error);
    }
}

export const createStudentController = async (req, res, next) => {
    try {
        const newStudent = await createStudentInfo(req.body);
    
        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: newStudent
        })
    }
    catch (error) {
        next(error);
    }
}

export const deleteStudentController = async (req, res, next) => {
    try{
        const {id} = req.params;
        await deleteStudentInfo(id);
    
        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        })
    }
    catch (error) {
        next(error);
    }
}

export const updateStudentController = async (req, res, next) => {
    try {
        const {id} = req.params;

        const updateStudent = await updateStudentInfo(id, req.body);

        res.status(200).json({
            success: true,
            message: "Students Updated successfully",
            data: updateStudent
        })
    }
    catch (error) {
        next(error);
    }
}