const toolsRouterConfigs = [
    {
      path: '/tools-git',
      name: 'tools-git',
      component: () => import(/* webpackChunkName: "tools-git" */ '@/views/tools/git/index.vue'),
      meta: {
        title: '常用工具-Git',
        key: 'tools-git',
        path: '/tools-git',
        navOpenKey: 'Tools'
      }
    }
]

export default toolsRouterConfigs
