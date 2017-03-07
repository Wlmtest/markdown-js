const path = require('path');
const { showMarkdownHtml, shit, getHtmlCode } = require(`${__dir}/controller/get/showdown/index`);

const redirect = new Map();
redirect.set('show', ({ request, response, render }) => {
    let { markdown } = request.query;
    return render('markdown/markdownPreview', {
        markdown: getHtmlCode(markdown)
    });
});

module.exports = redirect;