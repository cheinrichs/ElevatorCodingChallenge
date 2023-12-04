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
      throw new TypeError("Arguments must be positive integers");
    }
    parsedFloors.push(parsed);
  });

  let floorsTraveled = [];

  let travelTime = 0;

  let previousFloor;
  parsedFloors.forEach((currentFloor) => {
    if (currentFloor === previousFloor) {
      return;
    }
    floorsTraveled.push(currentFloor);
    if (!previousFloor) {
      previousFloor = currentFloor;
      return;
    }

    travelTime += Math.abs(currentFloor - previousFloor);

    previousFloor = currentFloor;
  });

  floorsTraveled.unshift(travelTime * SINGLE_FLOOR_TRAVEL_TIME);
  return floorsTraveled;
}
export default simulateElevator;
