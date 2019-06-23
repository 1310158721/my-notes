<template>
  <a-menu theme="dark" mode="inline" :selectedKeys="[...defaultKey]">
    <a-menu-item v-for="item in navList" :key="item.key" @click="redirect(item.path || '/')">
      <a-icon :type="item.icon"/>
      <span>{{ item.label }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'

const navList: object[] = [
  { key: '/home', icon: 'user', label: 'home', path: '/home' },
  { key: '/about', icon: 'user', label: 'about', path: '/about' },
  { key: '/join', icon: 'user', label: 'join', path: '/join' },
  { key: '/other', icon: 'user', label: 'other', path: '/other' },
  { key: '/login', icon: 'user', label: 'login', path: '/login' }
]

@Component

export default class TheSider extends Vue {
  @Prop(Boolean) public collapsed: boolean = false
  public navList: object[] = navList
  public defaultKey: any = getLocalStorage('navKey') ? [getLocalStorage('navKey')] : []
  public redirect(path: string) {
    this.$router.push(path)
  }

  @Watch('$route')
  private routeChange(val: any) {
    setLocalStorage('navKey', val.path)
    this.defaultKey = [val.path]
  }
}
</script>

<style lang="less" scoped>
ul {
  height: calc(100vh - 64px) !important;
  overflow-y: scroll;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
}
</style>

