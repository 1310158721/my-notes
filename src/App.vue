<template>
<a-locale-provider :locale="language">
  <a-layout id="components-layout">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo"/>
      <the-menu  @switchCollapsed="switchCollapsed" :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <the-header @changeLanguage="changeLanguage" :word="language.Test.word" />
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
  </a-locale-provider>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Tabs from '@/components/base/tabs/index.vue'
import { getLocalStorage } from '@/utils/localStorage'
import { Route } from 'vue-router'
import TheHeader from '@/components/base/header/index.vue'
import TheMenu from '@/components/base/menu/index.vue'
import { testPost, getMenuList } from '@/http/apis'
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import en_GB from 'ant-design-vue/lib/locale-provider/en_GB'

@Component({
  name: 'app',
  components: {
    Tabs,
    TheHeader,
    TheMenu
  }
})

export default class App extends Vue {
  public collapsed: boolean = false
  public language: any = zh_CN
  public word: string

  public switchCollapsed() {
    this.collapsed = !this.collapsed
  }

  public changeLanguage() {
    this.language === zh_CN ? this.language = en_GB : this.language = zh_CN
  }

  public mounted() {
    testPost({user: 'tang'})
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
