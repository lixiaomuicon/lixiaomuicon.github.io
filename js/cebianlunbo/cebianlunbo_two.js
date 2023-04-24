function animation(obj, target, callback) { //obj要实现的那个元素， target目标位置
    clearInterval(obj.timer); //清除以前的定时器，只保留当前的
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数
            callback && callback();
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15);
}