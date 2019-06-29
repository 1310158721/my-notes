const jsRouterConfigs = [
    {
      path: '/js-es5',
      name: 'js-es5',
      component: () => import(/* webpackChunkName: "js-es5" */ '@/views/javascript/es5/index.vue'),
      meta: {
        title: 'Es5 相关内容',
        key: 'js-es5',
        path: '/js-es5',
        navOpenKey: 'Javascript'
      }
    },
    {
      path: '/js-es6',
      name: 'js-es6',
      component: () => import(/* webpackChunkName: "js-es6" */ '@/views/javascript/es6/index.vue'),
      meta: {
        title: 'Es6 相关内容',
        key: 'js-es6',
        path: '/js-es6',
        navOpenKey: 'Javascript'
      }
    }
]

export default jsRouterConfigs
