import express from 'express';
import { getStudentController } from '../controllers/student.controller.js';

const studentRouter = express.Router();

// Post /api/student/routes
// studentRouter.post('/routes', createRoutesController)


// Get /api/students/
studentRouter.get('/', getStudentController)

export default studentRouter;