const { ProductRepository } = require('../repositories');

const ProductsController = async (ctx, next) => {
    const productRepository = new ProductRepository();
    ctx.body = await productRepository.get(ctx.params.search);
    next();
};

module.exports = ProductsController;