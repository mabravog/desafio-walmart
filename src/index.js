const Koa = require('koa');
const app = new Koa();
const { routes } = require('./router');

app.use(routes);

app.listen(7000);