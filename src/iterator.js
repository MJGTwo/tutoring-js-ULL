import util, { inspect } from "util";
import { ARRAYSIZE } from "./constants.js";

/**
 * @class Iterator
 */
export class Iterator {
  #pointer;
  #index;

  constructor(node = null) {
    this.#pointer = node;
    this.#index = 0;
  }
  [util.inspect.custom](depth, opts) {
    if (this.#pointer !== null) {
      return "ptr: " + `${this.#pointer.toArray}` + "\nidx: " + this.#index;
    } else {
      return null;
    }
  }

  /**
   * returns a copy of the iterator instance
   * @public
   * @param {Iterator} iterator
   * @returns {Iterator}
   */
  static copy(iterator) {
    //define
  }

  /**
   * returns the pointer to the node of the iterator
   * @public
   * @returns {Node}
   */
  get pointer() {
    //define
  }

  /**
   * returns the index that the iterator is located at
   * @public
   * @returns {number}
   */
  get index() {
    //define
  }

  /**
   * updates the index of the iterator and returns itself
   * @public
   * @param {number} index
   * @returns {Iterator}
   */
  setIndex(index) {
    //define
  }

  /**
   * updates the pointer, sets the index to zero, and returns itself
   * @public
   * @param {Node} pointer
   * @returns {Iterator}
   */
  setPointer(pointer) {
    //define
  }

  /**
   * updates
   * @public
   * @param {Node} pointer
   * @param {number} index
   * @returns {Iterator}
   */
  setIterator(pointer, index) {
    //define
  }

  /**
   * increments the iterator to the next location and returns the iterator
   * @public
   * @returns {Iterator}
   */
  preIncrement() {
    // ++itr
    //define
  }
  /**
   * increments the iterator to the next location and returns the iterator *prior to incrementation*
   * @public
   * @returns {Iterator}
   */
  postIncrement() {
    // itr++
    //define
  }

  /**
   * decrements the iterator to the previous location and returns the iterator
   * @public
   * @returns {Iterator}
   */
  preDecrement() {
    // --itr
    //define
  }

  /**
   * decrements the iterator to the previous location and returns the iterator *prior to incrementation*
   * @public
   * @returns {Iterator}
   */
  postDecrement() {
    // itr--
    //define
  }

  /**
   * returns true if the iterator's pointer and index are the same as another
   * @public
   * @returns {Iterator}
   */
  equals(other) {
    //define
  }

  /**
   * returns true if the iterator's pointer and index are not the same as another
   * @public
   * @returns {Iterator}
   */
  notEquals(other) {
    //define
  }

  /**
   * clears the iterator and returns itself
   * @public
   * @returns {Iterator}
   */
  clear() {
    //define
  }
}
