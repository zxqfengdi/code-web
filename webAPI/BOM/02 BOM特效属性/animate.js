// 动画函数封装
function animate(element, target) {
	
	// 为每个元素元素添加timerId作为其属性(每个元素拥有自己的定时器)
	if (element.timerId) {
		clearInterval(element.timerId);
		element.timerId = null;
	}
	
	element.timerId = setInterval(function () {
		var step = 6;
		var current = element.offsetLeft;
		
		// 判断如果当前位置 > 目标位置 此时的step为负值
		if (current > target) {
			step = - Math.abs(step);
		}
		
		// 当移动距离大于目标时取消定时器
		if (Math.abs(current - target) <= Math.abs(step)) {
			clearInterval(element.timerId);
			element.style.left = target + 'px';
			return;
		}
		
		current += step;
		element.style.left = current + 'px';
	}, 5);
}