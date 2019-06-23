import Vue from 'vue'
import Router from 'vue-router'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: 'home',
        tabs: {
          title: 'home',
          key: 'home',
          path: '/home'
        }
      },
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about', meta: {
        title: 'about',
        tabs: {
          title: 'about',
          key: 'about',
          path: '/about'
        }
      },
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/join',
      name: 'join',
      meta: {
        title: 'join',
        tabs: {
          title: 'join',
          key: 'join',
          path: '/join'
        }
      },
      component: () => import(/* webpackChunkName: "join" */ '@/views/Join.vue')
    },
    {
      path: '/other',
      name: 'other',
      meta: {
        title: 'other',
        tabs: {
          title: 'other',
          key: 'other',
          path: '/other'
        }
      },
      component: () => import(/* webpackChunkName: "other" */ '@/views/Other.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'login',
        tabs: {
          title: 'login',
          key: 'login',
          path: '/login'
        }
      },
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    }
  ],
})

router.beforeEach((to, from, next) => {
  /**
   * 利用路由的元信息，设置浏览器标签的title值
   */
  document.title = to.meta.title || '我的笔记'

  /**
   * 若跳转到自身路由则弹窗警告
   */
  if (to.path === from.path) {
    alert('当前跳转是自身的路由')
    next(false)
  }

  /**
   * 设置当前左侧导航菜单选中的缓存值
   */
  const navKey = to.path
  setLocalStorage('navKey', navKey)

  /**
   * 设置当前导航标签的缓存值
   */
  const tabs = getLocalStorage('tabs') ? JSON.parse(getLocalStorage('tabs') + '') : []
  const metaTabs = to.meta.tabs
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
