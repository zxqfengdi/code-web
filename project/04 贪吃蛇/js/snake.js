(function () {
    // 蛇对象构造函数
    function Snake(options) {
        options = options || {};

        // 蛇节的大小
        this.width = options.width || 20;
        this.height = options.height || 20;

        // 移动方向
        this.direction = options.direction || 'right';

        // 蛇的身体（初始三节，第一个为蛇头）
        this.body = [
            {x: 3, y: 2, color: 'red'},
            {x: 2, y: 2, color: 'blue'},
            {x: 1, y: 2, color: 'blue'}
        ];
    }

    Snake.prototype.render = function (map) {
        // 渲染每一个蛇节
        for (var i = 0, len = this.body.length; i < len; i++) {
            // 蛇节渲染
            var object = this.body[i];

            // 创建蛇节对象添加到页面并设置样式
            var div = document.createElement('div');
            map.appendChild(div);

            div.style.position = 'absolute';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';

            div.style.backgroundColor = object.color;
        }
    }

    window.Snake = Snake;
})();

// 蛇对象测试
var snake = new Snake();
var map = document.getElementById('map')
snake.render(map);