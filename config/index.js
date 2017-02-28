const Boom = require('boom');
const Router = require('koa-router');
const Views = require('koa-views');
const Body = require('koa-bodyparser');

module.exports = (app) => {
    app.use(Body());
    app.use(async({ response }, next) => {
        response.set('Content-Type', 'application/json');
        let time = new Date();
        await next();
        time = new Date() - time;
        console.log(`${time}ms`);
    });
    const router = require('./router')(new Router());
    const views = require('./views')(Views);

    app.use(views);
    app.use(router.routes());
    app.use(router.allowedMethods({
        throw: true,
        notImplemented: () => new Boom.notImplemented(),
        methodNotAllowed: () => new Boom.methodNotAllowed()
    }));
    return app;
};