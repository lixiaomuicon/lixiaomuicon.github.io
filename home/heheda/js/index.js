// 获取必要参数
let title = document.title;
if (!navigator.share) {
	document.getElementById("cd-top").style.display = "none";
}

//页面载入设置
if (navigator.userAgent.match(/(MSIE|rv:11\.0)/)) {
	document.body.classList.add("is-ie");
}
document.onreadystatechange = function() {
	if (document.readyState === "complete") {
		eventHandler();
		document.body.classList.remove("is-loading");
	}
}

//网页飘落效果
function eventHandler() {
	$('body').wpSuperSnow({
		flakes: ['./heheda/image/007.png', './heheda/image/006.png', './heheda/image/004.png',
			'./heheda/image/005.png', './heheda/image/001.png', './heheda/image/003.png',
			'./heheda/image/002.png', './heheda/image/008.png'
		],
		totalFlakes: '100',
		zIndex: '999999999',
		maxSize: '30',
		maxDuration: '50',
		useFlakeTrans: false
	});
}

//分享设置
function call() {
	navigator.share({
		title: title,
		url: window.location.href,
		text: '赵彤刚的工具箱'
	});
}

// 通知
if ("Notification" in window) {
	if (window.Notification.permission == "granted") {
		sendNotification();
	} else if (window.Notification.permission != "denied") {
		window.Notification.requestPermission(function(permission) {
			sendNotification();
		});
	}
}

function sendNotification() {
	new Notification("赵彤刚的小屋", {
		body: '久违了我的朋友，欢迎您的访问！',
		icon: './heheda/icon/128.png'
	})
}

// 标题判断
function istitle() {
	if (document.hidden) {
		//当窗口不可见
		document.title = '(つ ェ ⊂)我藏好了哦~';
	} else {
		//当窗口可见
		document.title = '(*゜ロ゜)ノ被发现了~';
		setTimeout("document.title=title", 3000);
	}
};
document.addEventListener('visibilitychange', istitle);

// 版权
console.log("%c赵彤刚%c版权所有", "font-size:15px;padding:3px;color:white;background:#023047",
	"font-size:15px;padding:3px;color:white;background:#219EBC");
console.log("%c本人寻求一份前端开发的工作，有意者请联系%c\n%cTEL:15327682114%c\n%c微信:16699352957",
	"font-size:15px;padding:3px;color:white;background:#023047", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC");
