import { Node } from "./node.js";
import { Iterator } from "./iterator.js";

/**
 * @class UnrolledLL
 */
export class UnrolledLL {
  #head;
  #tail;
  #iterator;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#iterator = new Iterator(this.#head);
  }

  // /**
  //  * built in function to print the node value
  //  * @public
  //  * @returns {string}
  //  */
  // [util.inspect.custom](depth, opts) {
  //   return "node: " + this.#values;
  // }

  /**
   * Traverses the list from beginning to end.
   * @public
   * @param {function} cb
   */
  forEach(cb) {
    //define
  }

  /**
   * Converts the list into an array
   * @public
   * @returns {Array<string|number>}
   */
  toArray() {
    //define
  }

  /**
   * returns the number of values in the unrolled linked list
   * @public
   * @returns {number}
   */
  get size() {
    //define
  }

  /**
   * returns the number of nodes in the unrolled linked list
   * @public
   * @returns {number}
   */
  get length() {
    //define
  }

  /**
   * returns true if the list is empty;
   * @public
   * @returns {boolean}
   */
  get empty() {
    //define
  }
  /**
   * returns a copy of the unrolled linked list
   * @public
   * @returns {UnrolledLL}
   */
  copy() {
    //define
  }
  /**
   * clears the list of all nodes and returns self
   * @public
   * @returns {UnrolledLL}
   */
  clear() {
    //define
  }
  /**
   * returns the head node;
   * @public
   * @returns {Node}
   */
  get head() {
    //define
  }
  /**
   * returns the tail node;
   * @public
   * @returns {Node}
   */
  get tail() {
    //define
  }
  /**
   * inserts an element at the start of the list and returns the node
   * @public
   * @param {number|string} value
   * @returns {Node}
   */
  push_front(value) {
    //define
  }
  /**
   * inserts an element at the end of the list and returns the node
   * @public
   * @param {number|string} value
   * @returns {Node}
   */
  push_back(value) {
    //define
  }

  /**
   * Remove an elements fromt he start of the list
   * @public
   * @returns {number|string}
   */
  pop_front() {
    //define
  }

  /**
   * Remove an elements at the end of the list
   * @public
   * @returns {number|string}
   */
  pop_back() {
    //define
  }

  /**
   * Remove an elements at a given index and returns it
   * @public
   * @param {number} index
   * @returns {number|string}
   */
  erase(index) {
    //define
  }

  /**
   * insert a value at a certain index and the node
   * @public
   * @param {number} index
   * @param {number|string} value
   * @returns {Node}
   */
  insert(index, value) {
    //define
  }
}
