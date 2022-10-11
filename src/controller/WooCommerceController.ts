import {Request, Response} from "express";
import AuthWooCommerce from "../services/ApiExternAuthWooCommerce";

class WooCommerceController {
    public async listProductWooCommerce(request: Request, response: Response) {
        try {
            return response.json(await AuthWooCommerce.wooCommerceFunc());
        }
        catch(err){
            return response.json({
                message: 'Problemas ao Listar Items WooCommerce!'
            });
        }
    }
}

export default new WooCommerceController();
