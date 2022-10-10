import WooCommerceController from "../controller/WooCommerceController";
import { Router } from 'express';

const routes = Router();

routes.get('/allProducts', WooCommerceController.listProductWooCommerce);

export default routes;
