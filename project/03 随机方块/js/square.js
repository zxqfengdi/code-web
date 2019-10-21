// 方块对象构造函数
// 方块对象属性:大小(宽高) 背景颜色 坐标位置

function Box(parent, options) {
	
	// 对象属性（设置默认值）
	this.backgroundColor = options.backgroundColor || 'red';
	this.width = options.width || 20;
	this.height = options.height || 20;
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.parent = parent;
	this.div = document.createElement('div');
	this.init();
}


Box.prototype.init = function () {
	// 创建小方块对应的div并放到父容器内部
	var div = this.div;
	this.parent.appendChild(div);
	
	div.style.backgroundColor = this.backgroundColor;
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.position = 'absolute';
	div.style.left = this.x + 'px';
	div.style.top = this.y + 'px';
}

// 随机生成坐标
Box.prototype.random = function () {
	var x = tools.getRandom(0, this.parent.offsetWidth / this.width - 1) * this.width;
	var y = tools.getRandom(0, this.parent.offsetHeight / this.height - 1) * this.height;
	
	this.div.style.left = x + 'px';
	this.div.style.top = y + 'px';
}

// 随机生成颜色
Box.prototype.color = function () {
	var r = tools.getRandom(0, 255);
	var g = tools.getRandom(0, 255);
	var b = tools.getRandom(0, 255);
	
	var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	this.div.style.backgroundColor = color;
}