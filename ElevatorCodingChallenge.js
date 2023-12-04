import simulateElevator from "./elevator.js";

const args = process.argv.slice(2);

let result = simulateElevator(args);
console.log(result);
