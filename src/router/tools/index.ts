const toolsRouterConfigs = [
    {
      path: '/tools-git',
      name: 'tools-git',
      component: () => import(/* webpackChunkName: "tools-git" */ '@/views/tools/git/index.vue'),
      meta: {
        title: 'Npm 常用模块',
        key: 'tools-git',
        path: '/tools-git',
        navOpenKey: 'Tools'
      }
    }
]

export default toolsRouterConfigs
