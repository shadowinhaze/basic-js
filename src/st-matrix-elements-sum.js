import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let columns = [];
  for (let i = 0; i < matrix[0].length; i++) {
      columns.push(matrix.map(row => row[i]))
  }
  let midSum = 0;
  columns.forEach(col => {
    if (col.includes(0)) {
      col.splice(col.indexOf(0))
    }
      midSum += col.reduce((acc, item) => acc + item, 0);
  })
  return midSum;
}
