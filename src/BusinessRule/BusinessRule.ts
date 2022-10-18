import { Request, Response } from "express";
import ApiExternClover from "../services/ApiExternClover";

class BusinessRule {
    
    public async mergeTwoUrlsAndListOfProductsInStock(request: Request, response: Response) {
        try {
            const apiClover = await ApiExternClover.ApiClover();
            const fullApiClover = await apiClover.elements.map((el: any) => el);
            
            const apiCloverQuantity = await ApiExternClover.ApiCloverQuantity();
            const fullApiCloverQuantity = await apiCloverQuantity.elements.map((el: any) => el);

            const result1 = fullApiClover.map((el: any) => {
                return {
                    id: el.id,
                    name: el.name,
                    price: el.price,
                    priceType: el.priceType,
                    stockCount: el.stockCount,
                }
            });

            const result2 = fullApiCloverQuantity.map((el: any) => {
                return {
                    id: el.item.id,
                    stockCount: el.stockCount,
                    price: el.price,
                    quantity: el.quantity,
                    modifiedTime: el.modifiedTime,
                }
            });

            const result: any[] = []
            const elements = [];
            result1.map((el: any, i: string | number) => {
                result.push({elements: { itemsx: result1[i], itemStock: result2[i] }});
            })

            return response.json({result});
        }
        catch(err){
            return response.json({
                message: 'Problemas ao Listar Items!'
            });
        }
    }
}

export default new BusinessRule();
