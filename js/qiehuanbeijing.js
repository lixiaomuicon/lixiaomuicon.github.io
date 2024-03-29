// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
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

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div class="note pink fa-image"><p>有效期为一天,到期切回默认壁纸。<br>随机壁纸--刷新页面后会变哦~</p></div>
    <div id="article-container" style="padding:10px;"> 
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>

    
    <details class="toggle" =""><summary class="toggle-button" style="">查看电脑壁纸</summary>
    <div class="toggle-content">
        <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.MontBlancPeak_ZH-CN0459151326_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.MontBlancPeak_ZH-CN0459151326_1920x1080.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.MackenzieRiver_ZH-CN0214805768_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.MackenzieRiver_ZH-CN0214805768_1920x1080.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.PorcupineBay_ZH-CN2252758146_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.PorcupineBay_ZH-CN2252758146_1920x1080.jpg')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202306101624437.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202306101624437.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030901905.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030901905.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030901903.jpg)" class="imgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030901903.jpg)')"></a>
        </div>
    </div>
    </details>

    <details class="toggle" =""><summary class="toggle-button" style="">查看手机壁纸</summary>
    <div class="toggle-content">
        <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908358.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908358.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908359.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908359.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908361.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908361.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908362.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908362.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908363.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908363.jpg)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908364.jpg)" class="pimgbox" onclick="changeBg('url(https\://cdn.jsdelivr.net/gh/lixiaomuicon/photo_bed@main/img/202307030908364.jpg')"></a>
        </div>
    </div>
    </details>
    
    <details class="toggle" =""><summary class="toggle-button" style="">查看渐变背景</summary>
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

    <details class="toggle" =""><summary class="toggle-button" style="">查看纯色背景</summary>
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

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}
// 右下角切换背景END