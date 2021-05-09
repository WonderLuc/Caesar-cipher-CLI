const fs = require('fs');

function writeStream(path){
  let newWriteStream = fs.createWriteStream(path, {flags: 'a'});
  newWriteStream.once('open' , () => {
    newWriteStream.write('\r\n');
  })
  return newWriteStream;
}

module.exports = writeStream;