const redirect = new Map();
redirect.set('show', ({ request, response, render }) => {
    return render('d3', { name: 'fuck' });
});

module.exports = redirect;