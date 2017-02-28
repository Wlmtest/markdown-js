global.__dir = `${process.env.PWD}`;

const Koa = require('koa');
const app = require(`${__dir}/config/index`)(new Koa());
app.listen(3000);