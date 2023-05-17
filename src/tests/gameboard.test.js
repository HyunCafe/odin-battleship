import { gameBoard } from "../modules/gameboard";

describe("gameBoard", () => {
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

  test("places a ship within the grid boundaries", () => {
    const board = gameBoard();
    const ship = {
      shipName: "Battleship",
      shipLength: 4,
      hit: () => {},
      isSunk: () => {},
    };
    expect(() => board.placeShips(ship, "A", 1, "horizontal")).not.toThrow();
  });

  test("throws an error with overlapping ships", () => {
    const board = gameBoard();
    const ship1 = {
      shipName: "Battleship",
      shipLength: 4,
      hit: () => {},
      isSunk: () => {},
    };
    const ship2 = {
      shipName: "Cruisers",
      shipLength: 3,
      hit: () => {},
      isSunk: () => {},
    };
    board.placeShips(ship1, "A", 1, "horizontal");
    expect(() => board.placeShips(ship2, "A", 1, "horizontal")).toThrow(
      "Invalid Ship Placement"
    );
  });

  test("successfully attacks a ship", () => {
    const board = gameBoard();
    const ship = {
      shipName: "Battleship",
      shipLength: 4,
      hit: jest.fn(),
      isSunk: () => {},
    };
    board.placeShips(ship, "A", 1, "horizontal");
    board.receiveAttack("A", 1);
    expect(ship.hit).toHaveBeenCalledWith(0);
  });

  test("misses an attack on an empty cell", () => {
    const board = gameBoard();
    expect(() => board.receiveAttack("A", 1)).not.toThrow();
  });

  test("throws an error when attacking a cell that has already been attacked", () => {
    const board = gameBoard();
    board.receiveAttack("A", 1);
    expect(() => board.receiveAttack("A", 1)).toThrow(
      "This cell has already been attacked"
    );
  });
});
