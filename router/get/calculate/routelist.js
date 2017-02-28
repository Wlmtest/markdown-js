const redirect = new Map();
const path = require('path');
const routelist = require(path.join(__dir, 'config/routelist'));

redirect.set('show', ({ request, response }) => {
    let result = routelist();
    response.body = {
        query: [...result]
    };
});

module.exports = redirect;