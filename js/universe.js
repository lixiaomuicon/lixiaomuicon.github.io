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

/* ????????????   maintop */
// ?????????
function saveData(name, data) { localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data })) };
// ?????????
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // ???????????????????????? 0 ??????????????????
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
        fetch('https://memos-on-replit.lixiaomuicon.repl.co/api/memo?creatorId=1&tag=??????&limit=10').then(res => res.json()).then(data => { // ????????????
            data = toText(data.data)
            talk(data);
            saveData('talk', data);
        })
    }
}
indexTalk();

// pjax?????????????????? indexTalk(); ?????????????????????
// function whenDOMReady() {
//     indexTalk();
// }

// whenDOMReady()
// document.addEventListener("pjax:complete", whenDOMReady)


// ??????memos??????????????????
// ??????pjax
function whenDOMReady() {
    if (location.pathname == '/photos/') photos();
}
whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

// ?????????
window.onresize = () => {
    if (location.pathname == '/photos/') waterfall('.gallery-photos');
};

// ??????
function photos() {
    fetch('https://memos-on-replit.lixiaomuicon.repl.co/api/memo?creatorId=1&tag=??????').then(res => res.json()).then(data => { // ????????????memos??????
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
// ??????memos??????????????????END

// ?????????????????????
window.onscroll = percent; // ????????????
// ???????????????
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // ????????????
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // ??????????????????
        result = Math.round(a / b * 100), // ???????????????
        up = document.querySelector("#go-up") // ????????????

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = result;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}

// ?????????????????????END

// ????????????
function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return '?????????' + document.title + '\n?????????' + url } });
    btf.snackbarShow("???????????????????????????????????????????????????~")
}

// ?????????????????????
function switchCommentBarrage() {
    let flag = window.localStorage.getItem('commentBarrageDisplay') // undefined || false
    document.getElementById('comment-barrage').style.display = flag === 'false' ? 'block' : 'none'
        // ???????????????????????????????????????????????? ??????????????? ?????????
    window.localStorage.setItem('commentBarrageDisplay', flag === 'false' ? 'undefined' : 'false', 86400000)
}

// ?????????????????????
// ?????????
// name????????? data?????????
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// ?????????
// name????????? time???????????????,????????????,?????????30,??????????????????????????????30????????????0,??????????????????
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // ???????????????????????? 0 ??????????????????
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// ???????????????????????????????????????????????????????????????????????????????????????

// ????????????
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// ??????????????????
// ?????????flag?????????????????????????????????????????????,???????????????????????????
// ??????flag???0?????????,???????????????. ???1????????????,?????????????????????????????????.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// ?????????2.0????????????

// ????????????
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "????????????",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#49b1f5',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // ????????????????????????????????????????????????????????? a?????? ?????????????????????????????? ????????????????????? ?????????????????????????????????\????????????
    winbox.body.innerHTML = `
    <div class="note success modern"><p>???????????????????????????????????????<br>?????????????????????????????????????????????~ <a href="/wallpaper/" style="color:red">????????????</a></p></div>
    <div class="note pink fa-image"><p>??????????????????,???????????????????????????<br>????????????--????????????????????????~</p></div>
    <div id="article-container" style="padding:10px;"> 
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> ????????????????????????</button></p>

    <details class="toggle" =""><summary class="toggle-button" style="">??????????????????</summary>
    <div class="toggle-content">
        <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/23/xhI98.png)" class="imgbox" onclick="changeBg('url(http\://cdn.seovx.com/?mom=302)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.MontBlancPeak_ZH-CN0459151326_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.MontBlancPeak_ZH-CN0459151326_1920x1080.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.MackenzieRiver_ZH-CN0214805768_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.MackenzieRiver_ZH-CN0214805768_1920x1080.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.PorcupineBay_ZH-CN2252758146_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.PorcupineBay_ZH-CN2252758146_1920x1080.jpg')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/04/2021040311203011.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/04/2021040311203011.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021110119420045.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/11/2021110119420045.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2020/12/2020121409235638.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2020/12/2020121409235638.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016525829.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/11/2021111016525829.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016580917.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/11/2021111016580917.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/05f6ec390b2ba38fc1793b2bf45a5814.png)" class="imgbox" onclick="changeBg('url(https\://i.hd-r.cn/05f6ec390b2ba38fc1793b2bf45a5814.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/dea2b4d4e62f2fa9a05e42ba45f82ab4.png)" class="imgbox" onclick="changeBg('url(https\://i.hd-r.cn/dea2b4d4e62f2fa9a05e42ba45f82ab4.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/1209e9d41c46c546d098c483149ab6e9.jpg)" class="imgbox" onclick="changeBg('url(https\://i.hd-r.cn/1209e9d41c46c546d098c483149ab6e9.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/a875760c2b7360a141fc7cb87bc82d6f.png)" class="imgbox" onclick="changeBg('url(https\://i.hd-r.cn/a875760c2b7360a141fc7cb87bc82d6f.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/e5944e4c794e1a94819641c0a38ba787.jpg)" class="imgbox" onclick="changeBg('url(https\://i.hd-r.cn/e5944e4c794e1a94819641c0a38ba787.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/23/xhI98.png)" class="imgbox" onclick="changeBg('url(https\://api.ixiaowai.cn/gqapi/gqapi.php)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/23/xhdZN.png)" class="imgbox" onclick="changeBg('url(https\://api.r10086.com/img-api.php?type=????????????)')"></a>
        </div>
    </div>
    </details>

    <details class="toggle" =""><summary class="toggle-button" style="">??????????????????</summary>
    <div class="toggle-content">
        <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/47a7ec6716eb5b0dc890e9d3cfcb0a35.jpg)" class="pimgbox" onclick="changeBg('url(https\://i.hd-r.cn/47a7ec6716eb5b0dc890e9d3cfcb0a35.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/522f9361e3e049457b5f89c8b2be4b7c.jpg)" class="pimgbox" onclick="changeBg('url(https\://i.hd-r.cn/522f9361e3e049457b5f89c8b2be4b7c.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/30ac4b9bfcaccc71e8bcf0f59ce1437e.jpg)" class="pimgbox" onclick="changeBg('url(https\://i.hd-r.cn/30ac4b9bfcaccc71e8bcf0f59ce1437e.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/c69da0ce7c2c83f81ca447ba28ecd293.jpg)" class="pimgbox" onclick="changeBg('url(https\://i.hd-r.cn/c69da0ce7c2c83f81ca447ba28ecd293.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/bfedbd8587210ff63bd4a4b1487fd9cb.jpg)" class="pimgbox" onclick="changeBg('url(https\://i.hd-r.cn/bfedbd8587210ff63bd4a4b1487fd9cb.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/e796a9c4206dcb68f39851dabf4cf470.jpg)" class="pimgbox" onclick="changeBg('url(https\://i.hd-r.cn/e796a9c4206dcb68f39851dabf4cf470.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/23/x5DOQ.png)" class="pimgbox" onclick="changeBg('url(https\://api.isoyu.com/mm_images.php)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/23/xh3NF.png)" class="pimgbox" onclick="changeBg('url(https\://api.wuque.cc/random/images)')"></a>
        </div>
    </div>
    </details>

    <details class="toggle" =""><summary class="toggle-button" style="">??????????????????</summary>
    <div class="toggle-content">
        <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.hd-r.cn/3210f51642e2f8d2434f09b0980c9cbf.png)" class="imgbox" onclick="changeBg('url(https\://i.hd-r.cn/3210f51642e2f8d2434f09b0980c9cbf.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/24/7favw.jpeg)" class="imgbox" onclick="changeBg('url(https\://i.328888.xyz/2023/02/24/7favw.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/24/7fTmz.jpeg)" class="imgbox" onclick="changeBg('url(https\://i.328888.xyz/2023/02/24/7fTmz.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/24/7fQya.jpeg)" class="imgbox" onclick="changeBg('url(https\://i.328888.xyz/2023/02/24/7fQya.jpeg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/23/xhpHE.png)" class="imgbox" onclick="changeBg('url(https\://api.ixiaowai.cn/api/api.php)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.328888.xyz/2023/02/23/xhcuQ.png)" class="imgbox" onclick="changeBg('url(https\://www.dmoe.cc/random.php)')"></a>
        </div>
    </div>
    </details>

    <details class="toggle" =""><summary class="toggle-button" style="">??????????????????</summary>
    <div class="toggle-content">
        <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff4b1f, #1fddff)" onclick="changeBg('linear-gradient(to right, #ff4b1f, #1fddff)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))" onclick="changeBg('linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #16bffd, #cb3066)" onclick="changeBg('linear-gradient(to right, #16bffd, #cb3066)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))" onclick="changeBg('linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #6cbcbf, #96d7c6)" onclick="changeBg('linear-gradient(to right, #6cbcbf, #96d7c6)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #bac94a, #e2d36b)" onclick="changeBg('linear-gradient(to right, #bac94a, #e2d36b)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #a8dee0, #f9e2ae)" onclick="changeBg('linear-gradient(to right, #a8dee0, #f9e2ae)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #f9e2ae, #a7d676)" onclick="changeBg('linear-gradient(to right, #f9e2ae, #a7d676)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #bce6ff, #015c92)" onclick="changeBg('linear-gradient(to right, #bce6ff, #015c92)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #cdb3d4, #ffbe88)" onclick="changeBg('linear-gradient(to right, #cdb3d4, #ffbe88)')"></a>
        </div>
    </div>
    </details>

    <details class="toggle" =""><summary class="toggle-button" style="">??????????????????</summary>
    <div class="toggle-content">
        <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F2D7D9" onclick="changeBg('#F2D7D9')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #76BA99" onclick="changeBg('#76BA99')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #9FC088" onclick="changeBg('#9FC088')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #00FFFF" onclick="changeBg('#00FFFF')"></a> 
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #E6E8FA" onclick="changeBg('#E6E8FA')"></a> 
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #238E23" onclick="changeBg('#238E23')"></a> 
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #EAADEA" onclick="changeBg('#EAADEA')"></a> 
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #CDCDCD" onclick="changeBg('#CDCDCD')"></a> 
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #CC3299" onclick="changeBg('#CC3299')"></a> 
        <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #A67D3D" onclick="changeBg('#A67D3D')"></a> 
        </div>
    </div>
    </details>
`;
}

// ??????????????????
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10??????
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// ???????????????????????????????????????????????????????????????????????????????????????
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}
// ?????????????????????END

/* ???????????????  */
// ???????????????????????????????????????
if (document.getElementById('post-comment')) owoBig();
// ????????????
function owoBig() {
    let flag = 1, // ???????????????
        owo_time = '', // ???????????????
        m = 3; // ??????????????????
    // ????????????
    let div = document.createElement('div'),
        body = document.querySelector('body');
    // ??????ID
    div.id = 'owo-big';
    // ????????????
    body.appendChild(div)

    // ??????observer
    let observer = new MutationObserver(mutations => {

        for (let i = 0; i < mutations.length; i++) {
            let dom = mutations[i].addedNodes,
                owo_body = '';
            if (dom.length == 2 && dom[1].className == 'OwO-body') owo_body = dom[1];
            // ?????????????????????????????????????????????????????????????????????
            // else if (dom.length == 1 && dom[0].className == 'tk-comment') owo_body = dom[0];
            else continue;

            // ?????????????????????????????????????????????????????????????????????????????????
            if (document.body.clientWidth <= 768) owo_body.addEventListener('contextmenu', e => e.preventDefault());
            // ????????????
            owo_body.onmouseover = (e) => {
                if (flag && e.target.tagName == 'IMG') {
                    flag = 0;
                    // ??????300?????????????????????
                    owo_time = setTimeout(() => {
                        let height = e.target.clientHeight * m, // ????????? 2023-02-16??????
                            width = e.target.clientWidth * m, // ????????? 2023-02-16??????
                            left = (e.x - e.offsetX) - (width - e.target.clientWidth) / 2, // ??????????????????????????? 2023-02-16??????
                            top = e.y - e.offsetY; // ???????????????????????????

                        if ((left + width) > body.clientWidth) left -= ((left + width) - body.clientWidth + 10); // ????????????????????????????????????
                        if (left < 0) left = 10; // ????????????????????????????????????
                        // ??????????????????
                        div.style.cssText = `display:flex; height:${height}px; width:${width}px; left:${left}px; top:${top}px;`;
                        // ????????????????????????
                        div.innerHTML = `<img src="${e.target.src}">`
                    }, 300);
                }
            };
            // ????????????????????????
            owo_body.onmouseout = () => { div.style.display = 'none', flag = 1, clearTimeout(owo_time); }
        }

    })
    observer.observe(document.getElementById('post-comment'), { subtree: true, childList: true }) // ????????? ?????? ??? ?????????
}
/* ???????????????END  */