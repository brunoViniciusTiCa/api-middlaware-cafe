const axios = require('axios').default

class AuthWooCommerce {
    public async wooCommerceFunc() {
        const pathUrl = await `${process.env.URL_WOOCOMMERCE}/products?`
        const consumersKey = await `consumer_key=${process.env.CONSUMER_KEY}` 
        const consumersSecret = await `&consumer_secret=${process.env.CONSUMER_SECRET}` 

        const urlFull = await (pathUrl+consumersKey+consumersSecret);
        const api = await axios.get(urlFull);
        return api.data;
    }
}

export default new AuthWooCommerce();
