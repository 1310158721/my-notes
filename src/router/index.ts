import Vue from 'vue'
import Router from 'vue-router'
import { getLocalStorage, setLocalStorage, clearLocalStorage } from '@/utils/localStorage'
import nodeRouterConfigs from '@/router/node/index'
import cssRouterConfigs from '@/router/css/index'
import jsRouterConfigs from '@/router/javascript/index'
import vueRouterConfigs from '@/router/vue/index'
import pluginsRouterConfigs from '@/router/plugins/index'
import toolsRouterConfigs from '@/router/tools/index'
import testRouterConfigs from '@/router/test/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'node-modules' }
    },
    ...nodeRouterConfigs,
    ...cssRouterConfigs,
    ...jsRouterConfigs,
    ...vueRouterConfigs,
    ...pluginsRouterConfigs,
    ...toolsRouterConfigs,
    ...testRouterConfigs
  ]
})

router.beforeEach((to, from, next) => {
  /**
   * 若跳转到自身路由则弹窗警告
   */
  if (to.path === from.path) {
    next(false)
    return
  }

  /**
   *  谷歌浏览器支持 window.performance 属性
   */
  if (from.path === '/' && from.name === null) {
    if (window.performance.navigation.type === 1) {
      console.info('该页面被刷新了');
    } else {
      clearLocalStorage()
    }
  }

  /**
   * 利用路由的元信息，设置浏览器标签的title值
   */
  document.title = to.meta.title || '我的笔记'

  /**
   * 设置当前左侧导航菜单、左侧菜单展开选中的缓存值
   */
  setLocalStorage('navSelectKey', to.meta.key)
  setLocalStorage('navOpenKey', to.meta.navOpenKey)

  /**
   * 设置当前导航标签的缓存值
   */
  const tabs = getLocalStorage('tabs') ? JSON.parse(getLocalStorage('tabs') + '') : []
  const metaTabs = to.meta
  if (!tabs.length) {
    tabs.push(metaTabs)
    setLocalStorage('tabs', JSON.stringify(tabs))
  } else {
    const paths = tabs.map((tab: any) => tab.path)
    if (!paths.includes(metaTabs.path)) {
      tabs.push(metaTabs)
      setLocalStorage('tabs', JSON.stringify(tabs))
    }
  }
  next()
})

export default router
