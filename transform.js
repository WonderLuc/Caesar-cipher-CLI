const {Transform} = require('stream');
let cipher = require('./cipher_machine.js');
const config = require('./config_from_Args');

let transformStream = new Transform({transform: (data, encoding, callback) => {
    data = cipher(data.toString(), config.action);
    callback(null, data);
  }
});

module.exports = transformStream;