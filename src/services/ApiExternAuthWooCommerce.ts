const axios = require('axios').default

class AuthWooCommerce {
    public async wooCommerceFunc(consumerKey: String, consumerSecret: String) {

        const api = await axios.get(
            `${process.env.URL_WOOCOMMERCE}/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
        )
        return api.data;
    }
}

export default new AuthWooCommerce();
