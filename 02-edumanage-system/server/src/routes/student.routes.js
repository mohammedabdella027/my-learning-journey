import express from 'express';
import { getStudentController, getStudentIdController, createStudentController } from '../controllers/student.controller.js';

const studentRouter = express.Router();

// Post /api/student/
studentRouter.post('/', createStudentController)


// Get /api/students/
studentRouter.get('/', getStudentController)

// Get /api/students/id
studentRouter.get('/:id', getStudentIdController)

export default studentRouter;