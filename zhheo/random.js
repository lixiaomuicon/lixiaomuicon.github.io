var posts=["2023/02/16/你的善良需要带一些锋芒/","2023/01/23/你若芳香 蝴蝶自来/","2023/01/23/你要勇敢地面对这一切/","2023/01/01/关于我/","2023/01/30/喜欢是单纯的，不喜欢才会衡量利弊/","2023/02/01/总会有你的玫瑰出现，它只为你而来/","2023/01/26/我知道我不能成为什么人，我只是要拒绝庸常/","2023/01/24/若从头来过，我也会依然做同样的选择/","2023/01/23/爱自己是需要一生去学习的课题/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};