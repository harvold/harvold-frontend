// code for map generation and movement
// TODO: refactor into 2 files
var map = document.getElementById("map");
var ctx = map.getContext("2d");
const height = 10;
const width = 10;
const blockWidth = 100;
const blockHeight = 100;

$(function(){
    for(var x = 0; x < width; x++) {
        for(var y = 0; y < height; y++) {
            if((x + y) % 2 == 0) {
                ctx.fillStyle = "#000000";
                ctx.fillRect(width * x, height * y, blockWidth, blockHeight);
                console.log('Black: ', x, y);
            } else {
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(width * x, height * y, blockWidth, blockHeight);
                console.log('White: ', x, y);
            }
        }
    }
});
