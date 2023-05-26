"use strict";

import { createShip } from "./ship";
import { gameBoard } from "./gameboard";

export const startGame = () => {
  let carrier = createShip("Carrier", 5);
  let battleship = createShip("Battleship", 4);
  let destroyer = createShip("Destroyer", 3);
  let submarine = createShip("Submarine", 3);
  let patrolBoat = createShip("Patrol Boat", 2);

  let playerBoard = gameBoard();
  let computerBoard = gameBoard();

  const MAX_PLACEMENT_ATTEMPTS = 1000;

  const placePlayerShips = () => {
    const ships = [carrier, battleship, destroyer, submarine, patrolBoat];

    // Add an array of letters for the xAxisMapping
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    ships.forEach((ship) => {
      let isPlaced = false;
      let attempts = 0;

      while (!isPlaced && attempts < MAX_PLACEMENT_ATTEMPTS) {
        try {
          const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
          const xCoordinate = letters[Math.floor(Math.random() * 10)];
          const yCoordinate = Math.floor(Math.random() * 10) + 1; 

          playerBoard.placeShips(ship, xCoordinate, yCoordinate, orientation);
          isPlaced = true;
        } catch (error) {
          attempts++;
        }
      }

      if (attempts >= MAX_PLACEMENT_ATTEMPTS) {
        throw new Error(
          `Failed to place the player's ${ship.shipName} after ${MAX_PLACEMENT_ATTEMPTS} attempts`
        );
      }
    });
  };

  const placeComputerShips = () => {
    const ships = [carrier, battleship, destroyer, submarine, patrolBoat];

    // Add an array of letters for the xAxisMapping
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    ships.forEach((ship) => {
      let isPlaced = false;
      let attempts = 0;

      while (!isPlaced && attempts < MAX_PLACEMENT_ATTEMPTS) {
        try {
          const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
          const xCoordinate = letters[Math.floor(Math.random() * 10)]; 
          const yCoordinate = Math.floor(Math.random() * 10) + 1; 
          
          computerBoard.placeShips(ship, xCoordinate, yCoordinate, orientation);
          isPlaced = true;
        } catch (error) {
          attempts++;
        }
      }

      if (attempts >= MAX_PLACEMENT_ATTEMPTS) {
        throw new Error(
          `Failed to place the computer's ${ship.shipName} after ${MAX_PLACEMENT_ATTEMPTS} attempts`
        );
      }
    });
  };

  const playerAttack = (xCoordinate, yCoordinate) => {
    computerBoard.receiveAttack(xCoordinate, yCoordinate);
  };

  const computerAttack = () => {
    const xCoordinate = Math.floor(Math.random() * 10);
    const yCoordinate = Math.floor(Math.random() * 10);
    playerBoard.receiveAttack(xCoordinate, yCoordinate);
  };

  const checkGameStatus = () => {
    const allShipsSunk = (ships) => {
      return ships.every((ship) => ship.isSunk());
    };

    if (allShipsSunk(playerShips)) {
      return "Computer Wins";
    }

    if (allShipsSunk(computerShips)) {
      return "Player Wins";
    }

    return "Game in progress";
  };

  const playGame = () => {};
  const declareWinner = () => {};

  // Game setup placing ships
  placePlayerShips();
  placeComputerShips();

  // Start the game loop
  playGame();

  return {
    playerShips: [carrier, battleship, destroyer, submarine, patrolBoat],
    computerShips: [carrier, battleship, destroyer, submarine, patrolBoat],
    playerBoard,
    computerBoard,
    playerAttack,
    computerAttack,
    checkGameStatus,
  };
};
