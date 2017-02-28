const fs = require('fs');
const path = require('path');
const routerDir = `${__dir}/router`;

module.exports = (router) => {
    /*
     * 自动加载各个路由的数据
     */
    function readDir(routedir = '') {
        fs.readdirSync(path.join(routerDir, routedir)).map(dir => {
            let rtdir = path.join(routedir, dir);
            let access = dir.indexOf('.');
            if (access == -1) {
                return readDir(rtdir);
            } else if (access) {
                let funMap = require(path.join(routerDir, rtdir));
                let type = rtdir.split('/')[0];
                let route = '';
                if (dir !== 'root.js') route = path.relative(type, rtdir);
                route = route.substring(0, route.indexOf('.'));
                for (let [, fun] of funMap) {
                    router[type]('/' + route, fun);
                }
            } else {
                console.error(`invalid files: ${rtdir},these routers will be ignore`);
            }
        });
    }
    readDir();
    return router;
};