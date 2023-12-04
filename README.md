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
   git clone https://github.com/your-username/elevator-simulation.git
   ```

   Navigate to the project directory:

   ```bash
   cd elevator-simulation
   ```

   Install dependencies:

   ```bash
   npm install
   ```

   Run the simulation:

   ```bash
   node elevatorSimulator.js [list of floors to visit]
   ```

   Example:

   ```bash
   node elevatorSimulator.js 12 2 9 1 32
   ```

Output:

The output array contains two elements:

    Total travel time (in seconds).

    Sequence of floors visited in order.

    Example output:

    ```bash
    560 12,2,9,1,32
    ```

Constants

    SINGLE_FLOOR_TRAVEL_TIME: The constant representing the time (in seconds) it takes for the elevator to travel between two consecutive floors. Currently set to 10 seconds.

Error Handling

- **Non-Integer Values:**
  If any of the input values are not valid integers, the function throws a `TypeError` with the message "Arguments must be integers."

- **Values Less Than 1:**
  If any floor value is less than 1, the function throws a `TypeError` with the message "Arguments must be positive integers."

- **Duplicate Floors:**
  If repeat floors are provided, the elevator does not add to the distance traveled, and the duplicated floor is not reported.

- **Other Scenarios:**
  The function ensures that the height of the building is greater than the given floors and that there are no floors below 0.
