import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

class AuthWooCommerce {
    public async wooCommerceFunc(paramersAll: string) {
        const WooCommerce = new WooCommerceRestApi({
            url: String(`${process.env.URLWOOCOMMERCE}/${paramersAll}`),
            consumerKey: String(process.env.CONSUMERKEY),
            consumerSecret: String(process.env.CONSUMERSECRET),
            version: 'wc/v3'
        });

        return WooCommerce;

    }
}

export default new AuthWooCommerce();
