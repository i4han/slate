'use strict';

module.exports = {
    plugins: [],
    recurseDepth: 10,
    source: {
        includePattern: ".+\\.js(doc|x)?$",
        excludePattern: "(^|\\/|\\\\)\\.",
        exclude: [
            "node_modules",
            ".meteor"
        ]
    },
    sourceType: "module"
}
