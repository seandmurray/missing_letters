const lib = require('./lib');
const args = process.argv.slice(2).join('');
const missingLetters = lib.getMissingLetters(args);
console.log(missingLetters);
