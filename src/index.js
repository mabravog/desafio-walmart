const Koa = require('koa');
const app = new Koa();
const { routes } = require('./router');

app.use(routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT);