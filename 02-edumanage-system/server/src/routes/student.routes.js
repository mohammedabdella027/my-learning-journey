import express from 'express';
import { getStudentController } from '../controllers/student.controller.js';

const studentRouter = express.Router();

// Post /api/student/routes
// studentRouter.post('/routes', createRoutesController)


// Get /api/student/routes
studentRouter.get('/routes', getStudentController)

export default studentRouter;