var koa = require('koa');
var views = require('koa-views');
var router = require('koa-router')();
var app = new koa();
var path = require('path');

router.get('/source/d3', (ctx) => {
    return ctx.render('d3', { name: 'shit' });
});

app.use(views(path.join(__dirname, '/source'), { map: { html: 'nunjucks' } }));
app.use(router.routes());

app.listen(3000);