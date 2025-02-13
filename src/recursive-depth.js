import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


export default class DepthCalculator {
  // My not working solution

  constructor() {
    this.counter = 1;
  }

  calculateDepth(arr) {
      let midArr = [...arr];
      if (this.checkArray(midArr) && this.hasArray(midArr)) {
          midArr = midArr.flat();
          this.counter += 1;
          this.calculateDepth(midArr)
      } else {
          this.savedCounter = this.counter;
      }
      return this.showResult()
  }

  checkArray(arr) {
      return (Array.isArray(arr)) ? true : false;
  }

  hasArray(arr) {
      return (arr.some(el => this.checkArray(el))) ? true : false;
  }

  showResult() {
      this.counter = 1;
      return this.savedCounter;
  }

  // The second solution
  // calculateDepth(arr) {
  //   let counter = 1;
  //   if (arr.some(el => Array.isArray(el))) {
  //     const midArr = arr.reduce((acc, item) => acc.concat(item), []);
  //     return counter + this.calculateDepth(midArr);
  //   }
  //   return counter;
  // }
}
