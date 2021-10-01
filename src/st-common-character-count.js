import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1,s2) {
  function encoder(str) {
    let code = {};
    [...str].forEach(letter => {
        if (code.hasOwnProperty(letter)) {
            code[letter] += 1;
        } else {
            code[letter] = 1;
        }
    })
    return Object.entries(code)
  }
  let counter = 0;
  encoder(s1).forEach(letterBlock1 => {
      encoder(s2).forEach(letterBlock2 => {
          if (letterBlock1[0] === letterBlock2[0]) {
              counter += Math.min(letterBlock1[1], letterBlock2[1])
          }
      })
  })
  return counter;
}
