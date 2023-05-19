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

    // Check that xCoordinate and yCoordinate are valid and within the boundaries of the grid
    if (
      xAxis === undefined ||
      yAxis === undefined ||
      xAxis < 0 ||
      xAxis > 9 ||
      yAxis < 0 ||
      yAxis > 9
    ) {
      throw new Error("Coordinates are outside the grid");
    }

    // For horizontal orientation, check that the ship doesn't extend beyond the right edge of the grid
    if (orientation === "horizontal" && xAxis + ship.shipLength > 10) {
      throw new Error("Ship extends beyond grid boundaries");

      // For vertical orientation, check that the ship doesn't extend beyond the bottom edge of the grid
    } else if (orientation === "vertical" && yAxis + ship.shipLength > 10) {
      throw new Error("Ship extends beyond grid boundaries");
    }

    if (orientation === "horizontal") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (grid[yAxis][xAxis + i] != null) {
          // ensures ship is placed within the grid parameters
          throw new Error("Invalid Ship Placement");
        }
        grid[yAxis][xAxis + i] = {
          ship: ship,
          start: [xAxis, yAxis],
          orientation: orientation,
        };
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (grid[yAxis + i][xAxis] != null) {
          // ensures ship is placed within the grid parameters
          throw new Error("Invalid Ship Placement");
        }
        grid[yAxis + i][xAxis] = {
          ship: ship,
          start: [xAxis, yAxis],
          orientation: orientation,
        };
      }
    } else {
      throw new Error("Invalid Orientation");
    }
  };

  const receiveAttack = (xCoordinate, yCoordinate) => {
    let xAxis = xAxisMapping[xCoordinate];
    let yAxis = yCoordinate - 1; // since 1 based, we need 0 base for js array since xAxis map started with 0 instead of 1
    let target = grid[yAxis][xAxis]; // Check if a ship exists at the given coordinates

    // Check that xCoordinate and yCoordinate are within the boundaries of the grid
    if (xAxis < 0 || xAxis > 9 || yAxis < 0 || yAxis > 9) {
      throw new Error("Coordinates are outside the grid");
    }

    // if string its been targeted as a hit or miss already
    if (typeof target === "string") {
      throw new Error("This cell has already been attacked");
    }

    if (target) {
      let position;
      if (target.orientation === "horizontal") {
        position = xAxis - target.start[0];
      } else {
        position = yAxis - target.start[1];
      }
      target.ship.hit(position);
      grid[yAxis][xAxis] = "Hit";
    } else {
      grid[yAxis][xAxis] = "Missed";
    }
  };

  const shipStatus = (ships) =>
    ships.map((ship) => ({
      shipName: ship.shipName,
      isSunk: ship.isSunk(),
    }));

    const getBoardState = () => grid;

  return {
    placeShips,
    receiveAttack,
    shipStatus,
    getBoardState,
  };
};
