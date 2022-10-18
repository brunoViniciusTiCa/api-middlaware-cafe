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

            /* 
                Remover comentario depois que implementar tudo. 
                Este comentario é para deixar claro o que tem que ser feito :
                
                Primeiro - Pegar o Id que vem da Woocommerce.
                Segundo - Criar uma rota Put para enviar e modificar o campo: stock_quantity.

            */
            const dadosWooCommerce = await AuthWooCommerce.wooCommerceFunc();
            // const dadosClover = await BusinessRule.mergeTwoUrlsAndListOfProductsInStock(request, response);
            // console.log("dados Clover -> ", dadosClover)

            const idWoo = await dadosWooCommerce.map((el: { id: any; }) => el.id);
            const resuuu = await dadosWooCommerce.map((el: { stock_quantity: any; }) => el.stock_quantity);

            const idSendApiMiddle = request.params.id;
            // console.log("idSendApiMiddle -> ", idSendApiMiddle);

            // const findFirstId = await idWoo[0].find(idSendApiMiddle);
            // console.log("findFirstId -> ", findFirstId);

            //TODO Id que vem do Woocommerce.
            const idWooOne = idWoo[0];

            //TODO Quantidade de produtos, vindo do Woocommerce.
            const resuuuOne = resuuu[0];

            //TODO Precisamos da quantidade produtos vendido do Woocommerce.

            if(idWoo[0] === 2935 && resuuu[0] === 1) {
                return response.json({ idWooOne, resuuuOne, idSendApiMiddle  });
            }

            // console.log("dadosWooCommerce -> ", dadosWooCommerce);

            // const bodyRequest = request.body;



            // const updateEnsaioOne = await getRepository(Middlaware).update(id, bodyRequest);
            // return response.json(dadosWooCommerce);

        }catch(err){
            return response.json({
                message: 'Problema ao alterar um ensaio!'
            })
        }

    }
}

export default new WooCommerceController();
