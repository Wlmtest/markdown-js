const redirect = new Map();

redirect.set('show', ({ request, response }) => {
    response.body = {
        query: request.query
    };
});

module.exports = redirect;