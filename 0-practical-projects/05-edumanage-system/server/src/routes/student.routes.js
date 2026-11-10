import express from 'express';
import { getStudentController, getStudentIdController, createStudentController, deleteStudentController, updateStudentController } from '../controllers/student.controller.js';

const studentRouter = express.Router();

// Post /api/student/
studentRouter.post('/', createStudentController)


// Get /api/students/
studentRouter.get('/', getStudentController)

// Get /api/students/id
studentRouter.get('/:id', getStudentIdController)

// Delete /api/students/id
studentRouter.delete('/:id', deleteStudentController)

// Update /api/students/id
studentRouter.put('/:id', updateStudentController)

export default studentRouter;