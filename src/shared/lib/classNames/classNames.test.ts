import { classNames } from "./classNames";

describe("classNames", () => {
  test("without args", () => {
    expect(classNames()).toBe("");
  });
  test("only with first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with class and object params", () => {
    const expected = "someClass1 someClass2 someClass3";
    expect(
      classNames("someClass1", {
        someClass2: true,
        someClass3: true,
        someClass4: false,
      })
    ).toBe(expected);
  });
  test("with only second param", () => {
    expect(classNames("", { someClass: true })).toBe("someClass");
  });
  test("with only second param but his with falsy", () => {
    expect(classNames("", { someClass: false })).toBe("");
  });
  test("with all params", () => {
    const expected = "someClass1 someClass2 someClass4";
    expect(classNames("someClass1", {someClass2: true, someClass3: false}, ['someClass4'])).toBe(expected);
  });
  test('with only third param', () => {
    expect(classNames('', {}, ['someClass'])).toBe('someClass');
  });
  test('with only third param but second params with falsy', () => {
    expect(classNames('', {someClass: false}, ["someClass2"])).toBe('someClass2');
  });
  test('with undefined param', () => {
    expect(classNames(undefined)).toBe('');
  })
});
