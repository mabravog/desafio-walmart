const Router = require('koa-router');
const cors = require('@koa/cors');
const router = new Router();
const { ProductsController } = require('./controllers');

router.get('/', (ctx, next) => {
    ctx.body = { message: "OK" };
    next();
});

router.get(['/products', '/products/:search'], ProductsController);

router.use(cors());

module.exports = { routes: router.routes() };