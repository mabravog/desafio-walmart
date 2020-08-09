const { MongoClient } = require('mongodb')

class ProductRepository {
    constructor() {
        const uri = "mongodb://productListUser:productListPassword@localhost?retryWrites=true&w=majority";
        this.client = new MongoClient(uri, { useUnifiedTopology: true });
    }

    async get(search = '') {
        try {
            if (!search) { return [] }
            await this.client.connect();
            const database = this.client.db('promotions');
            const collection = database.collection('products');
            let query = {
                '$or': [
                    { id: !isNaN(search) ? Number(search) : null }
                ]
            };
            if (String(search).length > 3) {
                query['$or'].push({ brand: { '$regex': String(search) } });
                query['$or'].push({ description: { '$regex': String(search) } });
            }
            const products = await collection.find(search ? query : {}).toArray();
            return products;
        } finally {
            await this.client.close();
        }
    }
}

module.exports = ProductRepository;