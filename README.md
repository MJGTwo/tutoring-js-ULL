# Unrolled Linked List

## Introduction

Linked Lists are an important foundation to data structures due to the array of examples contained inside of them. In this exercise, we will go into a variation on the linked list, known as a Unrolled Linked List. An Unrolled Linked List (ULL) consists of two data structures: a node, and the list containing the node data structure. The core difference between a ULL and a standard linked-list lies within the Node Class, which contains an array of values and a variable saying how many elements are in that array. Below is a diagram of a ULL that is 3 nodes long and contains, in order, arrays of 3, 2 and 3, length.

![an unrolled linked list, containing three nodes. Each node can have 4 elements and the 3 nodes have the following elements: 1-3, 4-5, and 6-8](./assets/Unrolled_linked_lists.png)

## First Exercise Set

In this first problem set, we will build our ULL data structure with the requirement laid out within the assignment. Remember that one could start their data structure as the following:

```javascript
class Node {
  constructor(elements) {
    this.elements = elements;
    this.numElements = elemenets.length || 0;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
}
```

However, we will be doing a slightly different approach as outlined below. A useful class to add into this to assist your creation of the unrolled linked list is a dedicated iterator class.

```javascript
class Iterator {
  constructor(node) {
    this.pointer = node;
    this.index = 0;
  }
}
```

This class will be incredibly useful for later on for traversal through an array inside of the node while appearing like you are going through a standard list.

### Define the Node Class

Given the following Class definition in JavaScript, define the member functions which contain the word

```javascript
//define
```

for the class Node. While doing this, remember to focus on the ability to make the Node class's methods do the work for you for when you start to use them inside of the list.

```javascript
import util, { inspect } from "util";
export const ARRAYSIZE = 5;

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
```

### Define the Iterator Class

Given the following Class definition in JavaScript, define the member functions which contain the word

```javascript
//define
```

for the class Iterator. Remember to use the member functions of the Node class.

```javascript
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
```

### Define the Unrolled Linked List Class

Given the following Class definition in JavaScript, define the member functions which contain the word

```javascript
//define
```

for the class Unrolled Linked List. Remember to use the member functions of the Node class and the Iterator class.

```javascript
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
```

## Second Exercise Set

The following exercises are meant to understand how to use unrolled linked-lists in the real world based on our knowledge of how a linked-list works; which we have mastered in the previous exercise set.

### Cache Balancing

Write a new member function called

```javascript
balanceCache();
```

which

1. evaluates the current number of elements inside the Unrolled Linked List against the size limit of the internal array of the nodes

2. determine if the ratio is above 1:2 of elements to total space
3. determine if there are unused nodes

4. add/subtract nodes and redistributes the elements to the nodes if steps 2 or 3 are true to reduce the ratio below 1:2 and remove all empty nodes.

Also: don't make a new list!

```javascript
list; // [1,2],[3,4],[5,6],[],[7],[8,9,10,11],[12],[13,14,15,16]
// 8 nodes, 1 empty, 16 elements. 8 * 5 = 40. 16:40 < 1:2 === 2:5 < 1:2
list.balanceCache();

list; // [1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16]
// 6 nodes 0 empty, 16 elements. 6 * 5 = 30. 16:30 < 1:2 === 2:5 < 1:2
```

### Cache Resizing

Write a function called

```javascript
resizeCache((size = 5));
```

to resize the cache size on all nodes and then balance the caches to fit the new limits of the cache size. Before you tackle this, make sure to change the global constant that has been set for the assignment to not be a constant anymore.

```javascript
list; // [1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16]
// 6 nodes 0 empty, 16 elements. 6 * 5 = 30. 16:30 < 1:2 === 2:5 < 1:2
//same one that we finished balancing.

list.resizeCache(8);

list; // [1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]
// 4 nodes 0 empty, 16 elements. 4 * 8 = 32. 16:32 === 1:2
```
