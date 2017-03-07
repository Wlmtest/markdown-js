const fs = require('fs');
const path = require('path');
const __dirHtml = 'source/static/html/markdown';
const __dirMarkdown = 'source/static/md';
const { MarkdownEngine } = require(`${__dir}/tools/vscodeMarkdownEngine`);

function makeMarkdownHtml(markdown = 'test') {
    console.log(233);
    let readStream = fs.createReadStream(path.join(__dir, `${__dirMarkdown}/${markdown}.md`), "utf-8");
    let writeStream = fs.createWriteStream(path.join(__dir, `${__dirHtml}/${markdown}.html`));
    let renderer = new MarkdownEngine();
    /* 当有数据流出时，写入数据 */
    readStream.on('data', function(chunk) {
        chunk = renderer.render(chunk);
        if (writeStream.write(chunk) === false) { // 如果没有写完，暂停读取流
            readStream.pause();
        }
    });
    /*写完后，继续读取 */
    writeStream.on('drain', function() {
        readStream.resume();
    });
    /*当没有数据时，关闭数据流*/
    readStream.on('end', async function() {
        writeStream.end();
    });
}

function showMarkdownHtml(markdown) {
    let fsd = path.join(__dir, `${__dirHtml}/${markdown}.html`);
    fs.exists(fsd, (file) => {
        console.log(fsd);
        console.log(file);

    });
    makeMarkdownHtml(markdown);
    return markdown;
}

function getHtmlCode(markdown = 'test') {
    let md_file = fs.readFileSync(path.join(__dir, `${__dirMarkdown}/${markdown}.md`), "utf-8");
    let renderer = new MarkdownEngine();
    return renderer.render(md_file);
}

module.exports = {
    showMarkdownHtml,
    getHtmlCode
}