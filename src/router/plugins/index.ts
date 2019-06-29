const pluginsRouterConfigs = [
    {
      path: '/plugins-npm',
      name: 'plugins-npm',
      component: () => import(/* webpackChunkName: "plugins-npm" */ '@/views/plugins/npm/index.vue'),
      meta: {
        title: 'Npm 常用模块',
        key: 'plugins-npm',
        path: '/plugins-npm',
        navOpenKey: 'Plugins'
      }
    }
]

export default pluginsRouterConfigs
