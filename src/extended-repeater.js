import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let addititonStr = '';
  const opts = Object.keys(options);
  const separator = (options.separator) ? options.separator : '+';
  
  if (options.addition) options.addition = (options.addition === null) ? 'null' : options.addition + '';
  
  switch (true) {
    case opts.includes('addition') && opts.includes('additionRepeatTimes') && opts.includes('additionSeparator'):
      addititonStr = Array(options.additionRepeatTimes).fill(options.addition + '').join(options.additionSeparator);
      break;
    case opts.includes('addition') && opts.includes('additionRepeatTimes'):
      addititonStr = Array(options.additionRepeatTimes).fill(options.addition + '').join('|');
      break;
    case opts.includes('addition'):
      addititonStr = options.addition + '';
      break;
  }
  
  return Array(options.repeatTimes).fill('' + str + addititonStr).join(separator);
}
