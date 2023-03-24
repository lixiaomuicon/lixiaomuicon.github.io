
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>小沐导航</title>
  <meta name="keywords"
    content="互联网导航,导航网,设计师网站,互联网导航,百变鹏仔,上班族导航,程序员导航,新媒体运营导航,产品导航">
  <meta name="description" content="收录了设计师导航、程序员导航、产品经理导航、新媒体运营导航……">
  <link rel="shortcut icon" type=image/png  href=https://i.328888.xyz/2023/03/01/zv9Hw.png>
  <link rel="stylesheet" href="css/bootstrap.css" />
  <link rel="stylesheet" href="css/common.css" />
  <link rel="stylesheet" href="css/index.css" />
  <link rel="stylesheet" href="css/font/iconfont.css" />
  <meta data-n-head="true" name="viewport"
    content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0" />
  <meta name="360-site-verification" content="bc51822386675f1db7c4a90cdaffe56f" />
</head>

<body>
  <div id="navigation">
    <div class="container">
      <!-- 搜索区块 -->
      <div id="search" class="s-search">
        <div id="search-list" class="hide-type-list">
          <div class="s-type">
            <span></span>
            <div class="s-type-list">
              <label for="type-baidu">常用</label>
            </div>
          </div>
          <div class="search-group group-a s-current">
            <span class="type-text">常用</span>
            <ul class="search-type">
              <li><input checked="" hidden="" type="radio" name="type" id="type-baidu"
                  value="https://www.baidu.com/s?wd=" data-placeholder="试一下这里的百度搜索功能吧！" /><label for="type-baidu"><span
                    style="color:#4885ff">百度</span></label></li>
              <li><input type="radio" hidden="" name="type" id="type-google" value="http://www.google.com.hk/search?q="
                  data-placeholder="在谷歌中搜索" /><label for="type-google"><span style="color:#3B83FA">G</span><span
                    style="color:#F3442C">o</span><span style="color:#FFC300">o</span><span
                    style="color:#4696F8">g</span><span style="color:#2CAB4E">l</span><span
                    style="color:#F54231">e</span></label></li>
              <li><input hidden="" type="radio" name="type" id="type-huaban" value="http://huaban.com/search/?q="
                  data-placeholder="在花瓣网中搜索" /><label for="type-huaban"><span style="color:#E35452">花瓣</span></label>
              </li>
              <li><input hidden="" type="radio" name="type" id="type-zcool-web2"
                  value="http://www.zcool.com.cn/search/content?&amp;word=" data-placeholder="在站酷网中搜索" /><label
                  for="type-zcool-web2"><span style="color:#ffac00">站酷</span></label></li>
              <li><input hidden="" type="radio" name="type" id="github" value="https://github.com/search?q="
                  data-placeholder="在Github中搜索" /><label for="github"><span style="color:#448CD6">github</span></label>
              </li>
              <li><input hidden="" type="radio" name="type" id="type-dribbble" value="http://iqzhan.com/search.php?q="
                  data-placeholder="QZHAN search" /><label for="type-dribbble"><span
                    style="color:#EC4989">QZHAN</span></label></li>
              <li><input hidden="" type="radio" name="type" id="type-behance"
                  value="https://www.behance.net/search?search=" data-placeholder="Behance search" /><label
                  for="type-behance"><span style="color:#4885ff">Behance</span></label></li>
              <li><input hidden="" type="radio" name="type" id="icon"
                  value="https://www.iconfont.cn/search/index?searchType=icon&amp;q="
                  data-placeholder="图标搜索 (支持中文)" /><label for="icon"><span style="color:#e0c20f">IconFont</span></label>
              </li>
            </ul>
          </div>
        </div>
        <form action="https://www.baidu.com/s?wd=" method="get" target="_blank" id="super-search-fm">
          <input type="text" id="search-text" autocomplete="off" placeholder="百度一下" style="outline:none" autofocus="" />
          <button type="submit"><i class="iconfont">🔍</i></button>
        </form>
        <div class="set-check">
          <input type="checkbox" id="set-search-blank" class="bubble-3" checked="" required="" />
          <label for="set-search-blank" class="green">新窗口打开搜索结果</label>
        </div>
      </div>
      <!-- 导航条 -->
      <div class="row tab_nav">
        <h3 class="col-xs-6 col-sm-3 col-md-3 col-lg-3 user"> <a href="index.html">设计师导航</a> </h3>
        <h3 class="col-xs-6 col-sm-3 col-md-3 col-lg-3 user"> <a href="operat.html">运营导航</a> </h3>
        <h3 class="col-xs-6 col-sm-3 col-md-3 col-lg-3 user active"> <a href="#">程序员导航</a> </h3>
        <h3 class="col-xs-6 col-sm-3 col-md-3 col-lg-3 user"> <a href="product.html">产品导航</a> </h3>
      </div>
      <!-- 技术导航开始    -->
      <div class="row tab_con it">
        <div class="hot clearfix">
          <div class="hot_logo col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <a href="https://github.com/" target="_blank" title="github"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_git.png" width="100%" alt="github" /> </a>
            <a href="https://cn.vuejs.org/v2/guide/instance.html" target="_blank" title="vue"> <img class="lazy"
                src="images/lazy1.png" data-src="images/hot_vue.png" width="100%" alt="vue" /> </a>
            <a href="https://www.angularjs.net.cn/" target="_blank" title="angular"> <img class="lazy"
                src="images/lazy1.png" data-src="images/hot_angular.png" width="100%" alt="angular" /> </a>
            <a href="https://reactjs.org/" target="_blank" title="react"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_react.jpg" width="100%" alt="react" /> </a>
            <a href="http://nodejs.cn/" target="_blank" title="node"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_node.png" width="100%" alt="node" /> </a>
            <a href="https://www.v2ex.com/" target="_blank" title="v2ex"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_v2ex.png" width="100%" alt="v2ex" /> </a>
          </div>
          <div class="hot_logo col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <a href="https://www.w3school.com.cn/" target="_blank" title="w3c"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_w3c.png" width="100%" alt="w3c" /> </a>
            <a href="https://blog.csdn.net/" target="_blank" title="CSDN博客"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_csdn.png" width="100%" alt="CSDN博客" /> </a>
            <a href="https://www.cnblogs.com/" target="_blank" title="博客园"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_cnblog.png" width="100%" alt="博客园" /> </a>
            <a href="https://juejin.im/" target="_blank" title="掘金"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_jue.png" width="100%" alt="掘金" /> </a>
            <a href="https://www.nowcoder.com" target="_blank" title="牛客网"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_niu.png" width="100%" alt="牛客网" /> </a>
            <a href="https://segmentfault.com/" target="_blank" title="segmentfault"> <img class="lazy"
                src="images/lazy1.png" data-src="images/hot_seg.png" width="100%" alt="segmentfault" /> </a>
          </div>
          <div class="hot_logo col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <a href="https://www.imooc.com/" target="_blank" title="慕课网"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_imooc.png" width="100%" alt="慕课网" /> </a>
            <a href="http://www.17sucai.com/" target="_blank" title="17素材网"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_17sucai.png" width="100%" alt="17素材网" /> </a>
            <a href="http://iqzhan.com/category-23.html" target="_blank" title="Q站软件"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_qz.jpg" width="100%" alt="Q站软件" /> </a>
            <a href="https://www.runoob.com/" target="_blank" title="菜鸟教程"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_run.png" width="100%" alt="菜鸟教程" /> </a>
            <a href="https://seo.chinaz.com/iqzhan.com" target="_blank" title="zhanzhang"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_zz.jpg" width="100%" alt="zhanzhang" /> </a>
            <a href="https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=wy0ngklj" target="_blank" title="阿里云"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_yun.png" width="100%" alt="阿里云" /> </a>
          </div>
          <div class="hot_logo col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <a href="https://mp.weixin.qq.com" target="_blank" title="微信开放平台"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_weixin.png" width="100%" alt="微信开放平台" /> </a>
            <a href="https://echarts.baidu.com/" target="_blank" title="echarts"> <img class="lazy"
                src="images/lazy1.png" data-src="images/hot_echarts.png" width="100%" alt="echarts" /> </a>
            <a href="http://www.iconfont.cn" target="_blank" title="iconfont"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_icon.png" width="100%" alt="iconfont" /> </a>
            <a href="http://tool.oschina.net/codeformat/html" target="_blank" title="格式化"> <img class="lazy"
                src="images/lazy1.png" data-src="images/hot_tool.png" width="100%" alt="格式化" /> </a>
            <a href="http://sharedbk.com/" target="_blank" title="共享博客"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_sharedbk.png" width="100%" alt="共享博客" /> </a>
            <a href="https://invite.51.la/1NJSqtyE?target=V6" target="_blank" title="51la"> <img class="lazy" src="images/lazy1.png"
                data-src="images/hot_51la.png" width="100%" alt="51la" /> </a>
          </div>
        </div>
        <div class="site site01 clearfix">
          <div class="main clearfix"></div>
        </div>

        <div class="site site02 clearfix">
          <!-- 模块主题 -->
          <div class="title">
            <div class="tit">
              <h3>[&nbsp;系统语言&nbsp;*&nbsp;数据库&nbsp;]</h3>
              <!-- <p>/挑选全球精致尖货/</p> -->
            </div>
          </div>
          <div class="main clearfix"></div>
          <!--    <div class="adv col-lg-12 col-md-12 col-sm-12 col-xs-12">
   <a href="http://tanzhouedu10.mikecrm.com/OziFYfj" target="_blank">
        <img src="images/t-3.jpg" width="100%" alt="潭州3D建模课程">
      </a>
</div> -->
        </div>

        <div class="site site03 clearfix">
          <!-- 模块主题 -->
          <div class="title">
            <div class="tit">
              <h3>[&nbsp;打包&nbsp;*&nbsp;格式化&nbsp;]</h3>
              <!-- <p>/挑选全球精致尖货/</p> -->
            </div>
          </div>
          <div class="main clearfix"></div>

        </div>

        <div class="site site04 clearfix">
          <!-- 模块主题 -->
          <div class="title">
            <div class="tit">
              <h3>[&nbsp;云服务&nbsp;*&nbsp;图表&nbsp;*&nbsp;CDN&nbsp;]</h3>
              <!-- <p>/挑选全球精致尖货/</p> -->
            </div>
          </div>
          <div class="main clearfix"></div>
        </div>

        <div class="site site05 clearfix">
          <!-- 模块主题 -->
          <div class="title">
            <div class="tit">
              <h3>[&nbsp;前端团队&nbsp;]</h3>
              <!-- <p>/挑选全球精致尖货/</p> -->
            </div>
          </div>
          <div class="main clearfix"></div>
          <!-- 
   <div class="adv">
  <div class="advtise col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <a href="https://cloud.tencent.com/act/cps/redirect?redirect=1044&cps_key=4dcd59c481297f1fd15fa5c9388d614e&from=console" target="_blank">
        <img class='lazy' src='images/lazy2.jpg' data-src="images/adv_miaosha.png" width="100%" alt="热门云产品限量秒杀">
      </a>
  </div>
   <div class="advtise col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <a href="https://cloud.tencent.com/act/cps/redirect?redirect=1040&cps_key=4dcd59c481297f1fd15fa5c9388d614e&from=console" target="_blank">
        <img class='lazy' src='images/lazy2.jpg' data-src="images/adv_newu.jpg" width="100%" alt="腾讯云新用户专属大礼包">
      </a>
  </div>
   <div class="advtise col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <a href="https://cloud.tencent.com/act/cps/redirect?redirect=1014&cps_key=4dcd59c481297f1fd15fa5c9388d614e&from=console">
        <img class='lazy' src='images/lazy2.jpg' data-src="images/adv_hot.jpg" width="100%" alt="热门云产品3折起，服务器低至22.22元每月">
      </a>
  </div>
   <div class="advtise col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <a href="https://cloud.tencent.com/act/cps/redirect?redirect=1001&cps_key=4dcd59c481297f1fd15fa5c9388d614e&from=console" target="_blank">
        <img class='lazy' src='images/lazy2.jpg' data-src="images/adv_pian.jpg" width="100%" alt=" 云产品特惠3折起">
      </a>
  </div>
   
</div> -->
        </div>
      </div>
    </div>
    <!-- container -->
  </div>
  <!-- navigation -->

  <!--悬浮导航-->
  <div class="siderBar">
    <div class="floor">
      <ul>
        <li class="hov">1F<span class="active">常用网址</span></li>
        <li>2F<span>语言数据</span></li>
        <li>3F<span>打包格式</span></li>
        <li>4F<span>服务图表</span></li>
        <li>5F<span>前端团队</span></li>
      </ul>
    </div>
    <div class="top shejiao"></div>
  </div>


  <footer>
    <div class="container">
      <div class="row foot_main">
        <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
          <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
            <div class="logo col-lg-12  col-md-12 col-sm-4  col-xs-12">
              <a href="#"><img src="images/logo.png" width="180" alt="" /></a>
            </div>
            <div class="detail col-lg-12  col-md-12 col-sm-8   col-xs-12">
              国家反诈中心是国务院打击治理电信网络新型违法犯罪工作部际联席会议合成作战平台，集资源整合、情报研判、侦查指挥为一体，在打击、防范、治理电信网络诈骗等新型违法犯罪中发挥着重要作用。<br><br><a href='https://www.hack-gov.com.cn/posts/21480.html'><span style="color:#fff;font-weight: bold;">&nbsp;下载（国家反诈中心）APP&nbsp;</span></a>
            </div>
          </div>

        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12"> 
          <h4>网站链接</h4> 
          <div class="about"> 
            <a href="javascript:void;" title="博客">小沐</a> 
            <!-- <a href="javascript:void;" title="百变鹏仔">百变鹏仔</a> 
            <a href="javascript:void;" title="百变鹏仔">百变鹏仔</a> 
            <a href="http://sharedbk.com" title="百变鹏仔">百变鹏仔</a> 
            <a href="javascript:void;" title="百变鹏仔">百变鹏仔</a>  -->
          </div> 
        </div>
        
        </div>
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4>联系方式</h4>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 social">
            <a target="_blank" class="qq" href="1"><img border="0" src="images/qqq.jpg" alt="SEO" title="[SEO交流群]" />SEO交流群</a>
            <a target="_blank" class="qq" href="1"><img border="0" src="images/qqq.jpg" alt="Q站" title="[资源技术群]" />资源技术群</a>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 social">
            <img src="images/wechat.jpg" width="100%" alt="" /> Wechat
          </div>
          <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 social">
            <img src="images/gzh.jpg" width="100%" alt="" /> 微信公众号
          </div>
        </div>
      </div>
    </div>

    <div id="copyright">
      Copyright © 2023 <a href="https://icp.gov.moe/?keyword=20230613" target="_blank" title="萌ICP备20230613号">萌ICP备20230613号</a>
    </div>


  </footer>
  <a href="javascript:window.external.addFavorite('http://sharedbk.com/','XXXX')">加入收藏</a>
  <div id="btn-scrollup">
    <a title="Go Top" class="scrollup button-circle" href="#"><i class="iconfont">↑</i></a>
  </div>
  <script src="js/jquery.min.js"></script>
  <script src="js/website_it.js"></script>
  <script src="js/common.js"></script>

</body>

</html>

