# Elevator Simulation

## Overview

This project simulates the movement of an elevator based on a provided list of floors to visit. The simulation calculates the total travel time and the sequence of floors visited in order.

## Assumptions

Please note the following assumptions made in the implementation:

- The height of the building is assumed to be greater than the given floors.
- There are no floors below 0.
- If repeat floors are given, the elevator does not add to distance traveled, but does keep the duplicate floor visited in the array

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/elevator-simulation.git
   ```

   Navigate to the project directory:

   ```bash
    cd elevator-simulation
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

    bash

    560 12,2,9,1,32

Constants

    SINGLE_FLOOR_TRAVEL_TIME: The constant representing the time (in seconds) it takes for the elevator to travel between two consecutive floors. Currently set to 10 seconds.

Notes

    If the input includes non-integer values, the program will exit with an error message: "Arguments must be integers."

License

This project is licensed under the MIT License.
