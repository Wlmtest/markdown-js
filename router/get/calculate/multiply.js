const redirect = new Map();

redirect.set('show', ({ request, response }) => {
    const pars = request.query;
    let result = null;
    for (key in pars) {
        let v = null;
        pat = new RegExp('^[.A-Za-z0-9+/-]+$');
        if (pat.test(pars[key])) {
            pars[key].split('/').map(val => {
                if (v === null) {
                    v = parseFloat(val);
                } else {
                    v /= parseFloat(val);
                }
            });

            if (v === null) {
                v = parseFloat(pars[key]);
            }

            if (result === null) {
                result = v;
            } else {
                result *= v;
            }
        } else {
            result = "null";
            break;
        }
    }

    pars.result = result.toString();
    response.body = {
        multiply: pars
    };
});

module.exports = redirect;