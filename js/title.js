//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '👀你干嘛去了？还不回来吖？';
        clearTimeout(titleTime);
    } else {
        //返回当前页面时标签显示内容
        document.title = '🐖终于等到你，还好我没放弃～';
        //两秒后变回正常标题
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 2000);
    }
});
//动态标题END

// 老旧浏览器弹窗提醒
function browserTC() {
    btf.snackbarShow("");
    Snackbar.show({
        text: '浏览器版本较低，网站样式可能错乱',
        actionText: '关闭',
        duration: '6000',
        pos: 'bottom-right'
    });
}

function browserVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //Edge浏览器
    var isFirefox = userAgent.indexOf("Firefox") > -1; //Firefox浏览器
    var isOpera = userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1; //Opera浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Edge") == -1 && userAgent.indexOf("OPR") == -1; //Chrome浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1 && userAgent.indexOf("Edge") == -1 && userAgent.indexOf("OPR") == -1; //Safari浏览器
    if (isEdge) {
        if (userAgent.split('Edge/')[1].split('.')[0] < 90) {
            browserTC()
        }
    } else if (isFirefox) {
        if (userAgent.split('Firefox/')[1].split('.')[0] < 90) {
            browserTC()
        }
    } else if (isOpera) {
        if (userAgent.split('OPR/')[1].split('.')[0] < 80) {
            browserTC()
        }
    } else if (isChrome) {
        if (userAgent.split('Chrome/')[1].split('.')[0] < 90) {
            browserTC()
        }
    } else if (isSafari) {
        //不知道Safari哪个版本是该淘汰的老旧版本
    }
}
//2022-10-29修正了一个错误：过期时间应使用toGMTString()，而不是toUTCString()，否则实际过期时间在中国差了8小时
function setCookies(obj, limitTime) {
    let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toGMTString()
    for (let i in obj) {
        document.cookie = i + '=' + obj[i] + ';expires=' + data
    }
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
if (getCookie('browsertc') != 1) {
    setCookies({
        browsertc: 1,
    }, 1);
    browserVersion();
}
// 老旧浏览器弹窗提醒END