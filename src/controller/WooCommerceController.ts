import {Request, Response} from "express";
import AuthWooCommerce from "../services/ApiExternAuthWooCommerce";

class WooCommerceController {
    public async listProductWooCommerce(request: Request, response: Response) {
        try {
            const paramersAll = request.params.products;
            return response.json(await AuthWooCommerce.wooCommerceFunc(paramersAll));
        }
        catch(err){
            return response.json({
                message: 'Problemas ao Listar Items WooCommerce!'
            });
        }
      
    }
}

export default new WooCommerceController();
