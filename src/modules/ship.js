"use strict";

const createShip = (shipName, shipLength) => {
    const hitCount = new Array(shipLength).fill(false);
  
    const hit = (position) => {
      if (position < 0 || position >= shipLength) {
        throw new Error("Invalid position");
      }
      hitCount[position] = true;
    };
  
    const isSunk = () => hitCount.every((hit) => hit);
  
    return {
      shipName,
      shipLength,
      hit,
      isSunk,
    };
  };


// No.	Class of ship	Size
// 1	Carrier	5
// 2	Battleship	4
// 3	Destroyer	3
// 4	Submarine	3
// 5	Patrol Boat	2