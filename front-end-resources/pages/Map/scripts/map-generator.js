// code for map generation and player handling.
const map = document.getElementById("map");
const ctx = map.getContext("2d");
const height = 28;
const width = 32;
const square = 16;
var useMap = false;


/**
 * Function to create a character object. Will be updated to a class
 * @param {Number} x x-coordinate position
 * @param {Number} y y-coordinate position
 * @param {String} colour Colour of player - will be changed to sprite
 */
class Character {
    constructor(x, y, colour) {
        this.width     	= 14;
        this.height     = 14;
        this.x          = x;
        this.y          = y;
        this.positionX	= this.x * square + ((square - this.width) / 2);
        this.positionY  = this.y * square + ((square - this.height) / 2);
        this.sprite     = colour;
        this.moveTime   = 250;
    }

    /**
     * Draws player's current position using pixel positioning
     */
    drawPlayer() {
        ctx.fillStyle = this.sprite;
        ctx.fillRect(this.positionX, this.positionY, this.height, this.width);
    }


    /**
     * Erases player's current position using pixel positioning
     */
    erasePlayer() {
        ctx.clearRect(this.positionX, this.positionY, this.height, this.width);
    }

    /**
     * Draws specific movement.
     * @param {String} moveValue String describing movement. One of 'up', 'down', 'left', 'right'.
     */
    drawMovement(moveValue) {
        // TODO NEXT: movement animation here
        this.drawPlayer();
    }

    moveRight() {
        if(this.x === width - 1) {
            // generate new map here. Data should be pulled from backend.
        } else if(!validMove(mapArray[this.y * width + this.x + 1])) {
            // handle collision here. Bump back animation or walk on spot animation.
        } else {
            // temporary: deprecated when we have animations
            this.erasePlayer();
            // handle valid movement
            this.x++;
            this.positionX = this.x * square + 1;
            this.drawMovement('right');
        }
    }

    moveLeft() {
        if(this.x === 0) {
            // generate new map here. Data should be pulled from backend.
        } else if(!validMove(mapArray[this.y * width + this.x - 1])) {
            // handle collision here. Bump back animation or walk on spot animation.
        } else {
            // temporary: deprecated when we have animations
            this.erasePlayer();
            // handle valid movement
            this.x--;
            this.positionX = this.x * square + 1;
            this.drawMovement('left');
        }
    }

    moveUp() {
        if(this.y === 0) {
            // generate new map here. Data should be pulled from backend.
        } else if(!validMove(mapArray[this.y * width + this.x - width])) {
            // handle collision here. Bump back animation or walk on spot animation.
        } else {
            // temporary: deprecated when we have animations
            this.erasePlayer();
            // handle valid movement
            this.y--;
            this.positionY = this.y * square + 1;
            this.drawMovement('up');
        }
    }

    moveDown() {
        if(this.y === height - 1) {
            // generate new map here. Data should be pulled from backend.
        } else if(!validMove(mapArray[this.y * width + this.x + width])) {
            // handle collision here. Bump back animation or walk on spot animation.
        } else {
            // temporary: deprecated when we have animations
            this.erasePlayer();
            // handle valid movement
            this.y++;
            this.positionY = this.y * square + 1;
            this.drawMovement('down');
        }
    }
}


/**
 * Array holding the map's tile type for movement/interaction logic.
 */
var mapArray = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0,
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 1, 1, 1, 0, 0, 0, 1, 2, 2, 2, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 2, 0, 0, 0, 2, 2, 1, 1, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2,
    0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 2, 2, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]

/**
 * Array of valid positions to walk on normally.
 */
const moveSpaces = [
    1, 2,
]

const moveSpaceLength = moveSpaces.length;

/**
 * Determines whether or not the tile can be walked onto.
 * @param {Number} tileVal 
 */
function validMove(tileVal) {
    for(var i = 0; i < moveSpaceLength; i++) {
        if(tileVal === moveSpaces[i]) {
            return true;
        }
    }
    return false;
}


/**
 * Tracks whether or not a key is held down. To be used for smooth movement (and anywhere else it can be applied).
 */
var keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};


/**
 * Game initialization. Creates player and sets up event listeners. Main game loop.
 */
$(() => {
    // uncomment showTileTypes to see tiles by category on display. For debugging only, shouldn't be used in actual implementation.
	// showTileTypes(mapArray);
	ctx.font = "bold 12pt sans-serif";
    
    // temporary test player. Pull spawn position info from database later.
    var player = new Character(15, 15, '#ff0800');
    player.drawPlayer();

	window.addEventListener("keydown", function(e) {
		if(e.keyCode === 37 && useMap) {
            e.preventDefault();
            keysDown[e.keyCode] = true;
            player.moveLeft();
        }
        if(e.keyCode === 38 && useMap) {
            e.preventDefault();
            keysDown[e.keyCode] = true;
            player.moveUp();
        }
        if(e.keyCode === 39 && useMap) {
            e.preventDefault();
            keysDown[e.keyCode] = true;
            player.moveRight();
        }
        if(e.keyCode === 40 && useMap) {
            e.preventDefault();
            keysDown[e.keyCode] = true;
            player.moveDown();
        }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode >= 37 && e.keyCode <= 40) { 
            keysDown[e.keyCode] = false;
        }
    });
    
    // scroll behaviour management. Other window behaviour management (ex. click on text box to type) should also be in here.
    document.onclick = function(e) {
        if(e.target === document.getElementById('mapOverlay')) {
            useMap = true;
        } else {
            useMap = false;
        }
      }
    });

/**
 * Displays colour over map to classify terrain types. Should be used for development only.
 * @param {Array<Number>} mapArray 
 */
function showTileTypes(mapArray) {
    for(var i = 0; i < height * width; i++) {
        if(mapArray[i] === 1) {
            ctx.fillStyle = '#00000080';
        } else if(mapArray[i] == 0) {
            ctx.fillStyle = '#ffffff80';
        } else if(mapArray[i] == 2) {
            ctx.fillStyle = '#00800080';
        } else if(mapArray[i] == 3) {
            ctx.fillStyle = '#FFA50080';
        } else {
            ctx.fillStyle = '#FF000080';
        }
        ctx.fillRect(i % width * square, Math.floor(i/width) * square, square, square);
    }
}
