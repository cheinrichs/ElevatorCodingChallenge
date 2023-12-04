const SINGLE_FLOOR_TRAVEL_TIME = 10;

function simulateElevator(floors) {
  if (!floors || floors.length === 0) return [0];

  let parsedFloors = [];

  floors.forEach((elem) => {
    let parsed = parseInt(elem);
    if (isNaN(parsed)) {
      throw new TypeError("Arguments must be integers");
    }
    if (parsed < 1) {
      throw new Error("Arguments must be positive integers");
    }
    parsedFloors.push(parseInt(elem));
  });

  const firstFloor = parsedFloors[0];

  let travelTime = 0;

  let currentFloor = firstFloor;
  parsedFloors.forEach((floor) => {
    let traveled = 0;
    if (floor === currentFloor) {
      return;
    }
    traveled = Math.abs(floor - currentFloor);
    travelTime += traveled;

    currentFloor = floor;
  });

  parsedFloors.unshift(travelTime * SINGLE_FLOOR_TRAVEL_TIME);
  return parsedFloors;
}
export default simulateElevator;
