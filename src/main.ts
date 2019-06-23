/**
 * 全局组件
 */
import Vue from 'vue'
/**
 * 第三方组件
 */
import store from '@/vuex/store'
import router from '@/router'
import Antd from 'ant-design-vue'
/**
 * 第三方组件样式
 */
import 'ant-design-vue/dist/antd.css'
/**
 * 局部组件
 */
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
