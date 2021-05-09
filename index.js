const {pipeline} = require('stream');
const config = require("./config_from_Args.js");
let readStream = require('./input.js');
let writeStream = require('./output.js');
let transform = require('./transform.js');

setTimeout( () => {
  let input = config.inputFile ? readStream(config.inputFile) : process.stdin;
  let output = config.outputFile ? writeStream(config.outputFile) : process.stdout;
  pipeline(
    input,
    transform,
    output,
     (err) => {
      if (err) {
        console.log(err);
        process.exit(500);
      }
      console.log('done');
    }
  )
},10);
