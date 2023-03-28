<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>图片瀑布</title>
<link rel="shortcut icon" type=image/png href=https://i.328888.xyz/2023/03/01/zv9Hw.png>

<!---<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,500,700" rel="stylesheet">--->
<style>
	*,
*::after,
*::before {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

body {
	font-family: 'Roboto Mono', monospace;
	font-size: 14px;
	font-weight: 500;
	color: #82888a;
	background: #2c2d31;
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
}

.js .loading::before,
.js .loading::after {
	content: '';
	position: fixed;
	z-index: 1000;
}

.loading::before {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #2c2d31;
}

.loading::after {
	top: 50%;
	left: 50%;
	width: 40px;
	height: 40px;
	margin: -20px 0 0 -20px;
	border: 8px solid #383a41;
	border-bottom-color: #565963;
	border-radius: 50%;
	animation: animLoader 0.8s linear infinite forwards;
}

@keyframes animLoader {
	to { transform: rotate(360deg); }
}

a {
	text-decoration: none;
	color: #f2f2f2;
	outline: none;
}

a:hover,
a:focus {
	color: #e6629a;
}

.hidden {
	position: absolute;
	overflow: hidden;
	width: 0;
	height: 0;
	pointer-events: none;
}

main {
	display: flex;
	flex-wrap: wrap;
}

/* Icons */
.icon {
	display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
}

.content--side {
	position: relative;
	z-index: 100;
	width: 15vw;
	min-width: 130px;
	max-height: 100vh;
	padding: 0 1em;
	order: 2;
}

.content--center {
	flex: 1;
	max-width: calc(100vw - 260px);
	order: 3;
}

.content--right {
	order: 4;
}

.content--related {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	padding: 8em 1em 3em;
	text-align: center;
	order: 5;
}

.media-related {
	width: 100%;
}

.media-item {
	padding: 1em;
}

.media-item__img {
	max-width: 100%;
	opacity: 0.7;
	transition: opacity 0.3s;
}

.media-item:hover .media-item__img,
.media-item:focus .media-item__img {
	opacity: 1;
}

.media-item__title {
	font-size: 1em;
	max-width: 220px;
	padding: 0.5em;
	margin: 0 auto;
}

/* Header */
.codrops-header {
	position: relative;
	z-index: 100;
	display: flex;
	align-items: center;
	width: 100%;
	padding: 3em 1em 4em;
	order: 1;
}

.codrops-header__title {
	font-size: 1em;
	font-weight: normal;
	flex: 1;
	margin: 0 7em 0 0;
	text-align: center;
	text-transform: lowercase;
}

.codrops-header__title::before,
.codrops-header__title::after {
	font-size: 22px;
	font-weight: bold;
	display: inline-block;
	padding: 0 0.25em;
	color: #42454c;
}

.codrops-header__title::after {
	content: '\2309';
	vertical-align: sub;
}

.codrops-header__title::before {
	content: '\230A';
}

/* GitHub corner */
.github-corner {
	position: absolute;
	top: 0;
	right: 0;
}

.github-corner__svg {
	fill: #82888a;
	color: #2c2d31;
	position: absolute; 
	top: 0; 
	border: 0; 
	right: 0;
}

.github-corner:hover .octo-arm {
	animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
	0%,
	100% {
		transform: rotate(0);
	}
	20%,
	60% {
		transform: rotate(-25deg);
	}
	40%,
	80% {
		transform: rotate(10deg);
	}
}

@media (max-width:500px) {
	.github-corner:hover .octo-arm {
		animation: none;
	}
	.github-corner .octo-arm {
		animation: octocat-wave 560ms ease-in-out;
	}
}


/* Top Navigation Style */
.codrops-links {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 2.75em;
	margin: 0 0 0 2.25em;
	text-align: center;
	white-space: nowrap;
	background: #1f2125;
}

.codrops-links::after {
	content: '';
	position: absolute;
	top: -10%;
	left: calc(50% - 1px);
	width: 2px;
	height: 120%;
	background: #2c2d31;
	transform: rotate3d(0,0,1,22.5deg);
}

.codrops-icon {
	display: inline-block;
	padding: 0 0.65em;
}

/* Controls */
.control--grids {
	margin: 0 0 2.5em;
	text-align: right;
}

.control__title {
	font-size: 0.85em;
	display: block;
	width: 100%;
	margin: 0 0 1em;
	color: #e6629a;
}

.control__item {
	position: relative;
	display: block;
	margin: 0 0 0.5em;
}

.control__radio {
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
	opacity: 0;
}

.control__label {
	white-space: nowrap;
}

.control__radio:checked + .control__label {
	color: #fff;
	background: #673ab7;
}

.control__radio:not(:checked):hover + .control__label,
.control__btn:hover {
	color: white;
}

.control__btn {
	display: block;
	width: 100%;
	margin: 0 0 0.5em;
	padding: 0;
	text-align: left;
	color: inherit;
	border: none;
	background: none;
}

.control__btn:focus {
	outline: none;
}

/* Grid */

.grid {
	position: relative;
	z-index: 2;
	display: block;
	margin: 0 auto;
}

.grid--hidden {
	position: fixed !important;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	pointer-events: none;
	opacity: 0;
}

.js .grid--loading::before,
.js .grid--loading::after {
	content: '';
	z-index: 1000;
}

.js .grid--loading::before {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: #2c2d31;
}

.js .grid--loading::after {
	position: absolute;
	top: calc(25vh - 20px);
	left: 50%;
	width: 40px;
	height: 40px;
	margin: 0 0 0 -20px;
	border: 8px solid #383a41;
	border-bottom-color: #565963;
	border-radius: 50%;
	animation: animLoader 0.8s linear forwards infinite;
}

.grid__sizer {
	margin-bottom: 0 !important;
}

.grid__link,
.grid__img {
	display: block;
}

.grid__img {
	width: 100%;
}

.grid__deco {
	position: absolute;
	top: 0;
	left: 0;
	pointer-events: none;
}

.grid__deco path {
	fill: none;
	stroke: #fff;
	stroke-width: 2px;
}

.grid__reveal {
	position: absolute;
	z-index: 50;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	opacity: 0;
	background-color: #2c2d31;
}

.grid .grid__item,
.grid .grid__sizer {
	width: calc(50% - 20px);
	margin: 0 10px 20px;
}

@media screen and (min-width: 60em) {
	.grid .grid__item,
	.grid .grid__sizer {
		width: calc((100% / 3) - 20px);
		margin: 0 10px 20px;
	}
}

@media screen and (min-width: 70em) {
	.grid .grid__item,
	.grid .grid__sizer {
		width: calc(25% - 30px);
		margin: 0 15px 30px;
	}
	/* Grid types */
	.grid--type-b .grid__item,
	.grid--type-b .grid__sizer {
		width: calc(20% - 20px);
		margin: 0 10px 20px;
	}

	.grid--type-c .grid__item,
	.grid--type-c .grid__sizer {
		width: calc(25% - 16px);
		margin: 0 8px 16px;
	}
}

@media screen and (max-width: 50em) {
	main {
		display: block;
	}
	.codrops-header {
		padding: 1em;
		flex-wrap: wrap;
	}
	.codrops-links {
		margin: 0;
	}
	.codrops-header__title {
		width: 100%;
		text-align: left;
		flex: none;
		margin: 1em 0;
	}
	.content--side {
		width: 100%;
	}
	.content--right {
		order: 3;
	}
	.content--center {
		max-width: 100vw;
	}
	.control {
		margin: 0 0 1em;
		text-align: left;
	}
	.control__item,
	.control__btn {
		display: inline-block;
	}
	.control__btn {
		width: auto;
	}
}

</style>
<style>
	article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}dfn{font-style:italic;}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em;}pre{white-space:pre-wrap;}q{quotes:"\201C" "\201D" "\2018" "\2019";}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img{border:0;}svg:not(:root){overflow:hidden;}figure{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,select{text-transform:none;}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;}button[disabled],html input[disabled]{cursor:default;}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}
</style>
<!-- <link rel="stylesheet" type="text/css" href="sponsor/pater.css" /> -->

<script>document.documentElement.className = 'js';</script>

</head>
<body class="loading">

<main>
	<header class="codrops-header"></header>
	<div class="content content--side">
		<div class="control control--grids">
			<span class="control__title">switch layout</span>
			<div class="control__item">
				<input class="control__radio" type="radio" name="grid-type" value="grid--type-a" id="control-grid-a" checked>
				<label class="control__label" for="control-grid-a">grid A</label>
			</div>
			<div class="control__item">
				<input class="control__radio" type="radio" name="grid-type" value="grid--type-b" id="control-grid-b">
				<label class="control__label" for="control-grid-b">grid B</label>
			</div>
			<div class="control__item">
				<input class="control__radio" type="radio" name="grid-type" value="grid--type-c" id="control-grid-c">
				<label class="control__label" for="control-grid-c">grid C</label>
			</div>
		</div>	
	</div>
	<div class="content content--side content--right">
		<div class="control control--effects">
			<span class="control__title">run effect</span>
			<button class="control__btn" data-fx="Hapi">Hapi</button>
			<button class="control__btn" data-fx="Amun">Amun</button>
			<button class="control__btn" data-fx="Kek">Kek</button>
			<button class="control__btn" data-fx="Isis">Isis</button>
			<button class="control__btn" data-fx="Montu">Montu</button>
			<button class="control__btn" data-fx="Osiris">Osiris</button>
			<button class="control__btn" data-fx="Satet">Satet</button>
			<button class="control__btn" data-fx="Atum">Atum</button>
			<button class="control__btn" data-fx="Ra">Ra</button>
			<button class="control__btn" data-fx="Sobek">Sobek</button>
			<button class="control__btn" data-fx="Ptah">Ptah</button>
			<button class="control__btn" data-fx="Bes">Bes</button>
			<button class="control__btn" data-fx="Seker">Seker</button>
			<button class="control__btn" data-fx="Nut">Nut</button>
			<button class="control__btn" data-fx="Shu">Shu</button>
		</div>
	</div>
	<div class="content content--center">
		<div class="grid grid--type-a">
			<div class="grid__sizer"></div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/1.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/2.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link pater" href="http://synd.co/2oQTgFH">
					<div class="pater__img"></div>
					<div class="pater__content">
						<h2 class="pater__title" aria-label="fullstory">See Every Click, Swipe, <br> and Scroll</h2>
						<p class="pater__desc">See how users experience your designs with FullStory.</p>
						<span class="pater__call">Get it free today!</span>
					</div>
				</a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/3.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/4.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/5.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/6.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/7.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/8.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/9.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/10.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/11.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/2.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/4.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/8.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/10.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/1.jpg" alt="Some image" /></a>
			</div>
		</div>
		<div class="grid grid--type-b">
			<div class="grid__sizer"></div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/11.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/5.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link pater pater--small" href="http://synd.co/2oQTgFH">
					<div class="pater__img"></div>
					<div class="pater__content">
						<h2 class="pater__title" aria-label="fullstory">See Every Click, Swipe, <br> and Scroll</h2>
						<p class="pater__desc">See how users experience your designs with FullStory.</p>
						<span class="pater__call">Get it free today!</span>
					</div>
				</a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/2.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/1.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/4.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/6.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/7.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/8.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/5.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/2.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/3.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/4.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/5.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/6.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/7.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/8.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/1.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/2.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/3.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/4.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/5.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/6.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/7.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/8.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set1/11.jpg" alt="Some image" /></a>
			</div>
		</div>
		<div class="grid grid--type-c">
			<div class="grid__sizer"></div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/1.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/2.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link pater" href="http://synd.co/2oQTgFH">
					<div class="pater__img"></div>
					<div class="pater__content">
						<h2 class="pater__title" aria-label="fullstory">See Every Click, Swipe, <br> and Scroll</h2>
						<p class="pater__desc">See how users experience your designs with FullStory.</p>
						<span class="pater__call">Get it free today!</span>
					</div>
				</a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/3.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/4.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/5.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/6.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/10.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/11.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/7.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/8.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/9.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/2.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/4.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/6.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/8.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/10.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/1.jpg" alt="Some image" /></a>
			</div>
			<div class="grid__item">
				<a class="grid__link" href="#"><img class="grid__img" src="img/set3/2.jpg" alt="Some image" /></a>
			</div>
		</div>
	</div>
	
</main>

<script>
	/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
</script>
<script>/*!
 * Masonry PACKAGED v4.1.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,z=d&&s,b=t(r.width);b!==!1&&(a.width=b+(z?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(z?0:g+E)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+E),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),r=Math.min.apply(Math,o),s=o.indexOf(r),a={x:this.columnWidth*s,y:r},h=r+t.size.outerHeight,u=this.cols+1-o.length,d=0;u>d;d++)this.colYs[s+d]=h;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
</script>
<script>
	/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this=this;
(function(u,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():u.anime=r()})(this,function(){function u(a){if(!g.col(a))try{return document.querySelectorAll(a)}catch(b){}}function r(a){return a.reduce(function(a,c){return a.concat(g.arr(c)?r(c):c)},[])}function v(a){if(g.arr(a))return a;g.str(a)&&(a=u(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function E(a,b){return a.some(function(a){return a===b})}
function z(a){var b={},c;for(c in a)b[c]=a[c];return b}function F(a,b){var c=z(a),d;for(d in a)c[d]=b.hasOwnProperty(d)?b[d]:a[d];return c}function A(a,b){var c=z(a),d;for(d in b)c[d]=g.und(a[d])?b[d]:a[d];return c}function R(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,h){return b+b+c+c+h+h});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var c=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+c+","+b+")"}function S(a){function b(a,b,c){0>
c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}var c=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);a=parseInt(c[1])/360;var d=parseInt(c[2])/100,c=parseInt(c[3])/100;if(0==d)d=c=a=c;else{var e=.5>c?c*(1+d):c+d-c*d,k=2*c-e,d=b(k,e,a+1/3),c=b(k,e,a);a=b(k,e,a-1/3)}return"rgb("+255*d+","+255*c+","+255*a+")"}function w(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a))return a[2]}function T(a){if(-1<a.indexOf("translate"))return"px";
if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function G(a,b){return g.fnc(a)?a(b.target,b.id,b.total):a}function B(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function H(a,b){if(g.dom(a)&&E(U,b))return"transform";if(g.dom(a)&&(a.getAttribute(b)||g.svg(a)&&a[b]))return"attribute";if(g.dom(a)&&"transform"!==b&&B(a,b))return"css";if(null!=a[b])return"object"}function V(a,b){var c=T(b),c=-1<b.indexOf("scale")?
1:0+c;a=a.style.transform;if(!a)return c;for(var d=[],e=[],k=[],h=/(\w+)\((.+?)\)/g;d=h.exec(a);)e.push(d[1]),k.push(d[2]);a=k.filter(function(a,c){return e[c]===b});return a.length?a[0]:c}function I(a,b){switch(H(a,b)){case "transform":return V(a,b);case "css":return B(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0}function J(a,b){var c=/^(\*=|\+=|-=)/.exec(a);if(!c)return a;b=parseFloat(b);a=parseFloat(a.replace(c[0],""));switch(c[0][0]){case "+":return b+a;case "-":return b-a;case "*":return b*
a}}function C(a){return g.obj(a)&&a.hasOwnProperty("totalLength")}function W(a,b){function c(c){c=void 0===c?0:c;return a.el.getPointAtLength(1<=b+c?b+c:0)}var d=c(),e=c(-1),k=c(1);switch(a.property){case "x":return d.x;case "y":return d.y;case "angle":return 180*Math.atan2(k.y-e.y,k.x-e.x)/Math.PI}}function K(a,b){var c=/-?\d*\.?\d+/g;a=C(a)?a.totalLength:a;if(g.col(a))b=g.rgb(a)?a:g.hex(a)?R(a):g.hsl(a)?S(a):void 0;else{var d=w(a);a=d?a.substr(0,a.length-d.length):a;b=b?a+b:a}b+="";return{original:b,
numbers:b.match(c)?b.match(c).map(Number):[0],strings:b.split(c)}}function X(a,b){return b.reduce(function(b,d,e){return b+a[e-1]+d})}function L(a){return(a?r(g.arr(a)?a.map(v):v(a)):[]).filter(function(a,c,d){return d.indexOf(a)===c})}function Y(a){var b=L(a);return b.map(function(a,d){return{target:a,id:d,total:b.length}})}function Z(a,b){var c=z(b);if(g.arr(a)){var d=a.length;2!==d||g.obj(a[0])?g.fnc(b.duration)||(c.duration=b.duration/d):a={value:a}}return v(a).map(function(a,c){c=c?0:b.delay;
a=g.obj(a)&&!C(a)?a:{value:a};g.und(a.delay)&&(a.delay=c);return a}).map(function(a){return A(a,c)})}function aa(a,b){var c={},d;for(d in a){var e=G(a[d],b);g.arr(e)&&(e=e.map(function(a){return G(a,b)}),1===e.length&&(e=e[0]));c[d]=e}c.duration=parseFloat(c.duration);c.delay=parseFloat(c.delay);return c}function ba(a){return g.arr(a)?x.apply(this,a):M[a]}function ca(a,b){var c;return a.tweens.map(function(d){d=aa(d,b);var e=d.value,k=I(b.target,a.name),h=c?c.to.original:k,h=g.arr(e)?e[0]:h,n=J(g.arr(e)?
e[1]:e,h),k=w(n)||w(h)||w(k);d.isPath=C(e);d.from=K(h,k);d.to=K(n,k);d.start=c?c.end:a.offset;d.end=d.start+d.delay+d.duration;d.easing=ba(d.easing);d.elasticity=(1E3-Math.min(Math.max(d.elasticity,1),999))/1E3;g.col(d.from.original)&&(d.round=1);return c=d})}function da(a,b){return r(a.map(function(a){return b.map(function(b){var c=H(a.target,b.name);if(c){var d=ca(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})).filter(function(a){return!g.und(a)})}
function N(a,b,c){var d="delay"===a?Math.min:Math.max;return b.length?d.apply(Math,b.map(function(b){return b[a]})):c[a]}function ea(a){var b=F(fa,a),c=F(ga,a),d=Y(a.targets),e=[],g=A(b,c),h;for(h in a)g.hasOwnProperty(h)||"targets"===h||e.push({name:h,offset:g.offset,tweens:Z(a[h],c)});a=da(d,e);return A(b,{animatables:d,animations:a,duration:N("duration",a,c),delay:N("delay",a,c)})}function m(a){function b(){return window.Promise&&new Promise(function(a){return P=a})}function c(a){return f.reversed?
f.duration-a:a}function d(a){for(var b=0,c={},d=f.animations,e={};b<d.length;){var g=d[b],h=g.animatable,n=g.tweens;e.tween=n.filter(function(b){return a<b.end})[0]||n[n.length-1];e.isPath$0=e.tween.isPath;e.round=e.tween.round;e.eased=e.tween.easing(Math.min(Math.max(a-e.tween.start-e.tween.delay,0),e.tween.duration)/e.tween.duration,e.tween.elasticity);n=X(e.tween.to.numbers.map(function(a){return function(b,c){c=a.isPath$0?0:a.tween.from.numbers[c];b=c+a.eased*(b-c);a.isPath$0&&(b=W(a.tween.value,
b));a.round&&(b=Math.round(b*a.round)/a.round);return b}}(e)),e.tween.to.strings);ha[g.type](h.target,g.property,n,c,h.id);g.currentValue=n;b++;e={isPath$0:e.isPath$0,tween:e.tween,eased:e.eased,round:e.round}}if(c)for(var k in c)D||(D=B(document.body,"transform")?"transform":"-webkit-transform"),f.animatables[k].target.style[D]=c[k].join(" ");f.currentTime=a;f.progress=a/f.duration*100}function e(a){if(f[a])f[a](f)}function g(){f.remaining&&!0!==f.remaining&&f.remaining--}function h(a){var h=f.duration,
k=f.offset,m=f.delay,O=f.currentTime,p=f.reversed,q=c(a),q=Math.min(Math.max(q,0),h);q>k&&q<h?(d(q),!f.began&&q>=m&&(f.began=!0,e("begin")),e("run")):(q<=k&&0!==O&&(d(0),p&&g()),q>=h&&O!==h&&(d(h),p||g()));a>=h&&(f.remaining?(t=n,"alternate"===f.direction&&(f.reversed=!f.reversed)):(f.pause(),P(),Q=b(),f.completed||(f.completed=!0,e("complete"))),l=0);if(f.children)for(a=f.children,h=0;h<a.length;h++)a[h].seek(q);e("update")}a=void 0===a?{}:a;var n,t,l=0,P=null,Q=b(),f=ea(a);f.reset=function(){var a=
f.direction,b=f.loop;f.currentTime=0;f.progress=0;f.paused=!0;f.began=!1;f.completed=!1;f.reversed="reverse"===a;f.remaining="alternate"===a&&1===b?2:b};f.tick=function(a){n=a;t||(t=n);h((l+n-t)*m.speed)};f.seek=function(a){h(c(a))};f.pause=function(){var a=p.indexOf(f);-1<a&&p.splice(a,1);f.paused=!0};f.play=function(){f.paused&&(f.paused=!1,t=0,l=f.completed?0:c(f.currentTime),p.push(f),y||ia())};f.reverse=function(){f.reversed=!f.reversed;t=0;l=c(f.currentTime)};f.restart=function(){f.pause();
f.reset();f.play()};f.finished=Q;f.reset();f.autoplay&&f.play();return f}var fa={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},ga={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},U="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),D,g={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},svg:function(a){return a instanceof
SVGElement},dom:function(a){return a.nodeType||g.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return g.hex(a)||g.rgb(a)||g.hsl(a)}},x=function(){function a(a,c,d){return(((1-3*d+3*c)*a+(3*d-6*c))*a+3*c)*a}return function(b,c,d,e){if(0<=b&&1>=b&&
0<=d&&1>=d){var g=new Float32Array(11);if(b!==c||d!==e)for(var h=0;11>h;++h)g[h]=a(.1*h,b,d);return function(h){if(b===c&&d===e)return h;if(0===h)return 0;if(1===h)return 1;for(var k=0,l=1;10!==l&&g[l]<=h;++l)k+=.1;--l;var l=k+(h-g[l])/(g[l+1]-g[l])*.1,n=3*(1-3*d+3*b)*l*l+2*(3*d-6*b)*l+3*b;if(.001<=n){for(k=0;4>k;++k){n=3*(1-3*d+3*b)*l*l+2*(3*d-6*b)*l+3*b;if(0===n)break;var m=a(l,b,d)-h,l=l-m/n}h=l}else if(0===n)h=l;else{var l=k,k=k+.1,f=0;do m=l+(k-l)/2,n=a(m,b,d)-h,0<n?k=m:l=m;while(1e-7<Math.abs(n)&&
10>++f);h=m}return a(h,c,e)}}}}(),M=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var b="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),c={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],
[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},d={linear:x(.25,.25,.75,.75)},e={},k;for(k in c)e.type=k,c[e.type].forEach(function(a){return function(c,e){d["ease"+a.type+b[e]]=g.fnc(c)?c:x.apply($jscomp$this,c)}}(e)),e={type:e.type};return d}(),ha={css:function(a,b,c){return a.style[b]=
c},attribute:function(a,b,c){return a.setAttribute(b,c)},object:function(a,b,c){return a[b]=c},transform:function(a,b,c,d,e){d[e]||(d[e]=[]);d[e].push(b+"("+c+")")}},p=[],y=0,ia=function(){function a(){y=requestAnimationFrame(b)}function b(b){var c=p.length;if(c){for(var e=0;e<c;)p[e]&&p[e].tick(b),e++;a()}else cancelAnimationFrame(y),y=0}return a}();m.version="2.0.1";m.speed=1;m.running=p;m.remove=function(a){a=L(a);for(var b=p.length-1;0<=b;b--)for(var c=p[b],d=c.animations,e=d.length-1;0<=e;e--)E(a,
d[e].animatable.target)&&(d.splice(e,1),d.length||c.pause())};m.getValue=I;m.path=function(a,b){var c=g.str(a)?u(a)[0]:a,d=b||100;return function(a){return{el:c,property:a,totalLength:c.getTotalLength()*(d/100)}}};m.setDashoffset=function(a){var b=a.getTotalLength();a.setAttribute("stroke-dasharray",b);return b};m.bezier=x;m.easings=M;m.timeline=function(a){var b=m(a);b.duration=0;b.children=[];b.add=function(a){v(a).forEach(function(a){var c=a.offset,d=b.duration;a.autoplay=!1;a.offset=g.und(c)?
d:J(c,d);a=m(a);a.duration>d&&(b.duration=a.duration);b.children.push(a)});return b};return b};m.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return m});
</script>
<script>/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	/**
	 * GridLoaderFx obj.
	 */
	function GridLoaderFx(el, options) {
		this.el = el;
		this.items = this.el.querySelectorAll('.grid__item > .grid__link');
	}
	
	/**
	 * Effects.
	 */
	GridLoaderFx.prototype.effects = {
		'Hapi': {
			animeOpts: {
				duration: function(t,i) {
					return 600 + i*75;
				},
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				scale: [0,1]	
			}
		},
		'Amun': {
			// Sort target elements function.
			sortTargetsFn: function(a,b) {
				var aBounds = a.getBoundingClientRect(),
					bBounds = b.getBoundingClientRect();

				return (aBounds.left - bBounds.left) || (aBounds.top - bBounds.top);
			},
			animeOpts: {
				duration: function(t,i) {
					return 500 + i*50;
				},
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i * 20;
				},
				opacity: {
					value: [0,1],
					duration: function(t,i) {
						return 250 + i*50;
					},
					easing: 'linear'
				},
				translateY: [400,0]
			}
		},
		'Kek': {
			sortTargetsFn: function(a,b) {
				return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
			},
			animeOpts: {
				duration: 800,
				easing: [0.1,1,0.3,1],
				delay: function(t,i) {
					return i * 20;
				},
				opacity: {
					value: [0,1],
					duration: 600,
					easing: 'linear'
				},
				translateX: [-500,0],
				rotateZ: [15,0]
			}
		},
		'Isis': {
			animeOpts: {
				duration: 900,
				elasticity: 500,
				delay: function(t,i) {
					return i*15;
				},
				opacity: {
					value: [0,1],
					duration: 300,
					easing: 'linear'
				},
				translateX: function() {
					return [anime.random(0,1) === 0 ? 100 : -100,0];
				},
				translateY: function() {
					return [anime.random(0,1) === 0 ? 100 : -100,0];
				}
			}
		},
		'Montu': {
			perspective: 800,
			origin: '50% 0%',
			animeOpts: {
				duration: 1500,
				elasticity: 400,
				delay: function(t,i) {
					return i*75;
				},
				opacity: {
					value: [0,1],
					duration: 1000,
					easing: 'linear'
				},
				rotateX: [-90,0]
			}
		},
		'Osiris': {
			perspective: 3000,
			animeOpts: {
				duration: function() {
					return anime.random(500,1000)
				},
				easing: [0.2,1,0.3,1],
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					duration: 700,
					easing: 'linear'
				},
				translateZ: {
					value: [-3000,0],
					duration: 1000
				},
				rotateY: ['-1turns',0]
			}
		},
		'Satet': {
			animeOpts: {
				duration: 800,
				elasticity: 600,
				delay: function(t,i) {
					return i*100;
				},
				opacity: {
					value: [0,1],
					duration: 600,
					easing: 'linear'
				},
				scaleX: {
					value: [0.4,1]
				},
				scaleY: {
					value: [0.6,1],
					duration: 1000
				}
			}
		},
		'Atum': {
			sortTargetsFn: function(a,b) {
				var docScrolls = {top : document.body.scrollTop + document.documentElement.scrollTop},
					y1 = window.innerHeight + docScrolls.top,
					aBounds = a.getBoundingClientRect(),
					ay1 = aBounds.top + docScrolls.top + aBounds.height/2,
					bBounds = b.getBoundingClientRect(),
					by1 = bBounds.top + docScrolls.top + bBounds.height/2;

				return Math.abs(y1-ay1) - Math.abs(y1-by1);
			},
			perspective: 1000,
			origin: '50% 0%',
			animeOpts: {
				duration: 800,
				easing: [0.1,1,0.3,1],
				delay: function(t,i) {
					return i*35;
				},
				opacity: {
					value: [0,1],
					duration: 600,
					easing: 'linear'
				},
				translateX: [100,0],
				translateY: [-100,0],
				translateZ: [400,0],
				rotateZ: [10,0],
				rotateX: [75,0]
			}
		},
		'Ra': {
			origin: '50% 0%',
			animeOpts: {
				duration: 500,
				easing: 'easeOutBack',
				delay: function(t,i) {
					return i * 100;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				translateY: [400,0],
				scaleY: [
					{value: [3,0.6], delay: function(t,i) {return i * 100 + 120;}, duration: 300, easing: 'easeOutExpo'},
					{value: [0.6,1], duration: 1400, easing: 'easeOutElastic'}
				],
				scaleX: [
					{value: [0.9,1.05], delay: function(t,i) {return i * 100 + 120;}, duration: 300, easing: 'easeOutExpo'},
					{value: [1.05,1], duration: 1400, easing: 'easeOutElastic'}
				]
			}
		},
		'Sobek': {
			animeOpts: {
				duration: 600,
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i*100;
				},
				opacity: {
					value: [0,1],
					duration: 100,
					easing: 'linear'
				},
				translateX: function(t,i) {
					var docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft},
						x1 = window.innerWidth/2 + docScrolls.left,
						tBounds = t.getBoundingClientRect(),
						x2 = tBounds.left +docScrolls.left + tBounds.width/2;

					return [x1-x2,0];
				},
				translateY: function(t,i) {
					var docScrolls = {top : document.body.scrollTop + document.documentElement.scrollTop},
						y1 = window.innerHeight + docScrolls.top,
						tBounds = t.getBoundingClientRect(),
						y2 = tBounds.top + docScrolls.top + tBounds.height/2;

					return [y1-y2,0];
				},
				rotate: function(t,i) {
					var x1 = window.innerWidth/2,
						tBounds = t.getBoundingClientRect(),
						x2 = tBounds.left + tBounds.width/2;

					return [x2 < x1 ? 90 : -90,0];
				},
				scale: [0,1]
			}
		},
		'Ptah': {
			itemOverflowHidden: true,
			sortTargetsFn: function(a,b) {
				return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
			},
			origin: '100% 0%',
			animeOpts: {
				duration: 500,
				easing: 'easeOutExpo',
				delay: function(t,i) {
					return i * 20;
				},
				opacity: {
					value: [0,1],
					duration: 400,
					easing: 'linear'
				},
				rotateZ: [45,0]
			}
		},
		'Bes': {
			revealer: true,
			revealerOrigin: '100% 50%',
			animeRevealerOpts: {
				duration: 800,
				delay: function(t,i) {
					return i*75;
				},
				easing: 'easeInOutQuart',
				scaleX: [1,0]
			},
			animeOpts: {
				duration: 800,
				easing: 'easeInOutQuart',
				delay: function(t,i) {
					return i*75;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				scale: [0.8,1]
			}
		},
		'Seker': {
			revealer: true,
			revealerOrigin: '50% 100%',
			animeRevealerOpts: {
				duration: 500,
				delay: function(t,i) {
					return i*50;
				},
				easing: [0.7,0,0.3,1],
				translateY: [100,0],
				scaleY: [1,0]
			},
			animeOpts: {
				duration: 500,
				easing: [0.7,0,0.3,1],
				delay: function(t,i) {
					return i*50;
				},
				opacity: {
					value: [0,1],
					duration: 400,
					easing: 'linear'
				},
				translateY: [100,0],
				scale: [0.8,1]
			}
		},
		'Nut': {
			revealer: true,
			revealerColor: '#1d1d1d',
			itemOverflowHidden: true,
			animeRevealerOpts: {
				easing: 'easeOutCubic',
				delay: function(t,i) {
					return i*100;
				},
				translateX: [
					{value: ['101%','0%'], duration: 400 },
					{value: ['0%','-101%'], duration: 400}
				]
			},
			animeOpts: {
				duration: 900,
				easing: 'easeOutCubic',
				delay: function(t,i) {
					return 400+i*100;
				},
				opacity: {
					value: 1,
					duration: 1,
					easing: 'linear'
				},
				scale: [0.8,1]
			}
		},
		'Shu': {
			lineDrawing: true,
			animeLineDrawingOpts: {
				duration: 800,
				delay: function(t,i) {
					return i*150;
				},
				easing: 'easeInOutSine',
				strokeDashoffset: [anime.setDashoffset, 0],
				opacity: [
					{value: [0,1]},
					{value: [1,0], duration: 200, easing: 'linear', delay:500}
				]
			},
			animeOpts: {
				duration: 800,
				easing: [0.2,1,0.3,1],
				delay: function(t,i) {
					return i*150 + 800;
				},
				opacity: {
					value: [0,1],
					easing: 'linear'
				},
				scale: [0.5,1]
			}
		}
	};

	GridLoaderFx.prototype._render = function(effect) {
		// Reset styles.
		this._resetStyles();

		var self = this,
			effectSettings = this.effects[effect],
			animeOpts = effectSettings.animeOpts

		if( effectSettings.perspective != undefined ) {
			[].slice.call(this.items).forEach(function(item) { 
				item.parentNode.style.WebkitPerspective = item.parentNode.style.perspective = effectSettings.perspective + 'px';
			});
		}
		
		if( effectSettings.origin != undefined ) {
			[].slice.call(this.items).forEach(function(item) { 
				item.style.WebkitTransformOrigin = item.style.transformOrigin = effectSettings.origin;
			});
		}

		if( effectSettings.lineDrawing != undefined ) {
			[].slice.call(this.items).forEach(function(item) { 
				// Create SVG.
				var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
					path = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
					itemW = item.offsetWidth,
					itemH = item.offsetHeight;

				svg.setAttribute('width', itemW + 'px');
				svg.setAttribute('height', itemH + 'px');
				svg.setAttribute('viewBox', '0 0 ' + itemW + ' ' + itemH);
				svg.setAttribute('class', 'grid__deco');
				path.setAttribute('d', 'M0,0 l' + itemW + ',0 0,' + itemH + ' -' + itemW + ',0 0,-' + itemH);
				path.setAttribute('stroke-dashoffset', anime.setDashoffset(path));
				svg.appendChild(path);
				item.parentNode.appendChild(svg);
			});

			var animeLineDrawingOpts = effectSettings.animeLineDrawingOpts;
			animeLineDrawingOpts.targets = this.el.querySelectorAll('.grid__deco > path');
			anime.remove(animeLineDrawingOpts.targets);
			anime(animeLineDrawingOpts);
		}

		if( effectSettings.revealer != undefined ) {
			[].slice.call(this.items).forEach(function(item) { 
				var revealer = document.createElement('div');
				revealer.className = 'grid__reveal';
				if( effectSettings.revealerOrigin != undefined ) {
					revealer.style.transformOrigin = effectSettings.revealerOrigin;
				}
				if( effectSettings.revealerColor != undefined ) {
					revealer.style.backgroundColor = effectSettings.revealerColor;
				}
				item.parentNode.appendChild(revealer);
			});

			var animeRevealerOpts = effectSettings.animeRevealerOpts;
			animeRevealerOpts.targets = this.el.querySelectorAll('.grid__reveal');
			animeRevealerOpts.begin = function(obj) {
				for(var i = 0, len = obj.animatables.length; i < len; ++i) {
					obj.animatables[i].target.style.opacity = 1;
				}
			};
			anime.remove(animeRevealerOpts.targets);
			anime(animeRevealerOpts);
		}

		if( effectSettings.itemOverflowHidden ) {
			[].slice.call(this.items).forEach(function(item) {
				item.parentNode.style.overflow = 'hidden';
			});
		}

		animeOpts.targets = effectSettings.sortTargetsFn && typeof effectSettings.sortTargetsFn === 'function' ? [].slice.call(this.items).sort(effectSettings.sortTargetsFn) : this.items;
		anime.remove(animeOpts.targets);
		anime(animeOpts);
	};

	GridLoaderFx.prototype._resetStyles = function() {
		this.el.style.WebkitPerspective = this.el.style.perspective = 'none';
		[].slice.call(this.items).forEach(function(item) {
			var gItem = item.parentNode;
			item.style.opacity = 0;
			item.style.WebkitTransformOrigin = item.style.transformOrigin = '50% 50%';
			item.style.transform = 'none';

			var svg = item.parentNode.querySelector('svg.grid__deco');
			if( svg ) {
				gItem.removeChild(svg);
			}

			var revealer = item.parentNode.querySelector('.grid__reveal');
			if( revealer ) {
				gItem.removeChild(revealer);
			}

			gItem.style.overflow = '';
		});
	};

	window.GridLoaderFx = GridLoaderFx;

	var body = document.body,
		grids = [].slice.call(document.querySelectorAll('.grid')), masonry = [],
		currentGrid = 0,
		// Switch grid radio buttons.
		switchGridCtrls = [].slice.call(document.querySelectorAll('.control__radio')),
		// Choose effect buttons.
		fxCtrls = [].slice.call(document.querySelectorAll('.control--effects > .control__btn')),
		// The GridLoaderFx instances.
		loaders = [],
		loadingTimeout;

	function init() {
		// Preload images
		imagesLoaded(body, function() {
			// Initialize Masonry on each grid.
			grids.forEach(function(grid) {
				var m = new Masonry(grid, {
					itemSelector: '.grid__item',
					columnWidth: '.grid__sizer',
					percentPosition: true,
					transitionDuration: 0
				});
				masonry.push(m);
				// Hide the grid.
				grid.classList.add('grid--hidden');
				// Init GridLoaderFx.
				loaders.push(new GridLoaderFx(grid));
			});

			// Show current grid.
			grids[currentGrid].classList.remove('grid--hidden');
			// Init/Bind events.
			initEvents();
			// Remove loading class from body
			body.classList.remove('loading');
		});
	}

	function initEvents() {
		// Switching grids radio buttons.
		switchGridCtrls.forEach(function(ctrl) {
			ctrl.addEventListener('click', switchGrid);
		});
		// Effect selection.
		fxCtrls.forEach(function(ctrl) {
			ctrl.addEventListener('click', applyFx);
		});
	}

	function switchGrid(ev) {
		// Hide current grid.
		grids[currentGrid].classList.add('grid--hidden');
		// New grid.
		var grid = grids.filter(function(obj) { return obj.classList.contains(ev.target.value); })[0];
		// Update currentGrid.
		currentGrid = grids.indexOf(grid);
		// Show new grid.
		grid.classList.remove('grid--hidden');
		masonry[currentGrid].layout();
	}

	function applyFx(ev) {
		// Simulate loading grid to show the effect.
		clearTimeout(loadingTimeout);
		grids[currentGrid].classList.add('grid--loading');

		loadingTimeout = setTimeout(function() {
			grids[currentGrid].classList.remove('grid--loading');

			// Apply effect.
			loaders[currentGrid]._render(ev.target.getAttribute('data-fx'));
		}, 500);
	}

	init();

})(window);
</script>


</body>
</html>
