var posts=["posts/0fdad9eef5a0/","posts/cc81ed1389c1/","posts/f32d6d115ac2/","posts/d55a4b452f7a/","posts/2f024e23f4ac/","posts/c92bc7be8197/","posts/a6939bedae72/","posts/94e0876b7f47/","posts/7f18073c820f/","posts/7830863eb5f3/","posts/16a82599f506/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};