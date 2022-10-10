import {Request, Response} from "express";
import AuthWooCommerce from "../services/ApiExternAuthWooCommerce";

class WooCommerceController {
    public async listProductWooCommerce(request: Request, response: Response) {
        try {

            const consumerKey = await String(request.query.consumer_key);
            const consumerSecret = await String(request.query.consumer_secret);

            const res = await AuthWooCommerce.wooCommerceFunc(consumerKey, consumerSecret);
            return response.json(res);
        }
        catch(err){
            return response.json({
                message: 'Problemas ao Listar Items WooCommerce!'
            });
        }
    }
}

export default new WooCommerceController();
