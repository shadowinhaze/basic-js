import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  // let newArr = arr.splice();

  // newArr.forEach((item, index, array) => {
  //     if (typeof item === 'string') {
  //         if (array.includes('--discard-next') && array.includes('--double-prev')) {
  //             return newArr.splice(index,3)
  //         }
  //         if (array.includes('--discard-next') && array.includes('--discard-prev')) {
  //             return newArr.splice(index,3)
  //         }
  //         if (item.includes('prev') && index == 0) {
  //             return newArr.splice(0,1)
  //         }
  //         if (item.includes('next') && index == array.length - 1) {
  //             return newArr.splice(index,1)
  //         }
  //         if (item.includes('double-next')) {
  //             return newArr.splice(index, 1, array[index+1])
  //         }
  //         if (item.includes('double-prev')) {
  //             return newArr.splice(index, 1, array[index-1])
  //         }
  //         if (item.includes('discard-next')) {
  //             return newArr.splice(index, 2)
  //         }
  //         if (item.includes('discard-prev')) {
  //             return newArr.splice(index-1, 2)
  //         }
  //     }
  // })

  // return newArr;
}
