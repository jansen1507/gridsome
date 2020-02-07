export default [
  {
    path: "/posts/example-post-2/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Applications/MAMP/htdocs/gridsome/src/templates/Post.vue")
  },
  {
    path: "/posts/example-post/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Applications/MAMP/htdocs/gridsome/src/templates/Post.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Applications/MAMP/htdocs/gridsome/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Applications/MAMP/htdocs/gridsome/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Applications/MAMP/htdocs/gridsome/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Applications/MAMP/htdocs/gridsome/node_modules/gridsome/app/pages/404.vue")
  }
]

