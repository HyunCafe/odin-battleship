"use strict";

import { createShip } from "./ship";
import { gameBoard } from "./gameboard";

export const startGame = () => {
  let carrier = createShip('Carrier', 5);
  let battleship = createShip('Battleship', 4);
  let destroyer = createShip('Destroyer', 3);
  let submarine = createShip('Submarine', 3);
  let patrolBoat = createShip('Patrol Boat', 2);

  let playerBoard = gameBoard();
  let computerBoard = gameBoard();


  const placePlayerShips = () => {

  }

  // Option to have auto placement of ships randomized

  const placeComputerShips = () => {

  }

  const playerAttack = () => {

  }

  const computerAttack = () => {

  }

  const checkGameStatus = () => {
  }

  const playGame = () => {
  }

  const declareWinner = () => {
  }

  // Game setup placing ships
  placePlayerShips();
  placeComputerShips();

  // Start the game loop
  playGame();
};

