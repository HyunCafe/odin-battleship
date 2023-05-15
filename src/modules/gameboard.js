"use strict";

export const gameBoard = () => {
  const grid = new Array(10).fill(null).map(() => new Array(10).fill(null));
  const xAxisMapping = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
  };

  const placeShips = (ship, xCoordinate, yCoordinate, orientation) => {
    let xAxis = xAxisMapping[xCoordinate];
    let yAxis = yCoordinate - 1; // since 1 based, we need 0 base for js array since xAxis map started with 0 instead of 1

  // Check that xCoordinate and yCoordinate are within the boundaries of the grid
  if (xAxis < 0 || xAxis > 9 || yAxis < 0 || yAxis > 9) {
    throw new Error("Coordinates are outside the grid");
  }

    if (orientation === "horizontal") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (grid[yAxis][xAxis + i] != null) {
          // ensures ship is placed within the grid parameters
          throw new Error("Invalid Ship Placement");
        }
        grid[yAxis][xAxis + i] = "X"; // Placeholder value for now
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (grid[yAxis + i][xAxis] != null) {
          // ensures ship is placed within the grid parameters
          throw new Error("Invalid Ship Placement");
        }
        grid[yAxis + i][xAxis] = "X"; // Placeholder value for now
      }
    } else {
      throw new Error("Invalid Orientation");
    }
  };

  const receiveAttack = (xCoordinate, yCoordinate, ships) => {};

  const missedAttacks = (xCoordinate, yCoordinate) => {};

  const shipStatus = (ships) => {
    return ships.map((ship) => {
      return {
        shipName: ship.shipName,
        isSunk: ship.isSunk(),
      };
    });
  };
};
