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
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
    let newArr = [...arr].flatMap((item, i, aR) => {
        switch (true) {
            case (aR[i - 1] === '--double-next' && aR[i + 1] === '--double-prev'):
                return [item, item, item];
            case (aR[i - 1] === '--double-next' && aR[i + 1] === '--discard-prev'):
                return [item];
            case (aR[i + 1] === '--discard-prev'):
                 return [];
            case (aR[i - 1] === '--discard-next'):
                 return [];
            case (aR[i + 1] === '--double-prev'):
                return [item, item];
            case (aR[i - 1] === '--double-next'):
                return [item, item];
            case item.toString().startsWith('--d'):
                return [];
        }
        return item;
    });
    return newArr;
}
