// 工具对象

var tools = {
	// 小方块获取随机颜色和随机位置
	getRandom: function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}