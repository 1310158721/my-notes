<template>
  <a-layout id="components-layout">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo"/>
      <the-menu :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      
      <the-header :collapsed="collapsed" @toggle="toggle" />
      <Tabs />
      <a-layout-content
        :style="{ padding: '24px', boxSizing: 'border-box' ,background: 'rgba(0,0,0,.5)', minHeight: '280px' }"
      >
        <div class="content-wrapper">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Tabs from '@/components/base/tabs/index.vue'
import { getLocalStorage } from '@/utils/localStorage'
import { Route } from 'vue-router'
import TheHeader from '@/components/base/header/index.vue'
import TheMenu from '@/components/base/menu/index.vue'

@Component({
  components: {
    Tabs,
    TheHeader,
    TheMenu
  }
})

export default class App extends Vue {
  public collapsed: boolean = false

  public toggle() {
    this.collapsed = !this.collapsed
  }

  @Watch('$route')
  private routeChange() {}
}
</script>

<style lang="less">
#components-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .ant-layout-content {
    height: calc(100vh - 64px);
    overflow-y: hidden;
    .content-wrapper {
      width: 100%;
      height: 100%;
      overflow: scroll;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
