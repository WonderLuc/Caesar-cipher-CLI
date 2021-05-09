const fs = require('fs');

function readStream(path){
  let newReadStream = fs.createReadStream(path);
  return newReadStream;
}

module.exports = readStream;
