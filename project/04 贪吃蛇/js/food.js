// 食物对象构造函数

function Food(options) {
    options = options || {};  // 未传入options参数设置默认值为空对象

    this.x = options.x || 0;
    this.y = options.y || 0;

    this.width = options.width || 20;
    this.height = options.height || 20;

    this.color = options.color || 'green';
}

// 食物渲染方法：食物对象显示到页面上(使用原型对象添加方法) map参数指向地图
Food.prototype.render = function (map) {

    // 随机设置位置
    this.x = tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y = tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;

    // 创建食物对象添加到地图上
    var div = document.createElement('div');
    map.appendChild(div);

    // 设置div 的样式
    div.style.position = 'absolute';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
};

// 测试
var map = document.getElementById('map');
food = new Food();
food.render(map);
