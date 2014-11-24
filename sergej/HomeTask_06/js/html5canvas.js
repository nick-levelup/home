var canvasik = document.getElementById("canvasik"),
ctx = canvasik.getContext('2d'),
cellSize = 32,
pic = new Image(),
map = 
[
[{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4}],
[{x:1,y:4},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4}],
[{x:1,y:4},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:1,y:4},{x:1,y:3},{x:1,y:3},{x:1,y:3}],
[{x:1,y:4},{x:3,y:4},{x:2,y:3},{x:3,y:4},{x:1,y:4},{x:1,y:3},{x:1,y:4},{x:1,y:4}],
[{x:1,y:4},{x:3,y:4},{x:2,y:4},{x:3,y:4},{x:1,y:4},{x:1,y:3},{x:1,y:4},{x:1,y:4}],
[{x:1,y:4},{x:1,y:4},{x:1,y:3},{x:1,y:4},{x:1,y:4},{x:1,y:3},{x:1,y:4},{x:1,y:4}],
[{x:1,y:4},{x:1,y:4},{x:1,y:3},{x:1,y:3},{x:1,y:3},{x:1,y:3},{x:1,y:4},{x:1,y:4}],
[{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4},{x:1,y:4}]
];
canvasik.width = 8 * cellSize;
canvasik.height = 8 * cellSize;
pic.src = 'images/canvas.png';
pic.onload = function () {
	for (var j = 0; j < 8; j++) {
		for (var i = 0; i < 8; i++) {
			ctx.drawImage(pic, (map[i][j].x - 1) * cellSize, (map[i][j].y - 1) * cellSize, 32, 32, j * cellSize, i * cellSize, 32, 32);
		}
	}
}