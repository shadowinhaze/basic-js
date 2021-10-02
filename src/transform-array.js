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
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let newArr = [...arr];
  newArr.forEach((item, index, array) => {
      if (typeof item === 'string') {
          switch (true) {
              case item.includes('prev') && index == 0:
                  newArr.splice(0, 1)
                  break;
              case item.includes('next') && index == array.length - 1:
                  newArr.splice(index, 1)
                  break;
              case item.includes('--discard-next') && array.includes('--double-prev'):
                  newArr.splice(index, 3)
                  break;
              case item.includes('--discard-next') && array.includes('--discard-prev'):
                  newArr.splice(index, 3)
                  break;
              case item.includes('--double-next') && array.includes('--double-prev'):
                  newArr.splice(index, 3, array[index +1], array[index +1], array[index +1])
                  break;
              case item.includes('--double-next') && array.includes('--discard-prev'):
                  newArr.splice(index, 3, array[index +1])
                  break;
              case item.includes('double-next'):
                  newArr.splice(index, 1, array[index + 1])
                  break;
              case item.includes('double-prev'):
                  newArr.splice(index, 1, array[index - 1])
                  break;
              case item.includes('discard-next'):
                  newArr.splice(index, 2)
                  break;
              case item.includes('discard-prev'):
                  newArr.splice(index - 1, 2)
                  break;
          }
      }
  })
  return newArr;
}
