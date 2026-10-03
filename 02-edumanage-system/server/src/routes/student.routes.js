import express from 'express';
import { getStudentController, getStudentIdController, createStudentController, deleteStudentController } from '../controllers/student.controller.js';

const studentRouter = express.Router();

// Post /api/student/
studentRouter.post('/', createStudentController)


// Get /api/students/
studentRouter.get('/', getStudentController)

// Get /api/students/id
studentRouter.get('/:id', getStudentIdController)

// Delete /api/students/id
studentRouter.delete('/:id', deleteStudentController)

export default studentRouter;