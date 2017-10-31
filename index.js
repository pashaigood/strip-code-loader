/*jslint node:true */
"use strict";

var loaderUtils = require('loader-utils');

function StripBlockLoader(content) {

    var query = loaderUtils.parseQuery(this.query);

    const start_comment = query.start_comment || 'test-code';
    const end_comment = query.end_comment || 'end-test-code';

    const regexPattern = query.pattern || new RegExp("([\\t ]*\\/\\* ?" + start_comment + " ?\\*\\/)[\\s\\S]*?(\\/\\* ?" + end_comment + " ?\\*\\/[\\t ]*\\n?)", "g");

    content = content.replace(regexPattern, '');

    if (this.cacheable) {
        this.cacheable(true);
    }

    this.callback(null, content);
}

module.exports = StripBlockLoader;