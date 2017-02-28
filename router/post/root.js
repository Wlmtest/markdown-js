const redirect = new Map();

redirect.set('getpost', ({ request, response }) => {
    response.body = {
        query: request.query,
        post: request.body
    };
});

module.exports = redirect;