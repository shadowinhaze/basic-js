import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      if (arguments.length === 0) {
          this.chain.push(' ');
      } else {
          this.chain.push(value);
      }
      return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
    const result = this.chain.map(item => (item === ' ') ? `(${item})` : `( ${item} )`).join('~~');
    this.chain = [];
    return result;
  }
};
