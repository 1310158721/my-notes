<template>
  <div id="menu" v-if="muneList">
    <span id="icon">
      <a-icon class="is-collapsed-icon" :type="iconType" @click="switchCollapsed" />
    </span>
    <a-menu
      theme="dark"
      mode="inline"
      :selectedKeys="selectedKeys"
      :openKeys="openKeys"
      @openChange="onOpenChange"
      v-if="muneList"
    >
      <template v-for="item in muneList">
        <a-menu-item v-if="!item.children" :key="item.key" @click="redirect(item.path || '/')">
          <a-icon :type="item.icon"/>
          <span>{{item.title}}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="item.key">
          <span slot="title">
            <a-icon :type="item.icon"/>
            <span>{{ item.title }}</span>
          </span>
          <a-menu-item
            v-for="sonItem in item.children"
            :key="sonItem.key"
            @click="redirect(sonItem.path || '/')"
          >
            <a-icon :type="sonItem.icon" />
            {{ sonItem.title }}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { getMenuList } from '@/http/apis';

@Component

export default class TheSider extends Vue {
  @Prop(Boolean) public collapsed: boolean = false
  public selectedKeys: string[] = []
  public openKeys: string[] = []
  public muneList: any = null

  get iconType() {
    return this.collapsed ? 'double-right' : 'double-left';
  }

  public redirect(path: string) {
    this.$router.push(path);
  }

  public onOpenChange(openKeys: string[]) {
    const len: number = openKeys.length
    if (len > 0) {
      this.openKeys = [openKeys[len - 1]]
      return
    }
    this.openKeys = openKeys
  }

  @Emit('switchCollapsed')
  public switchCollapsed() {
    if (!this.collapsed) {
      this.openKeys = ['']
    } else {
      this.openKeys = [getLocalStorage('navOpenKey') + '']
    }
  }

  public created() {
    getMenuList({user: 'tanglihe'}).then((list: any) => {
      this.muneList = list;
    });
  }

  // 监听路由信息变化， 设置菜单栏对应的当前项
  @Watch('$route')
  private routeChange() {
    this.selectedKeys = [getLocalStorage('navSelectKey') + '']
    this.openKeys = [getLocalStorage('navOpenKey') + '']
  }
}
</script>

<style lang="less" scoped>
#menu {
  position: relative;
  #icon {
    width: 12px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    right: -12px;
    top: 50%;
    margin-top: -15px;
    line-height: 30px;
    text-align: center;
    border-radius: 0 4px 4px 0;
    .is-collapsed-icon {
      font-size: 12px;
      color: #fff;
      cursor: pointer;
    }
  }
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
}
</style>

