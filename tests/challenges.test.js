import { UnrolledLL } from "../src/unrolledLinkedList.js";
import { ARRAYSIZE } from "../src/constants.js";

describe("the #challenges from the end of the assignment", () => {
  const list = new UnrolledLL();

  //assuming ARRAYSIZE at the start is 5.
  for (let i = 1; i <= ARRAYSIZE * 8; i++) {
    list.push_back(i);
  }
  list.erase(39);

  list.erase(34);
  list.erase(33);
  list.erase(32);
  list.erase(31);

  list.erase(29);

  list.erase(24);
  list.erase(23);
  list.erase(22);
  list.erase(21);

  list.erase(19);
  list.erase(18);
  list.erase(17);
  list.erase(16);
  list.erase(15);

  list.erase(14);
  list.erase(13);
  list.erase(12);

  list.erase(9);
  list.erase(8);
  list.erase(7);

  list.erase(4);
  list.erase(3);
  list.erase(2);
  //[1,2],[6,7],[11,12],[],[21],[26,27,28,29],[31],[36,37,38,39]
  test("balance the cache", () => {
    expect(list.size).toBe(16);
    expect(list.length).toBe(8);
    console.log(list.size);

    //list.balanceCache()

    expect(list.size).toBe(16);
    expect(list.size).toBe(6);
  });

  test("resize the cache", () => {
    expect(list.size).toBe(16);
    expect(list.size).toBe(6);

    // list.resizeCache(8);

    expect(list.size).toBe(16);
    expect(list.size).toBe(4);
  });
});
