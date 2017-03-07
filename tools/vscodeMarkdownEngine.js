const path = require("path");
const FrontMatterRegex = /^---\s*(.|\s)*?---\s*/;
var MarkdownEngine = (function() {
    function MarkdownEngine() {}
    Object.defineProperty(MarkdownEngine.prototype, "engine", {
        get: function() {
            var _this = this;
            if (!this.md) {
                var hljs_1 = require('highlight.js');
                var mdnh = require('markdown-it-named-headers');
                this.md = require('markdown-it')({
                    html: true,
                    highlight: function(str, lang) {
                        if (lang && hljs_1.getLanguage(lang)) {
                            try {
                                return "<pre class=\"hljs\"><code><div>" + hljs_1.highlight(lang, str, true).value + "</div></code></pre>";
                            } catch (error) {}
                        }
                        return "<pre class=\"hljs\"><code><div>" + _this.engine.utils.escapeHtml(str) + "</div></code></pre>";
                    }
                }).use(mdnh, {});
                for (var _i = 0, _a = ['paragraph_open', 'heading_open', 'image', 'code_block', 'blockquote_open', 'list_item_open']; _i < _a.length; _i++) {
                    var renderName = _a[_i];
                    this.addLineNumberRenderer(this.md, renderName);
                }
                this.addLinkNormalizer(this.md);
                this.addLinkValidator(this.md);
            }
            return this.md;
        },
        enumerable: true,
        configurable: true
    });
    MarkdownEngine.prototype.stripFrontmatter = function(text) {
        var offset = 0;
        var frontMatterMatch = FrontMatterRegex.exec(text);
        if (frontMatterMatch) {
            var frontMatter = frontMatterMatch[0];
            offset = frontMatter.split(/\r\n|\n|\r/g).length - 1;
            text = text.substr(frontMatter.length);
        }
        return { text: text, offset: offset };
    };
    MarkdownEngine.prototype.render = function(text, stripFrontmatter) {

        var offset = 0;
        if (stripFrontmatter) {
            var markdownContent = this.stripFrontmatter(text);
            offset = markdownContent.offset;
            text = markdownContent.text;
        }
        this.firstLine = offset;
        return this.engine.render(text);
    };
    MarkdownEngine.prototype.parse = function(source) {
        var _a = this.stripFrontmatter(source),
            text = _a.text,
            offset = _a.offset;
        return this.engine.parse(text).map(function(token) {
            if (token.map) {
                token.map[0] += offset;
            }
            return token;
        });
    };
    MarkdownEngine.prototype.addLineNumberRenderer = function(md, ruleName) {
        var _this = this;
        var original = md.renderer.rules[ruleName];
        md.renderer.rules[ruleName] = function(tokens, idx, options, env, self) {
            var token = tokens[idx];
            if ((token.level === 0 || token.type === 'list_item_open' && token.level === 1) && token.map && token.map.length) {
                token.attrSet('data-line', _this.firstLine + token.map[0]);
                token.attrJoin('class', 'code-line');
            }
            if (original) {
                return original(tokens, idx, options, env, self);
            } else {
                return self.renderToken(tokens, idx, options, env, self);
            }
        };
    };
    MarkdownEngine.prototype.addLinkNormalizer = function(md) {
        var _this = this;
        var normalizeLink = md.normalizeLink;
        md.normalizeLink = function(link) {
            return normalizeLink(link);
        };
    };
    MarkdownEngine.prototype.addLinkValidator = function(md) {
        var validateLink = md.validateLink;
        md.validateLink = function(link) {
            // support file:// links
            return validateLink(link) || link.indexOf('file:') === 0;
        };
    };
    return MarkdownEngine;
}());
module.exports.MarkdownEngine = MarkdownEngine;