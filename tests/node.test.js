import { Node } from "../src/node.js";
import { ARRAYSIZE } from "../src/constants.js";

describe("Creating the #node class", () => {
  const node = new Node();
  test(` and add ${ARRAYSIZE} elements to it`, () => {
    for (let i = 0; i < ARRAYSIZE; i++) {
      node.push(i);
    }
    expect(node.length).toBe(ARRAYSIZE);
  });
  test(` and then delete 2 elements from it`, () => {
    for (let i = 0; i < 2; i++) {
      node.erase(2);
    }
    expect(node.length).toBe(ARRAYSIZE - 2);
  });
  test(` and finally attempt to add 3 elements and fail on the 3rd`, () => {
    for (let i = 0; i < 2; i++) {
      node.insert(0);
    }
    expect(() => node.insert(0)).toThrow(`the array is at capacity: `);
  });
});

describe("Create #node children suite:", () => {
  const node = new Node();
  node.insert(5);
  test(` check for children and return false`, () => {
    expect(node.hasNext()).toBe(false);
    expect(node.hasPrev()).toBe(false);
  });
  test(` then add 2 nodes and verify their attachment`, () => {
    const next = new Node();
    const prev = new Node();
    next.insert(6);
    prev.insert(4);
    node.setNext(next);
    node.setPrev(prev);

    expect(node.hasNext()).toBe(true);
    expect(node.hasPrev()).toBe(true);
    expect(node.next).toBe(next);
    expect(node.prev).toBe(prev);
  });

  test.skip(` and make a cycle #broken`, () => {
    //fill in this test to make it work

    expect(node.next.next.next).toBe(node);
  });
  test(" and break the cycle", () => {
    node.setNext(null);
    node.setPrev(null);
    expect(node.hasNext()).toBe(false);
    expect(node.hasPrev()).toBe(false);
  });
});
