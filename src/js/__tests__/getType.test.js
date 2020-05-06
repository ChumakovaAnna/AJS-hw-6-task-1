import getType from "../getType";

describe("getType", () => {
  test("Incorrent type", () => {
    expect(() => {
      getType("Oleg");
    }).toThrow();
  });
  test("Corrent type", () => {
    const result = getType("Undead");
    expect(result).toBe("Undead");
  });
});
