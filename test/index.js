const assert = require('assert');

const lib = require('../lib');

let test;
let expected;

test = lib.getMissingLetters('A quick brown ', 'fox jumps over the lazy dog');
expected = '';
assert.equal(test, expected, 'match');

test = lib.getMissingLetters('A slow yellow fox crawls under the proactive dog');
expected = 'bjkmqz';
assert.equal(test, expected, 'match');

test = lib.getMissingLetters('Lions, and tigers, and bears, oh my!');
expected = 'cfjkpquvwxz';
assert.equal(test, expected, 'match');

test = lib.getMissingLetters('');
expected = 'abcdefghijklmnopqrstuvwxyz';
assert.equal(test, expected, 'match');

test = lib.getMissingLetters('!@#$', ')(*&');
expected = 'abcdefghijklmnopqrstuvwxyz';
assert.equal(test, expected, 'match');

test = lib.getMissingLetters('I ♡ JavaScript!');
expected = 'bdefghklmnoquwxyz';
assert.equal(test, expected, 'match');

console.log('Testing success');
