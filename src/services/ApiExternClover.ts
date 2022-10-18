const axios = require('axios').default

class ApiExternClover {
    public async ApiClover() {
        const api = await axios.get(process.env.URL, {
            headers: {
                'accept': process.env.ACCEPT,
                'authorization': process.env.TOKEN,
            }
        })
        return api.data;
    }
    
    public async ApiCloverQuantity() {
        const api = await axios.get(process.env.URL_ITEM, {
            headers: {
                'accept': process.env.ACCEPT,
                'authorization': process.env.TOKEN,
            }
        })
        return api.data;
    }
}

export default new ApiExternClover();
