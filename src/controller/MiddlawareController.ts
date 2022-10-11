import {Request, Response} from "express";
import { Middlaware } from "./../entity/Middlaware";
import { getRepository } from "typeorm";

class ProductController {

    public async createMiddlaware(request: Request, response: Response) {
        try {
            const dados = await request.body;
            const result = await getRepository(Middlaware).insert(dados);
            return response.json(result);
        }
        catch(err) {
            return response.json({
                message: 'Problemas ao Listar Middlaware!'
            })
        }
    }

    public async listProductMiddlaware(request: Request, response: Response) {
        try {
            const result = await getRepository(Middlaware).find();
            return response.json(result);
        }
        catch(err) {
            return response.json({
                message: 'Problemas ao Listar Middlaware!'
            })
        }
        
    }
}

export default new ProductController();
