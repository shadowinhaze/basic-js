import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let variants = [];
  const checkStr = n.toString().split('');
  for (let i = 0; i < checkStr.length; i++) {
      let midStr = [...checkStr];
      midStr.splice(i, 1);
      variants.push(+midStr.reduce((acc,item) => acc + item, ''))
  }
  return Math.max(...variants)
}
