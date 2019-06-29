const cssRouterConfigs = [
    {
      path: '/css-less',
      name: 'css-less',
      component: () => import(/* webpackChunkName: "css-less" */ '@/views/css/less/index.vue'),
      meta: {
        title: 'Less 预处理语言',
        key: 'css-less',
        path: '/css-less',
        navOpenKey: 'Css'
      }
    },
    {
      path: '/css-sass',
      name: 'css-sass',
      component: () => import(/* webpackChunkName: "css-sass" */ '@/views/css/sass/index.vue'),
      meta: {
        title: 'Sass 预处理语言',
        key: 'css-sass',
        path: '/css-sass',
        navOpenKey: 'Css'
      }
    },
    {
      path: '/css-stylus',
      name: 'css-stylus',
      component: () => import(/* webpackChunkName: "css-stylus" */ '@/views/css/stylus/index.vue'),
      meta: {
        title: 'Stylus 预处理语言',
        key: 'css-stylus',
        path: '/css-stylus',
        navOpenKey: 'Css'
      }
    },
    {
      path: '/css-origin',
      name: 'css-origin',
      component: () => import(/* webpackChunkName: "css-origin" */ '@/views/css/origin/index.vue'),
      meta: {
        title: '原生 Css',
        key: 'css-origin',
        path: '/css-origin',
        navOpenKey: 'Css'
      }
    }
]

export default cssRouterConfigs
