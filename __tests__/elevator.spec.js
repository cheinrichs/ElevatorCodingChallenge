import simulateElevator from "../elevator.js";

describe("Elevator functionality", () => {
  test("it should correctly move the elevator based on the input in the prompt", () => {
    const input = [12, 2, 9, 1, 32];
    const expected = [560, [12, 2, 9, 1, 32]];
    const actual = simulateElevator(input);

    expect(actual).toEqual(expected);
  });

  test("it should return an array of 0 if no floors are given", () => {
    const input = [];
    const expected = [0];
    const actual = simulateElevator(input);

    expect(actual).toEqual(expected);
  });

  test("it should throw an error if invalid (negative) floors are given", () => {
    const input = [2, 9, 1, -1];
    const expected = new Error("Arguments must be positive integers");

    expect(() => {
      simulateElevator(input);
    }).toThrow(expected);
  });

  test("it should throw an error if invalid (zero) floors are given", () => {
    const input = [2, 9, 1, 0];
    const expected = new Error("Arguments must be positive integers");

    expect(() => {
      simulateElevator(input);
    }).toThrow(expected);
  });

  test("it should throw an error if invalid (non-numeric) floors are given", () => {
    const input = [2, "A", 1, -1];
    const expected = new Error("Arguments must be integers");

    expect(() => {
      simulateElevator(input);
    }).toThrow(expected);
  });

  test("it should not change floors on repeat floor numbers", () => {
    const input = [2, 8, 2, 2, 8, 9, 9, 9];
    const expected = [190, [2, 8, 2, 8, 9]];
    const actual = simulateElevator(input);

    expect(actual).toEqual(expected);
  });

  test("it should not change floors on repeat floor numbers even with the first floor", () => {
    const input = [3, 3, 9, 2, 9];
    const expected = [200, [3, 9, 2, 9]];
    const actual = simulateElevator(input);

    expect(actual).toEqual(expected);
  });

  test("it should not move the elevator if only one floor is given", () => {
    const input = [12];
    const expected = [0, [12]];
    const actual = simulateElevator(input);

    expect(actual).toEqual(expected);
  });
});
