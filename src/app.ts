import * as express from 'express';

import product from './routes/Product.routes';
import woocommerce from './routes/WooCommerce.routes';
import middlaware from './routes/Middlaware.routes';

import * as bodyParser from "body-parser";
import { createConnection } from 'typeorm';
import * as cors from 'cors';
import * as dotenv from "dotenv";

export class App {
 
  private express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private middlewares(): void {

    // this.express.use(express.urlencoded({ extended: true })) 
    // this.express.use(express.json());
    const allowedOrigins = ['https://latinquarter.online/wp-json/wc/v3'];
    const allowedContentTypes = ['Content-Type'];
    const options: cors.CorsOptions = {
      origin: allowedOrigins,
      methods: "GET, OPTIONS, PUT, POST, DELETE",
      allowedHeaders: allowedContentTypes,
      credentials : true
    };

    this.express.use(bodyParser.json());
    this.express.use(cors(options));
    dotenv.config();
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
    this.express.use(cors({
      origin: "https://latinquarter.online/wp-json/wc/v3"
   }))
    
  }

  private listen(): void {
    this.express.listen(process.env.PORT, () => {
      console.log("Servidor Iniciado na Porta: " + process.env.PORT);
    })
  }

  private database(): void {
    createConnection();
  }

  private routes(): void {
    this.express.use('/api', product);
    this.express.use('/api', woocommerce);
    this.express.use('/api', middlaware);
  }
}
