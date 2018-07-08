// code for map generation
var map = document.getElementById("map");
var ctx = map.getContext("2d");
const height = 28;
const width = 32;
const square = 16;

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
    0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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

const moveSpaces = [
    1, 2,
]

var keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};

$(() => {
	// drawMap(mapArray);
	ctx.font = "bold 10pt sans-serif";
    
    // temporary test player. Pull spawn position info from database later
    var player = new Character(15, 15, '#ff0800');
    drawPlayer(player);

	window.addEventListener("keydown", function(e) {
		if(e.keyCode === 37) {
            keysDown[e.keyCode] = true;
            player.moveLeft();
        }
        if(e.keyCode === 38) {
            keysDown[e.keyCode] = true;
            player.moveUp();
        }
        if(e.keyCode === 39) {
            keysDown[e.keyCode] = true;
            player.moveRight();
        }
        if(e.keyCode === 40) {
            keysDown[e.keyCode] = true;
            player.moveDown();
        }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode >= 37 && e.keyCode <= 40) { 
            keysDown[e.keyCode] = false;
        }
	});
});


function drawMap(mapArray) {
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


function drawPlayer(player) {
    ctx.fillStyle = player.sprite;
    ctx.fillRect(player.positionX, player.positionY, player.height, player.width);
    return player;
}


// temporary. Deprecated when we get animations (unless this function is used in animation)

function erasePlayer(player) {
    ctx.clearRect(player.positionX, player.positionY, player.height, player.width);
}


function validMove(tileVal) {
    const len = moveSpaces.length;
    for(var i = 0; i < len; i++) {
        if(tileVal === moveSpaces[i])
            return true;
    }
    return false;
}


function Character(x, y, colour) {
	this.width     	= 14;
    this.height     = 14;
    this.x          = x;
    this.y          = y;
	this.positionX	= this.x * square + 1;
    this.positionY  = this.y * square + 1;
    this.sprite     = colour;
    this.moveCd     = 250;
    
    this.drawMovement = function(moveValue) {
        // TODO NEXT: movement animation here
        drawPlayer(this);
    }
    this.moveRight = function() {
        if(this.x === width - 1) {
            // generate new map here. Data should be pulled from backend.
        } else if(!validMove(mapArray[this.y * width + this.x + 1])) {
            // handle collision here. Bump back animation or walk on spot animation.
        } else {
            // temporary: deprecated when we have animations
            erasePlayer(this);
            // handle valid movement
            this.x++;
            this.positionX = this.x * square + 1;
            this.drawMovement(1);
        }
    }
    this.moveLeft = function() {
        if(this.x === 0) {
            // generate new map here. Data should be pulled from backend.
        } else if(!validMove(mapArray[this.y * width + this.x - 1])) {
            // handle collision here. Bump back animation or walk on spot animation.
        } else {
            // temporary: deprecated when we have animations
            erasePlayer(this);
            // handle valid movement
            this.x--;
            this.positionX = this.x * square + 1;
            this.drawMovement(-1);
        }
    }
    this.moveUp = function() {
        if(this.y === 0) {
            // generate new map here. Data should be pulled from backend.
        } else if(!validMove(mapArray[this.y * width + this.x - width])) {
            // handle collision here. Bump back animation or walk on spot animation.
        } else {
            // temporary: deprecated when we have animations
            erasePlayer(this);
            // handle valid movement
            this.y--;
            this.positionY = this.y * square + 1;
            this.drawMovement(-width);
        }
    }
    this.moveDown = function() {
        if(this.y === height - 1) {
            // generate new map here. Data should be pulled from backend.
        } else if(!validMove(mapArray[this.y * width + this.x + width])) {
            // handle collision here. Bump back animation or walk on spot animation.
        } else {
            // temporary: deprecated when we have animations
            erasePlayer(this);
            // handle valid movement
            this.y++;
            this.positionY = this.y * square + 1;
            this.drawMovement(width);
        }
    }
}
