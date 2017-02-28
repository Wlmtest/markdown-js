const redirect = new Map();

redirect.set('show', ({ request, response }) => {
    const pars = request.query;
    let result = null;
    for (key in pars) {
        if (result === null) {
            result = parseFloat(pars[key])
        } else {
            result += parseFloat(pars[key])
        }
    }

    pars.result = result.toString();
    response.body = {
        sum: pars
    };
});

module.exports = redirect;