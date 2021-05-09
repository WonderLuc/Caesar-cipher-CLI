# Caesar-cipher-CLI
This tool is for encrypting data and decrypting it using the [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_ciphers)

## Installation
The project is zero-dependency, so there is not require installation except Node.js
But if you want you may use 
```bash 
npm install
```
in your console.

## Easy start
The project have a default settings. For the start just put your text in the ```input.txt``` and run 
```bash
$ npm run encode
``` 
for encode,
 OR 
 ```bash 
 $ npm run decode
 ``` 
for decode.
And then just check output.txt

## Usage
There are 4 arguments:
  1. --shift, -s
      * a shift **REQUIRED**
      * A integer that sets offset. It may be negative.
  2. --action, -a
      * an action  **REQUIRED**
      * Takes only encode or decode options.
  3. --input, -i
      * input file *optional*
      * Path to file as option.
  4. --output, -o
      * output file *optional*
      * Path to file as option.

## Details:
  * Action and the shift are required, if one of them missed - an error will be shown.
  * If the input file is missed - use stdin as an input source.
  * If the output file is missed - use stdout as an output destination.
  * If the paths to files wrong - an error will be shown.
  * If the output file is missed - output will put in the output.txt
  * Works only with the English alphabet.
  * Shift may be more than the alphabet.
  * You may change default settings. For doing this just change defualt_config.js

## Usage example: 
   1. _Default settings usage_
   ```bash
   $ npm run encode
   ```
   > input.txt
   > `This is secret. Message about "_" symbol!`
   
   > output.txt
   > `Ymnx nx xjhwjy. Rjxxflj fgtzy "_" xdrgtq!`

   ```bash
   $ npm run decode
   ```
   > input.txt
   > `Ymnx nx xjhwjy. Rjxxflj fgtzy "_" xdrgtq!`
   
   > output.txt
   > `This is secret. Message about "_" symbol!`
   2. _-a (--action)_ is **encode**
   
   ```bash
   $ node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
   ```
   > input.txt
   > `This is secret. Message about "_" symbol!`
   
   > output.txt
   > `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
   
   ```bash
   $ node index.js --action encode --shift 7 --input "./input.txt" --output "./output.txt"
   ```
   > input.txt
   > `This is secret. Message about "_" symbol!`
   
   > output.txt
   > `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
   
   2. _-a (--action)_ is **decode**  
   _Decoding encoded initial string with the same -s(--shift) number produces the initial string._
   
   ```bash
   $ node index.js --action decode --shift 7 --input "./input.txt" --output "./output.txt"
   ```
   
   > input.txt
   > `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
   
   > output.txt
   > `This is secret. Message about "_" symbol!`
   
   3. _Negative shift handling_
   
   ```bash
   $ node index.js --action encode --shift -1 --input "./input.txt" --output "./output.txt"
   ```
   
   > input.txt
   > `This is secret. Message about "_" symbol!`
   
   > output.txt
   > `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`
   
   