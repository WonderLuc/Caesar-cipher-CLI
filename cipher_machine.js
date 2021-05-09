const config = require('./config_from_Args.js');

function findOffset (currOffset) {
  if (currOffset >= 0 && currOffset < 26){
    return currOffset;
  }
  if (currOffset >= 26) {
    return findOffset(currOffset % 26);
  }
  if (currOffset < 0) {
    return findOffset(currOffset % 26 + 26);
  }
}

function isLetter(letter) {
  return /[A-Za-z]/.test(letter);
}

function cipher(data, action) {
  offset = findOffset(config.shift);
  offset = action === 'encode'? offset : -offset;
  let dataArr = data.split('');
  let newArr = dataArr.map(letter => {
    if (!isLetter(letter)) {
      return letter;
    }
    let isLower = /[a-z]/.test(letter);
    letter = letter.toUpperCase();
    let letterCode = (letter.charCodeAt(0) - 65 + offset) % 26 + 65;
    if (letterCode < 65) {
      letterCode = (letterCode - 65) % 26 + 65 +26;
    }
    
    letter = String.fromCharCode(letterCode);
    return isLower? letter.toLowerCase() : letter;
  });
  return newArr.join('');
}

module.exports = cipher;