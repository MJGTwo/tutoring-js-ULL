import util, { inspect } from "util";
import { ARRAYSIZE } from "./constants.js";

const capacityError = Error(
  "index is outside of array's capacity: ",
  ARRAYSIZE
);

/**
 * @class Node
 */
export class Node {
  #values = [];
  #count = 0;
  #next = null;
  #prev = null;

  constructor() {}

  /**
   * built in function to print the node value
   * @public
   * @returns {string}
   */
  [util.inspect.custom](depth, opts) {
    return "node: " + this.#values;
  }

  /**
   * inserts an element at the end of the node and returns the index of the element
   * @public
   * @param {number|string} value
   * @returns {number}
   */
  push(value) {
    //define
  }

  /**
   * rinsert an element at a given index of a node and returns the node
   * @public
   * @param {number|string} value
   * @param {number} index;
   * @returns {Node}
   */
  insert(value, index) {
    //define
  }

  /**
   * removes an element at a given index and returns the element
   * @public
   * @param {number} index
   * @returns {number}
   */
  erase(index) {
    //define
  }
  /**
   * get the number of elements in the node
   * @public
   * @returns {number}
   */
  get length() {
    //define
  }

  /**
   * returns the element at the given index
   * @public
   * @param {number} index
   * @returns {number|string}
   */
  getValue(index) {
    //define
  }
  /**
   * empties the node of all values and returns itself
   * @public
   * @returns {Node}
   */
  empty() {
    //define
  }

  /**
   * returns the value at the end of the node
   * @public
   * @returns {number|string}
   */
  pop() {
    //define
  }
  /**
   * returns the value at the start of the node
   * @public
   * @returns {number|string}
   */
  front_pop() {
    //define
  }
  /**
   * returns true if the node's next variable points to another node
   * @public
   * @returns {boolean}
   */
  hasNext() {
    //define
  }

  /**
   * takes a node and sets it as the next node of the current node, and returns itself
   * @public
   * @param {Node}
   * @returns {Node}
   */
  setNext(next) {
    //define
  }

  /**
   * returns true if the node's prev variable points to another node
   * @public
   * @returns {boolean}
   */
  hasPrev() {
    //define
  }

  /**
   * takes a node and sets it as the prev node of the current node, and returns itself
   * @public
   * @param {Node}
   * @returns {Node}
   */
  setPrev(prev) {
    //define
  }

  /**
   * returns the prev node
   * @public
   * @returns {Node}
   */
  get prev() {
    //define
  }
  /**
   * returns the next node
   * @public
   * @returns {Node}
   */
  get next() {
    //define
  }

  get toArray() {
    //define
  }
}
