import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let indexOfException = [];
  arr.forEach(( item, index ) => {
      if (item === -1) {
      indexOfException.push(index)
      }
  })
  arr.sort((a, b) => a - b);
  
  for (let i = indexOfException.length - 1; i >= 0; i--) {
      arr.splice(arr.indexOf(-1), 1);
      arr.splice(indexOfException[i], 0, -1);
  }
  return arr
}
