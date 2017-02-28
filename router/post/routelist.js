const redirect = new Map();
const path = require('path');
const routelist = require(path.join(__dir, 'config/routelist'));

redirect.set('show', ({ request, response }) => {
    const { types } = request.body, form = new Set(['get', 'post']);

    let queryType = new Set();
    if (types === 'all') {
        queryType = new Set([...form]);
    } else {
        types.split(',').map(type => {
            if (form.has(type)) queryType.add(type);
        });
    }

    let routers = routelist(),
        result = [];
    for (let [type, rts] of routers) {
        if (queryType.has(type)) result.push({
            type: type,
            routes: rts.sort(),
            total: rts.length
        });
    }
    response.body = result;
});

module.exports = redirect;