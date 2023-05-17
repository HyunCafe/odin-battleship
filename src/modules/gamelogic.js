import { createShip } from "./ship";
import { gameBoard } from "./gameboard";

export const startGame = () => {
  let carrier = createShip('Carrier', 5);
  let battleship = createShip('Battleship', 4);
  let destroyer = createShip('Destroyer', 3);
  let submarine = createShip('Submarine', 3);
  let patrolBoat = createShip('Patrol Boat', 2);

  let board = gameBoard();

};