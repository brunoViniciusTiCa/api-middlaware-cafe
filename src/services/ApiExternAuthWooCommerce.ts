const axios = require('axios').default

class AuthWooCommerce {
    public async wooCommerceFunc(consumerKey: String, consumerSecret: String) {
        const pathUrl = await `${process.env.URL_WOOCOMMERCE}/products?`
        const consumersKey = await `consumer_key=${consumerKey}` 
        const consumersSecret = await `&consumer_secret=${consumerSecret}` 

        const urlFull = await (pathUrl+consumersKey+consumersSecret);
        const api = await axios.get(urlFull);
        return api.data;
    }
}

export default new AuthWooCommerce();
