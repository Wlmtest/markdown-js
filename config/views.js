module.exports = (Views) => {
    const opt = {
        map: {
            html: 'nunjucks'
        }
    };
    return Views(`${__dir}/source/static/html`, opt);
};