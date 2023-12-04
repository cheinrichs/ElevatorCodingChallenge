import simulateElevator from "../elevator.js";

describe("Elevator functionality", () => {
  test("it should correctly move the elevator", () => {
    // Inputs: [list of floors to visit] (e.g. elevator start=12 floor=2,9,1,32)
    // Outputs: [total travel time, floors visited in order] (e.g. 560 12,2,9,1,32)
    const input = [12, 2, 9, 1, 32];
    const expected = [560, 12, 2, 9, 1, 32];
    const actual = simulateElevator(input);

    expect(actual).toEqual(expected);
  });
});
