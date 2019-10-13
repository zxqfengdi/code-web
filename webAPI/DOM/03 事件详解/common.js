// 根据id获取元素

function my$(id) {
	return document.getElementById(id);
}

// 获取元素的文本内容

function getInnerText(element) {
	// 属性存在返回字符串'string'，不存在返回undefined
	if (typeof element.innerText === 'string') {
		return element.innerText;
	} else {
		return element.textContent;
	}
}

// 设置元素文本内容

function setInnerText(element, content) {
	if (typeof element === 'string') {
		element.innerText = content;
	} else {
		element.textContent = content;
	}
}

// 获取元素的第一个子元素

function getFirstElementChild(element) {
	var node;
	var nodes = element.childNodes;
	var i = 0;
	// 正序遍历
	while (node = nodes[i++]) {
		if (node.nodeType === 1) {
			return node;
		}
	}
	return null;
}


// 获取元素的最后一个子元素

function getLastElementChild(element) {
	var node;
	var nodes = element.childNodes;
	var i = nodes.length - 1;
	// 倒序遍历
	while (node = nodes[i--]) {
		if (node.nodeType === 1) {
			return node;
		}
	}
	return null;
}

// 获取当前元素的前一个兄弟元素节点

function getPreviousElementSibling(element) {
	var el = element;
	while (el = el.previousSibling) {
		if (el.nodeType === 1) {
			return el;
		}
	}
	return null;
}

// 获取当前元素的后一个兄弟元素节点

function getNextElementSibling(element) {
	var el = element;
	while (el = el.nextSibling) {
		if (el.nodeType === 1) {
			return el;
		}
	}
	return null;
}

// 注册事件兼容性处理

function addEventListener(element, eventName, fn) {
	if (element.addEventListener) {
		element.addEventListener(eventName, fn)
	} else if (element.attachEvent) {
		element.attachEvent('on' + eventName, fn)
	} else {
		element['on' + eventName] = null;
	}
}

// 移除事件的兼容性处理

function removeEventListener(element, eventName, fn) {
	if (element.removeEventListener) {
		element.removeEventListener(eventName, fn)
	} else if (element.detachEvent) {
		element.detachEvent('on' + eventName, fn)
	} else {
		element['on' + eventName] = fn;
	}
}