import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  return str.replace(/(.)\1*/g, ((match, p1) => {
    if (match.length == 1) {
        return p1;
    } else {
        return match.length + p1;
    }   
}))
}
