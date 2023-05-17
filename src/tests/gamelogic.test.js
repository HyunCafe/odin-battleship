import { startGame } from "../modules/gamelogic";
import { gameBoard } from "../modules/gameboard";
import { createShip } from "../modules/ship";

describe('createShip', () => {
    test('Creates a Carrier, length 5', () => {
        const carrier = createShip('Carrier', 5);
        expect(carrier.shipName).toBe('Carrier');
        expect(carrier.shipLength).toBe(5);
        expect(typeof carrier.hit).toBe('function');
        expect(typeof carrier.isSunk).toBe('function');
    });


    test('Creates a Battleship, length 4', () => {
        const battleShip = createShip('Battleship', 4);
        expect(battleShip.shipName).toBe('Battleship');
        expect(battleShip.shipLength).toBe(4);
        expect(typeof battleShip.hit).toBe('function');
        expect(typeof battleShip.isSunk).toBe('function');
    })

    test('Creates a Destroyer, length 3', () => {
        const destoyer = createShip('Destoyer', 3);
        expect(destoyer.shipName).toBe('Destoyer');
        expect(destoyer.shipLength).toBe(3);
        expect(typeof destoyer.hit).toBe('function');
        expect(typeof destoyer.isSunk).toBe('function');
    })

    test('Creates a Submarine, length 3', () => {
        const submarine = createShip('Submarine', 3);
        expect(submarine.shipName).toBe('Submarine');
        expect(submarine.shipLength).toBe(3);
        expect(typeof submarine.hit).toBe('function');
        expect(typeof submarine.isSunk).toBe('function');
    })

    test('Creates a Patrol boat, length 2', () => {
        const patrolBoat = createShip('Patrol Boat', 2);
        expect(patrolBoat.shipName).toBe('Patrol Boat');
        expect(patrolBoat.shipLength).toBe(2);
        expect(typeof patrolBoat.hit).toBe('function');
        expect(typeof patrolBoat.isSunk).toBe('function');
    })
});