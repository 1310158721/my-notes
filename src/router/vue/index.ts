const vueRouterConfigs = [
    {
      path: '/vue-apis',
      name: 'vue-apis',
      component: () => import(/* webpackChunkName: "vue-apis" */ '@/views/vue/apis/index.vue'),
      meta: {
        title: 'Vue 自身的 api',
        key: 'vue-apis',
        path: '/vue-apis',
        navOpenKey: 'Vue'
      }
    },
    {
      path: '/vue-directives',
      name: 'vue-directives',
      component: () => import(/* webpackChunkName: "vue-directives" */ '@/views/vue/directives/index.vue'),
      meta: {
        title: 'vue 指令',
        key: 'vue-directives',
        path: '/vue-directives',
        navOpenKey: 'Vue'
      }
    }
]

export default vueRouterConfigs
