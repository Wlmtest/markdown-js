module.exports = (Views) => {
    const opt = {
        map: {
            html: 'nunjucks'
        }
    };
    return Views(`${__dir}/source`, opt);
};