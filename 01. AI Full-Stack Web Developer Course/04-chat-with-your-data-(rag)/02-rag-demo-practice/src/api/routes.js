import express from 'express';
import mysqlRoutes from './mysql/routes/mysql.routes.js';

export const mainRouter = express.Router();

mainRouter.use('/mysql', mysqlRoutes);