import MiddlawareController from "../controller/MiddlawareController";
import { Router } from 'express';

const routes = Router();

routes.get('/productMiddlaware', MiddlawareController.listProductMiddlaware);
routes.post('/productMiddlaware', MiddlawareController.createMiddlaware);

export default routes;
