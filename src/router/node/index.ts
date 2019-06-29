const nodeRouterConfigs = [
    {
      path: '/node-modules',
      name: 'node-modules',
      component: () => import(/* webpackChunkName: "node-modules" */ '@/views/node/modules/index.vue'),
      meta: {
        title: 'Node 自身模块',
        key: 'node-modules',
        path: '/node-modules',
        navOpenKey: 'Node'
      }
    },
    {
      path: '/node-ambitus',
      name: 'node-ambitus',
      component: () => import(/* webpackChunkName: "node-ambitus" */ '@/views/node/ambitus/index.vue'),
      meta: {
        title: 'Node 周边生态',
        key: 'node-ambitus',
        path: '/node-ambitus',
        navOpenKey: 'Node'
      }
    }
]

export default nodeRouterConfigs
