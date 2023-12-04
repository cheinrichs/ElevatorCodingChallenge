# Elevator Simulation

## Overview

This project simulates the movement of an elevator based on a provided list of floors to visit. The simulation calculates the total travel time and the sequence of floors visited in order.

## Assumptions

Please note the following assumptions made in the implementation:

- The height of the building is assumed to be greater than the given floors.
- There are no floors below 0.
- If repeat floors are given, the elevator does not add to distance traveled, and does not report visiting the floor multiple times.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:cheinrichs/ElevatorCodingChallenge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ElevatorCodingChallenge
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running the simulation

Use node to call the script with valid arguments

```bash
node ElevatorCodingChallenge (list of floors to visit separated by spaces)
```

Example:

```bash
node ElevatorCodingChallenge 12 2 9 9 9 1 32
```

## Output:

The output array contains two elements: Total travel time (in seconds) and Sequence of floors visited in order.

Example output:

```
[560 [12,2,9,1,32]]
```

## Running tests:

From the `ElevatorCodingChallenge` parent directory:

```bash
npm test
```

    Or view the Jest action in the github actions tab of the repository

## Constants

    SINGLE_FLOOR_TRAVEL_TIME: The constant representing the time (in seconds) it takes for the elevator to travel between two consecutive floors. Currently set to 10 seconds.

## Error Handling

- **Non-Integer Values:**
  If any of the input values are not valid integers, the function throws a `TypeError` with the message "Arguments must be integers."

- **Values Less Than 1:**
  If any floor value is less than 1, the function throws a `TypeError` with the message "Arguments must be positive integers."

- **Duplicate Floors:**
  If repeat floors are provided, the elevator does not add to the distance traveled, and the duplicated floor is not reported.

- **Other Scenarios:**
  The function ensures that the height of the building is greater than the given floors and that there are no floors below 0.

## Future Enhancements

While working on this project I thought of other potential enhancements.

1. I'd like to add a visual component to this script, especially since my background is in React. I didn't have sufficient time to accomplish that in this challenge.

1. I'd like to account for the height of the given building. I imagine this information could be stored in a configuration file. Hypothetically, the program could retrieve this data at startup and enforce the height limit on the provided input, preventing the elevator from going too high or too low.

1. It would be interesting to see how this would change with multiple elevators. Adding a command line argument to determine the number of elevators would add a lot of complexity.

1. Some elevators have special floors that are only accessiible by certain people, and that could be taken into account.
