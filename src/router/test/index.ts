const testRouterConfigs = [
    {
      path: '/test-upload',
      name: 'test-upload',
      component: () => import(/* webpackChunkName: "test-upload" */ '@/views/test/upload/index.vue'),
      meta: {
        title: '上传图片测试',
        key: 'test-upload',
        path: '/test-upload',
        navOpenKey: 'Test'
      }
    },
    {
      path: '/test-other',
      name: 'test-other',
      component: () => import(/* webpackChunkName: "test" */ '@/views/test/other/index.vue'),
      meta: {
        title: '其他测试',
        key: 'test-other',
        path: '/test-other',
        navOpenKey: 'Test'
      }
    },
    {
      path: '/test-form',
      name: 'test-form',
      component: () => import(/* webpackChunkName: "test" */ '@/views/test/form/index.vue'),
      meta: {
        title: 'Form表单测试',
        key: 'test-form',
        path: '/test-form',
        navOpenKey: 'Test'
      }
    }
]

export default testRouterConfigs
