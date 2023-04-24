window.addEventListener('load', function() {
    var banner = document.querySelector('.banner');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var circle = document.querySelector('.gd');
    var bannerWidth = banner.offsetWidth;
    var ul = banner.querySelector('ul');
    var num = 0;

    //鼠标移动盒子内让按钮显示
    banner.addEventListener('mouseenter', function() {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(autoPlay);
        autoPlay = null; //清除定时器
    })
    banner.addEventListener('mouseleave', function() {
        prev.style.display = 'none';
        next.style.display = 'none';
        autoPlay = setInterval(function() {
            //手动调用点击事件
            next.click();
        }, 2000);
    });

    //设置ul的宽度
    var nums = ul.children.length;
    ul.style.width = nums * bannerWidth + 'px';

    //动态创建底部小圆点
    for (var k = 0; k < nums; k++) {
        let i = document.createElement('i');
        circle.appendChild(i);
        i.setAttribute('index', k);
        i.addEventListener('click', function() {
            num = this.getAttribute('index');
            animation(ul, -num * bannerWidth);
            currents();
        });
    }


    //为按钮prev，next加事件
    circle.children[num].className = 'current';
    //判断有没有执行完动画
    var flag = true;
    next.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == nums - 1) {
                animation(ul, 0);
                num = 0;
                flag = true;
            } else {
                num++;
                animation(ul, -num * bannerWidth, function() {
                    flag = true;
                });
            }
            currents();
        }
    });

    prev.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                animation(ul, -nums * bannerWidth - 1);
                num = nums - 1;
                flag = true;
            } else {
                num--;
                animation(ul, -num * bannerWidth, function() {
                    flag = true;
                });
            }
            currents();
        }
    });


    function currents() {
        for (var a = 0; a < nums; a++) {
            circle.children[a].className = '';
        }
        circle.children[num].className = 'current';
    }
    //无缝播放
    var li = ul.children[0].cloneNode(true);
    ul.appendChild(li);

    //自动播放
    var autoPlay = setInterval(function() {
        //手动调用点击事件
        next.click();
    }, 2000);
})