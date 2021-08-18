import { Node } from "../src/node.js";
import { Iterator } from "../src/iterator.js";
import { ARRAYSIZE } from "../src/constants.js";

describe("the #iterator class suite:", () => {
  const iterator = new Iterator();

  test("Created and assigned to a node", () => {
    iterator.setPointer(new Node());

    expect(iterator.pointer instanceof Node).toBe(true);
    expect(iterator.index).toBe(0);
  });

  test("show the node has no values in it", () => {
    let currItr = Iterator.copy(iterator);
    let undefinedValueCount = 0;
    while (currItr.pointer !== null) {
      if (currItr.pointer.getValue(currItr.index) === undefined)
        undefinedValueCount++;
      currItr.preIncrement();
    }
    expect(undefinedValueCount).toBe(ARRAYSIZE);
  });

  test("then fill it with values", () => {
    iterator.setPointer(new Node());
    let currItr;
    while (iterator.pointer !== null) {
      currItr = iterator.postIncrement();
      currItr.pointer.insert(currItr.index, currItr.index);
    }

    currItr.setIndex(0);
    iterator.setIterator(currItr.pointer, currItr.index);
    expect(currItr.pointer.length).toBe(ARRAYSIZE);
  });

  test.skip("remove the middle element", () => {
    //do stuff here

    expect(iterator.postDecrement.length).toBe(ARRAYSIZE - 1);
  });
});
