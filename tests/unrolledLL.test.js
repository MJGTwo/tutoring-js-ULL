import { UnrolledLL } from "../src/unrolledLinkedList.js";
import { ARRAYSIZE } from "../src/constants.js";

describe("the #list class suite:", () => {
  const list = new UnrolledLL();

  test("add values to the list", () => {
    for (let i = 0; i < ARRAYSIZE; i++) {
      list.push_back(i);
    }

    expect(list.size).toBe(ARRAYSIZE);
    expect(list.length).toBe(1);
  });

  test("add more values", () => {
    for (let i = 0; i < ARRAYSIZE * 3; i++) {
      list.push_back(i + ARRAYSIZE);
    }

    expect(list.size).toBe(ARRAYSIZE * 4);
    expect(list.length).toBe(4);
  });

  test.skip("remove values while keeping order", () => {
    const list2 = new UnrolledLL();
    for (let i = 0; i < ARRAYSIZE * 4; i++) {
      list.push_back(1 + i);
    }

    //modify the list to remove all even numbers, as well as multiples of 5.

    const values = list2.toArray();
    expect(values).toBe([1, 3, 7, 9, 11, 13, 17, 19]);
    expect(list2.length).toBe(4);
  });
});
