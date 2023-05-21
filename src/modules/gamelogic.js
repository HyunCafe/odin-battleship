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

  const placePlayerShips = () => {
    const ships = [carrier, battleship, destroyer, submarine, patrolBoat];

    ships.forEach((ship) => {
      let isPlaced = false;

      while (!isPlaced) {
        try {
          const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
          const xCoordinate = Math.floor(Math.random() * 10);
          const yCoordinate = Math.floor(Math.random() * 10);

          playerBoard.placeShips(ship, xCoordinate, yCoordinate, orientation);
          isPlaced = true;
        } catch (error) {
          continue;
        }
      }
    });
  };

  const placeComputerShips = () => {
    const ships = [carrier, battleship, destroyer, submarine, patrolBoat];
  
    ships.forEach((ship) => {
      let isPlaced = false;
  
      while (!isPlaced) {
        try {
          const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
          const xCoordinate = Math.floor(Math.random() * 10);
          const yCoordinate = Math.floor(Math.random() * 10);
  
          computerBoard.placeShips(ship, xCoordinate, yCoordinate, orientation);
          isPlaced = true;
        } catch (error) {
          continue;
        }
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

  const checkGameStatus = () => {};
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
  };
};
