const path = require("path");

module.exports = {
    entry: {
        main: "./index.js"
    },
    mode: 'production',
    module: {
        rules: []
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js"
    }
};