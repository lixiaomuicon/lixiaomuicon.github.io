var posts=["posts/0fdad9eef5a0/","posts/cc81ed1389c1/","posts/f32d6d115ac2/","posts/2f024e23f4ac/","posts/d55a4b452f7a/","posts/c92bc7be8197/","posts/109604c8a047/","posts/94e0876b7f47/","posts/7f18073c820f/","posts/c86fc57f502e/","posts/16a82599f506/","posts/7830863eb5f3/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};