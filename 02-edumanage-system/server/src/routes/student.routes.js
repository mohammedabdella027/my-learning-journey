import express from 'express';
import { getStudentController, getStudentIdController } from '../controllers/student.controller.js';

const studentRouter = express.Router();

// Post /api/student/routes
// studentRouter.post('/routes', createRoutesController)


// Get /api/students/
studentRouter.get('/', getStudentController)

// Get /api/students/id
studentRouter.get('/:id', getStudentIdController)

export default studentRouter;