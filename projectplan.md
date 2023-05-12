#### Approach
Mobile First Design
Project Plan approach

#### Modules
* Ship Module
  * Create ship objects with properties and methods such as length, hit count, sunk status, hit(), and isSunk()

* Gameboard Module
  * Implement methods for placing ships, receiving attacks, tracking missed attacks, and reporting the status of all ships (sunk or not)

* Game Logic Module
  * Manage player turns and implement random play logic for the computer player
  * Manage game setup, game conditions, and game ending conditions
  * Improve computer player's intelligence by targeting adjacent slots after a hit

* User Interface Module
  * Handle rendering of gameboards and user input processing
  * Enable random setup, undo functionality, ship rotation, and drag-and-drop placement

#### Features / Potential Features
* Random ship placement
* Custom ship placement with drag and drop
* Undo button for ship placement
* Ship rotation during placement
* Responsive design for mobile devices
* Two-player mode (local or online)
* Enhanced AI for computer player
* Adjustable game settings (e.g., board size, number of ships)
* Game statistics tracking (e.g., wins, losses, hit accuracy)
* Visual and sound effects for hits and misses
* Optional difficulty levels for the computer player
* Tutorial or guided instructions for new players
* Customizable themes or skins for the game interface

#### User interface:
* Display player's boards
* Allow user to interact with the board (e.g., click on coordinates for attacks, color coordinated)
* Implement ship placement options (e.g., type coordinates, drag and drop)
* Optimize the game for mobile screens
* Plan unit tests for all public methods and properties of objects.

#### Languages/Libraries
* HTML
* CSS
* Possibliy try Tailwind
* JavaScript
* Jest
* Webpack

Howler.js: A library for working with audio (https://howlerjs.com/)
interact.js: A powerful library for handling drag-and-drop, resizing, and multi-touch gestures (https://interactjs.io/)