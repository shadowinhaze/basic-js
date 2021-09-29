import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (arguments.length == 0) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  }
  catch(err) {
    throw new Error('Invalid date!');
  }
  const seasons = {
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn (fall)': [8, 9, 10],
    'winter': [11, 0, 1]
  };
  for (let seas in seasons) {
    if (seasons[seas].includes(date.getMonth())) return seas;
  }
}
