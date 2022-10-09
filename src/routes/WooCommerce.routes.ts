import WooCommerceController from "../controller/WooCommerceController";
import { Router } from 'express';

const routes = Router();

routes.get('/:products', WooCommerceController.listProductWooCommerce);

export default routes;
