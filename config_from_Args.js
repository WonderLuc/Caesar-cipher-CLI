const path = require('path');
const fs = require('fs');

let args = process.argv.slice(2);
let config = {
  action: undefined,
  shift: undefined,
  inputFile: undefined,
  outputFile: undefined
}
function parseArgs() {
  args.forEach((arg, i) => {
    if (i%2 != 0) {
      return ;
    }
    let name = arg;
    let value = args[i+1];
    if (name === '-a' || name === '--action') {
      config.action = value;
      return ;
    }
    if (name === '-s' || name === '--shift') {
      config.shift = +value;
      return ;
    }
    if (name === '-i' || name === '--input') {
      let filePath;
      try{
        filePath= path.resolve(__dirname, value);
      }catch(err){
        missingArgErr();
      }
      fs.access(filePath, (err) => {
        if (err) {
          process.stderr.write('No such file. Check a path');
          process.exit(404);
        }
        config.inputFile = filePath;
      }) 
      return ;
    }
    if (name === '-o' || name === '--output') {
      let filePath;
      try{
        filePath= path.resolve(__dirname, value);
      }catch(err){
        missingArgErr();
      }    
      fs.access(filePath, (err) => {
        if (err) {
          process.stderr.write('No such file. Check a path');
          process.exit(404);
        }
        config.outputFile = filePath;
      })
      return ;
    }
  });
}

function missingArgErr () {
  process.stderr.write('Missing Args');
  process.exit(400);
}
async function checkArgs () {
  await parseArgs();
  if (!(config.action && (typeof config.shift === 'number'))){
    missingArgErr();
  }  
}
checkArgs();

module.exports = config;