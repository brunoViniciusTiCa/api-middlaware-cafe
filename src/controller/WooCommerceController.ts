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



    public async updateQuantityProductFromWebSiteToClover(request: Request, response: Response) {
        try {

            /* Aqui já temos um unico produto, vindo do Woocommerce
             pegando pelo ID do lado do Woocommerce. */
            const ids = await request.params.id;
            const oneWoocommerce = await AuthWooCommerce.wooCommerceFuncOne(ids);

            /** Precisamos pegar o campo do stock e Id*/
            const stock_quantity = await oneWoocommerce.stock_quantity

            //TODO Id que vem do Woocommerce.
            const idWooCommerce = await oneWoocommerce.id;

            //TODO Precisamos da quantidade produtos vendido do Woocommerce.
            return response.json({ oneWoocommerce, idWooCommerce, stock_quantity });


        } catch(err){
            return response.json({
                message: 'Problema ao alterar um ensaio!'
            })
        }

    }
}

export default new WooCommerceController();
