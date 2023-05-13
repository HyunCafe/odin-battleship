const { createShip } = require("../../src/modules/ship");

describe("Create ship object", () => {
  test("Should create a ship with correct properties", () => {
    const ship = createShip("destroyer", 3);
    expect(ship.shipName).toBe("destroyer");
    expect(ship.shipLength).toBe(3);
  });

  test("Should correctly register a hit", () => {
    const ship = createShip("destroyer", 3);
    ship.hit(1);
    expect(ship.isSunk()).toBe(false);
  });

  test("Should throw Error invalid hit position", () => {
    const ship = createShip("destroyer", 3);
    expect(() => ship.hit(-1).toThrow("Invalid hit position"));
    expect(() => ship.hit(3).toThrow("Invalid hit position"));
  });

  test("Should correctly report if ship is sunk", () => {
    const ship = createShip("destroyer", 3);
    expect(ship.isSunk()).toBe(false);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  });
});
