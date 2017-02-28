let routerDir = `${process.env.PWD}/router`;
const fs = require('fs');
const path = require('path');

const ignore = [
    '.DS_Store'
];

function readDir(routes = new Map(), routerdir = '') {
    fs.readdirSync(path.join(routerDir, routerdir)).map(dir => {
        ignore.map((str) => {
            let rtdir = path.join(routerdir, dir);
            while (dir.indexOf('.') == -1) {
                return readDir(routes, rtdir);
            }

            let pat = new RegExp(str);
            if (pat.test(dir)) return;
            let type = routerdir.split('/')[0];
            if (!routes.has(type)) routes.set(type, new Array());
            let route = (dir !== 'root.js') ? path.join('/', path.relative(type, rtdir)) : '/';
            route = route.split('.')[0];
            routes.get(type).push(route);
            routes.get(type).sort();
        });

    });
    return routes;
}
module.exports = readDir;