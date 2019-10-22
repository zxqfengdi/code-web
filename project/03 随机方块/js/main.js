// 生成10个方块,随机生成颜色

var container = document.getElementById('container');
var arr = [];

for (var i = 0; i < 20; i++) {
	var options = {};
	var box = new Box(container, options);
	arr.push(box);
}

randomBox();

setInterval(randomBox, 500)

function randomBox() {
	for (var i = 0; i < arr.length; i++) {
		var box = arr[i];
		box.random();
		box.color();
	}
}