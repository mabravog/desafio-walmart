const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://productListUser:productListPassword@host.docker.internal:27017', { useNewUrlParser: true, useUnifiedTopology: true });

async function getProducts() { 
    try {
        await client.connect();
        const db = client.db('promotions');
        return db;
    } finally {
        await client.close();
    }
}

module.exports = getProducts;