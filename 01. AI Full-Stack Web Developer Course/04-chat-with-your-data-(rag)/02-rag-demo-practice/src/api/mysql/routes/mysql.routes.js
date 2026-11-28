import express from 'express';
import { handleTextUpload } from '../../../middleware/upload.js';
import { postMysqlController } from '../controller/mysql.controller.js';

const mysqlRoutes = express.Router();

mysqlRoutes.post('/', handleTextUpload, postMysqlController);

// mysqlRoutes.get('/', getMysqlController);

export default mysqlRoutes;