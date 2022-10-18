import MiddlawareController from "../controller/MiddlawareController";
import { Router } from 'express';

const routes = Router();

// Retornar AllProductMiddlaware OneProductMiddlaware
routes.get('/productMiddlaware', MiddlawareController.listProductMiddlaware);
routes.get('/productMiddlaware/:id', MiddlawareController.findOneProductMiddlaware);

// Criar um ProductMiddlaware
routes.post('/productMiddlaware', MiddlawareController.createMiddlaware);

export default routes;
