function dark() {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var n, e, i, h, t = .05,
        s = document.getElementById("universe"),
        o = !0,
        a = "180,184,240",
        r = "226,225,142",
        d = "226,225,224",
        c = [];

    function f() {
        n = window.innerWidth, e = window.innerHeight, i = .216 * n, s.setAttribute("width", n), s.setAttribute("height", e)
    }

    function u() {
        h.clearRect(0, 0, n, e);
        for (var t = c.length, i = 0; i < t; i++) {
            var s = c[i];
            s.move(), s.fadeIn(), s.fadeOut(), s.draw()
        }
    }

    function y() {
        this.reset = function() {
            this.giant = m(3), this.comet = !this.giant && !o && m(10), this.x = l(0, n - 10), this.y = l(0, e), this.r = l(1.1, 2.6), this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t, this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120), this.fadingOut = null, this.fadingIn = !0, this.opacity = 0, this.opacityTresh = l(.2, 1 - .4 * (this.comet + 1 - 1)), this.do = l(5e-4, .002) + .001 * (this.comet + 1 - 1)
        }, this.fadeIn = function() {
            this.fadingIn && (this.fadingIn = !(this.opacity > this.opacityTresh), this.opacity += this.do)
        }, this.fadeOut = function() {
            this.fadingOut && (this.fadingOut = !(this.opacity < 0), this.opacity -= this.do / 2, (this.x > n || this.y < 0) && (this.fadingOut = !1, this.reset()))
        }, this.draw = function() {
            if (h.beginPath(), this.giant) h.fillStyle = "rgba(" + a + "," + this.opacity + ")", h.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
            else if (this.comet) {
                h.fillStyle = "rgba(" + d + "," + this.opacity + ")", h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
                for (var t = 0; t < 30; t++) h.fillStyle = "rgba(" + d + "," + (this.opacity - this.opacity / 20 * t) + ")", h.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2), h.fill()
            } else h.fillStyle = "rgba(" + r + "," + this.opacity + ")", h.rect(this.x, this.y, this.r, this.r);
            h.closePath(), h.fill()
        }, this.move = function() {
            this.x += this.dx, this.y += this.dy, !1 === this.fadingOut && this.reset(), (this.x > n - n / 4 || this.y < 0) && (this.fadingOut = !0)
        }, setTimeout(function() {
            o = !1
        }, 50)
    }

    function m(t) {
        return Math.floor(1e3 * Math.random()) + 1 < 10 * t
    }

    function l(t, i) {
        return Math.random() * (i - t) + t
    }
    f(), window.addEventListener("resize", f, !1),
        function() {
            h = s.getContext("2d");
            for (var t = 0; t < i; t++) c[t] = new y, c[t].reset();
            u()
        }(),
        function t() {
            document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark' && u(), window.requestAnimationFrame(t)
        }()
};
dark()

//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var backimg = [
//     "url()",
//     "url()",
//     "url(https://gitee.com/youthlql/randombg/raw/master/lql_bg/00184.webp)"
// ];
// //获取背景图片总数，生成随机数
// var bgindex = Math.ceil(Math.random() * (backimg.length - 1));
// //重设背景图片
// document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
// //重设banner图片
// document.getElementById("page-header").style.backgroundImage = backimg[bgindex];

/* 空间说说   maintop */
// 存数据
function saveData(name, data) { localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data })) };
// 取数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (-1 < t && t < (time * 60000)) return d.data;
    }
    return 0;
};

let talkTimer = null;

function indexTalk() {
    if (talkTimer) {
        clearInterval(talkTimer)
        talkTimer = null;
    }
    if (!document.getElementById('bber-talk')) return

    function toText(ls) {
        let text = []
        ls.forEach(item => {
            text.push(item.content.replace(/#(.*?)\s/g, '').replace(/\{(.*?)\}/g, '').replace(/\!\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-image"></i>').replace(/\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-link"></i>'))
        });
        return text
    }

    function talk(ls) {
        let html = ''
        ls.forEach((item, i) => { html += `<li class="item item-${i + 1}">${item}</li>` });
        let box = document.querySelector("#bber-talk .talk-list")
        box.innerHTML = html;
        talkTimer = setInterval(() => {
            box.appendChild(box.children[0]);
        }, 3000);
    }

    let d = loadData('talk', 10);
    if (d) talk(d);
    else {
        fetch('https://memos-on-replit.lixiaomuicon.repl.co/api/memo?creatorId=1&tag=说说&limit=10').then(res => res.json()).then(data => { // 更改地址
            data = toText(data.data)
            talk(data);
            saveData('talk', data);
        })
    }
}
indexTalk();

// pjax注释掉上面的 indexTalk(); 使用如下方法：
// function whenDOMReady() {
//     indexTalk();
// }

// whenDOMReady()
// document.addEventListener("pjax:complete", whenDOMReady)



// // 返回顶部显示网页阅读进度
// window.onscroll = percent; // 执行函数
// // 页面百分比
// function percent() {
//     let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
//         b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
//         result = Math.round(a / b * 100), // 计算百分比
//         up = document.querySelector("#go-up") // 获取按钮

//     if (result <= 95) {
//         up.childNodes[0].style.display = 'none'
//         up.childNodes[1].style.display = 'block'
//         up.childNodes[1].childNodes[0].innerHTML = result;
//     } else {
//         up.childNodes[1].style.display = 'none'
//         up.childNodes[0].style.display = 'block'
//     }
// }

// 基于memos实现动态相册
// 适配pjax
function whenDOMReady() {
    if (location.pathname == '/photos/') photos();
}
whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

// 自适应
window.onresize = () => {
    if (location.pathname == '/photos/') waterfall('.gallery-photos');
};

// 函数
function photos() {
    fetch('https://memos-on-replit.lixiaomuicon.repl.co/api/memo?creatorId=1&tag=相册').then(res => res.json()).then(data => { // 记得修改memos地址
        let html = '',
            imgs = [];
        data.data.forEach(item => { imgs = imgs.concat(item.content.match(/\!\[.*?\]\(.*?\)/g)) });
        imgs.forEach(item => {
            let img = item.replace(/!\[.*?\]\((.*?)\)/g, '$1'),
                time, title, tat = item.replace(/!\[(.*?)\]\(.*?\)/g, '$1');
            if (tat.indexOf(' ') != -1) {
                time = tat.split(' ')[0];
                title = tat.split(' ')[1];
            } else title = tat

            html += `<div class="gallery-photo"><a href="${img}" data-fancybox="gallery" class="fancybox" data-thumb="${img}"><img class="photo-img" loading='lazy' decoding="async" src="${img}"></a>`;
            title ? html += `<span class="photo-title">${title}</span>` : '';
            time ? html += `<span class="photo-time">${time}</span>` : '';
            html += `</div>`;
        });

        document.querySelector('.gallery-photos.page').innerHTML = html
        imgStatus.watch('.photo-img', () => { waterfall('.gallery-photos'); });
        window.Lately && Lately.init({ target: '.photo-time' });
    }).catch()
}
// 基于memos实现动态相册END

// 页脚本站运行时间
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