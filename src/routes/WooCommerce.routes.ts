import WooCommerceController from "../controller/WooCommerceController";
import { Router } from 'express';

const routes = Router();

routes.get('/productsWooCommerce', WooCommerceController.listProductWooCommerce);
routes.get('/productsWooCommerce', WooCommerceController.listProductWooCommerce);
routes.put('/productsWooCommerce/:id', WooCommerceController.updateQuantityProductFromWebSiteToClover);

export default routes;
