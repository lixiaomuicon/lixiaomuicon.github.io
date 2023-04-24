$(function() {
    init();
    changImg(); //解决第一次第一张到第二张的时间间隔
    start();

});
//初始化
function init() {
    var len = $('#img img').length; //获取图片有多少张
    var html = '';
    //拼html
    for (var i = 0; i < len; i++) {
        html += '<li onmouseover="changImg(' + i +
            ')" onmouseout="reStart(' + i + ')">' + (i + 1) + '</li>';
    }
    //写进ul
    $('#num').html(html);
    //显示第一张图片
    $('#img img').first().css('display', 'block');
    //第一个数字背景颜色
    $('#num li').eq(0).addClass('active');
}
//图片轮播
function changImg(num) {
    if (num == 'auto') { //定时器自动调用
        num = index;
    } else { //鼠标放上的时候 清楚定时器
        clearInterval(timer);
    }
    //链式写法
    $('#img img').eq(num).css('display', 'block').siblings().css('display',
        'none');
    $('#num li').eq(num).addClass('active').siblings()
        .removeClass('active');
    index++;
    if (index == $('#img img').length) { //最后一张
        index = 0; //第一张
    }
}
var index = 0;
var timer; //定时器
//定时器 播放
function start() {
    timer = setInterval('changImg("auto")', 2500);
}
//鼠标离开之后 又要自动播放
function reStart(num) {
    index = num;
    changImg(num);
    start();
}