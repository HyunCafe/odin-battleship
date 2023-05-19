"use strict";
import { gameBoard } from "../modules/gameboard";
import { startGame } from "../modules/gamelogic";

describe("startGame", () => {
  test("Correctly create the player Carrier ship", () => {
    const { playerShips } = startGame();
    const carrier = playerShips.find((ship) => ship.shipName === "Carrier");
    expect(carrier).toBeDefined();
    expect(carrier.shipLength).toBe(5);
    expect(typeof carrier.hit).toBe("function");
    expect(typeof carrier.isSunk).toBe("function");
  });

  test("Correctly create the player Battleship", () => {
    const { playerShips } = startGame();
    const battleShip = playerShips.find(
      (ship) => ship.shipName === "Battleship"
    );
    expect(battleShip).toBeDefined();
    expect(battleShip.shipLength).toBe(4);
    expect(typeof battleShip.hit).toBe("function");
    expect(typeof battleShip.isSunk).toBe("function");
  });

  test("Correctly create the player Destroyer ship", () => {
    const { playerShips } = startGame();
    const destroyer = playerShips.find((ship) => ship.shipName === "Destroyer");
    expect(destroyer).toBeDefined();
    expect(destroyer.shipLength).toBe(3);
    expect(typeof destroyer.hit).toBe("function");
    expect(typeof destroyer.isSunk).toBe("function");
  });

  test("Correctly create the player Submarine", () => {
    const { playerShips } = startGame();
    const submarine = playerShips.find((ship) => ship.shipName === "Submarine");
    expect(submarine).toBeDefined();
    expect(submarine.shipLength).toBe(3);
    expect(typeof submarine.hit).toBe("function");
    expect(typeof submarine.isSunk).toBe("function");
  });

  test("Correctly create the player Patrol Boat", () => {
    const { playerShips } = startGame();
    const patrolBoat = playerShips.find(
      (ship) => ship.shipName === "Patrol Boat"
    );
    expect(patrolBoat).toBeDefined();
    expect(patrolBoat.shipLength).toBe(2);
    expect(typeof patrolBoat.hit).toBe("function");
    expect(typeof patrolBoat.isSunk).toBe("function");
  });

  test("Correctly create the computers ships", () => {});

  test("Correctly registers players attacks", () => {});

  test("Correctly registers computers attacks", () => {});

  test("Correctly checks the games status", () => {});

  test("Correctly declares games winner", () => {});
});

test("throws and error when placing ships in invalid coordinates", () => {
  const board = gameBoard();
  const ship = {
    shipName: "Battleship",
    shipLength: 4,
    hit: () => {},
    isSunk: () => {},
  };
  expect(() => board.placeShips(ship, "Z", 5, "horizontal")).toThrow(
    "Coordinates are outside the grid"
  );
});
