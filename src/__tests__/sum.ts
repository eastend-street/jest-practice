import { sum } from "../functions/sum";

// 1. 1st param => title, 2nd param is callback function
it("sum function works fine", () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(-1, 4)).toEqual(3);
  expect(sum(undefined, 4)).toEqual("user did not send correct input");
});
