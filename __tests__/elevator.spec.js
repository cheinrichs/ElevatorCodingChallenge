import simulateElevator from "../elevator.js";

describe("Elevator functionality", () => {
  test("it should correctly move the elevator based on the input in the prompt", () => {
    // Inputs: [list of floors to visit] (e.g. elevator start=12 floor=2,9,1,32)
    // Outputs: [total travel time, floors visited in order] (e.g. 560 12,2,9,1,32)
    const input = [12, 2, 9, 1, 32];
    const expected = [560, 12, 2, 9, 1, 32];
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

  test("it should correctly handle repeat floors", () => {
    const input = [2, 8, 2, 2, 8];
    const expected = [180, 2, 8, 2, 2, 8];
    const actual = simulateElevator(input);

    expect(actual).toEqual(expected);
  });

  test("it should not move the elevator if only one floor is given", () => {
    const input = [12];
    const expected = [0, 12];
    const actual = simulateElevator(input);

    expect(actual).toEqual(expected);
  });
});
