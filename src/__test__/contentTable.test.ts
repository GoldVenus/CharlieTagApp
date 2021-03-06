import "jest";
import init from "../jooks";

describe("Testing Jooks wrapper", () => {
  const jooks = init((args: any) => args.val);

  it("It should pass arguments to hooks", () => {
    expect(jooks.run({ val: "foo" })).toEqual("foo");
  });

  it("It should pass arguments on later renders, too", async () => {
    expect(jooks.run({ val: "bar" })).toEqual("bar");
    await jooks.wait(); // This throws if argument not passed
  });
});
