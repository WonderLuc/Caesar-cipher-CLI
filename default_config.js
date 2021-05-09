const path = require('path');

let config = {
    action: undefined,
    shift: 5,
    inputFile: path.resolve(__dirname,'./input.txt'),
    outputFile: path.resolve(__dirname, './output.txt')
}

module.exports = config;