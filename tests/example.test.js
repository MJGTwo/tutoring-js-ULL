import { greeter } from "../src";

describe("Dry run of tests", () => {
  test(` run the greeter function`, () => {
    const result = greeter();
    expect(result).toBe("Hello, World!");
  });
});
