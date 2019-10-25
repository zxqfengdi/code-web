
// 使用匿名函数自调用创建局部作用域：避免命名冲突
(function () {
    // 食物对象构造函数

    // 记录上次生成的食物
    var elements = [];

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
        // 删除之前的食物（蛇接触到食物时）
        remove();

        // 随机设置位置
        this.x = tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;

        // 创建食物对象添加到地图上
        var div = document.createElement('div');
        map.appendChild(div);

        elements.push(div);

        // 设置div 的样式
        div.style.position = 'absolute';
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
    };


    // 删除食物方法
    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            // 删除div
            elements[i].parentNode.removeChild(elements[i]);
            // 删除数组中的元素
            elements.splice(i, 1);
        }
    }

    window.Food = Food;
})();


// 测试
var map = document.getElementById('map');
food = new Food();
food.render(map);
