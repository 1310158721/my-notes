const testRouterConfigs = [
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "test" */ '@/views/test/index.vue'),
      meta: {
        title: '方便测试',
        key: 'test',
        path: '/test',
        navOpenKey: null
      }
    }
]

export default testRouterConfigs
