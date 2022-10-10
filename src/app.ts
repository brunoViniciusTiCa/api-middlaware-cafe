import * as express from 'express';
import product from './routes/Product.routes';
import woocommerce from './routes/WooCommerce.routes';
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import * as dotenv from "dotenv";

export class App {
 
  private express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private middlewares(): void {

    const allowedContentTypes = ['Content-Type'];
    const options: cors.CorsOptions = {
      methods: "GET, OPTIONS, PUT, POST, DELETE",
      allowedHeaders: allowedContentTypes,
      credentials : true
    };

    this.express.use(bodyParser.json());
    this.express.use(cors(options));
    dotenv.config();
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
    
  }

  private listen(): void {
    this.express.listen(process.env.PORT, () => {
      console.log("Servidor Iniciado na Porta: " + process.env.PORT);
    })
  }

  private routes(): void {
    this.express.use('/api', product);
    this.express.use('/api', woocommerce);
  }
}
