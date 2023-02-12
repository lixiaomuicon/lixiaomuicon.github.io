$(document).ready(function(e) {
    $('.framework-info').html('本站已运行<SPAN id=span_dt_dt style="color: #fff;"></SPAN>');
})

function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    BirthDay = new Date("1/1/2023 0:0:0");
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = Math.floor(e_hrsold);
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold = Math.floor((e_hrsold - hrsold) * 60);
    seconds = Math.floor((e_minsold - minsold) * 60);
    span_dt_dt.innerHTML = ' <font style=color:#2d85f0>' + daysold + '</font> 天 <font style=color:#f4433c>' + hrsold + '</font> 时 <font style=color:#ffbc32>' + minsold + '</font> 分 <font style=color:#0aa858>' + seconds + '</font> 秒';
}
show_date_time();

// 返回顶部显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up") // 获取按钮

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = result;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}