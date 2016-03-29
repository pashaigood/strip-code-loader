/*jslint node:true */
"use strict";

var loaderUtils = require('loader-utils');

function StripBlockLoader(content) {

    var query = loaderUtils.parseQuery(this.query);

    this.start_comment = query.start_comment || 'test-code';
    this.end_comment = query.end_comment || 'end-test-code';

    this.regexPattern = query.pattern || new RegExp("([\\t ]*\\/\\* ?" + query.start_comment + " ?\\*\\/)[\\s\\S]*?(\\/\\* ?" + query.end_comment + " ?\\*\\/[\\t ]*\\n?)", "g");

    content = content.replace(this.regexPattern, '');

    if (this.cacheable) {
        this.cacheable(true);
    }

    this.callback(null, content);
}

module.exports = StripBlockLoader;