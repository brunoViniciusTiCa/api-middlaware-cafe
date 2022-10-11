import WooCommerceController from "../controller/WooCommerceController";
import { Router } from 'express';

const routes = Router();

routes.get('/productsWooCommerce', WooCommerceController.listProductWooCommerce);

export default routes;
