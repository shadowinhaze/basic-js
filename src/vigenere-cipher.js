import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(...args) {
    if (args.includes(false)) {
      this.toRevert = true;
    } else {
      this.toRevert = false;
    }
  }

  isUpperCase(letter) {
      const l = letter.charCodeAt();
      return (l > 64 && l < 91) ? true : false;
  }
  
  isLowerCase(letter) {
      const l = letter.charCodeAt();
      return (l > 96 && l < 123) ? true : false;
  }
  
  isLetter(letter) {
      return (isLowerCase(letter) || isUpperCase(letter)) ? true : false;
  }

  isValidArgumetns(args) {
      if (args.length !== 2 || typeof args[0] !== 'string' || typeof args[1] !== 'string') {
          throw new Error('Incorrect arguments!');
      }
  }
  
  mod(n, m) {
      return ((n % m ) + m) % m;
  }
  
  encrypt(str, key) {
      this.isValidArgumetns(arguments);
      let encrypted = '';
      let j = 0;
      const A = 65;
      const a = 97;
      for (let i = 0; i < str.length; i++) {
          if(this.isUpperCase(str[i])) {
              let Pi = (str[i].charCodeAt(0) - A);
              let Ki = (key[j % key.length].toUpperCase().charCodeAt() - A);
              encrypted += String.fromCharCode(this.mod(Pi + Ki, 26) + A);
              j++;
  
          } else if (this.isLowerCase(str[i])) {
              let Pi = (str[i].charCodeAt() - a);
              let Ki = (key[j % key.length].toLowerCase().charCodeAt() - a);
              encrypted += String.fromCharCode(this.mod(Pi + Ki, 26) + a);
              j++;
          } else {
              encrypted += str[i];
          }
      }
    
      return this.revert(encrypted);
  }

  decrypt(str, key) {
      this.isValidArgumetns(arguments);
      let decrypted = '';
      let j = 0;
      const A = 65;
      const a = 97;
      for (let i = 0; i < str.length; i++) {
          if(this.isUpperCase(str[i])) {
              let Ci = (str[i].charCodeAt(0) - A);
              let Ki = (key[j % key.length].toUpperCase()).charCodeAt() - A;
              decrypted += String.fromCharCode(this.mod(Ci - Ki, 26) + A);
              j++;
          } else if (this.isLowerCase(str[i])) {
              let Ci = (str[i].charCodeAt(0) - a);
              let Ki = (key[j % key.length].toLowerCase()).charCodeAt() - a;
              decrypted += String.fromCharCode(this.mod(Ci - Ki, 26) + a);
              j++;
          } else {
              decrypted += str[i];
          }
      } 
    
      return this.revert(decrypted);
  }

  revert(str) {
    if (this.toRevert) {
      return str.split('').reverse().join('').toUpperCase();
    } else {
      return str.toUpperCase();
    }
  }
}
