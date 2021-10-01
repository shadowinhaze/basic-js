import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(arr) {
  let result = {}
  let midArr = [];
  arr.forEach(link => {
      midArr.push(link.split('.').reverse())
  });
  midArr.forEach(linkArr => {
      linkArr.forEach((domen, index, arr) => {
          if (index == 0) {
              if (result.hasOwnProperty('.' + domen)) {
                  result['.' + domen] += 1;
              } else {
                  result['.' + domen] = 1;
              }
          }
          if (index == 1) {
              if (result.hasOwnProperty('.' + arr[0] + '.' + domen)) {
                  result['.' + arr[0] + '.' + domen] += 1;
              } else {
                  result['.' + arr[0] + '.' + domen] = 1;
              }
          }
          if (index == 2) {
              if (result.hasOwnProperty('.' + arr.join('.'))) {
                  result['.' + arr.join('.')] += 1;
              } else {
                  result['.' + arr.join('.')] = 1;
              }
          }
      })
  })
  return result;
}
