<template>
  <div>
    <a-tabs
      v-if="panes.length && activeKey"
      hideAdd
      v-model="activeKey"
      type="editable-card"
      @edit="onEdit"
      @tabClick="tabClick"
      style="height: 40px; overflow: hidden; width: 500px;"
    >
      <a-tab-pane
        v-for="pane in panes"
        :tab="pane.title"
        :key="pane.key"
        :closable="pane.closable"
      >{{ pane.title }}</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'
import { Route } from 'vue-router'

@Component
export default class Tabs extends Vue {
  public panes: any = []
  public activeKey: any = null

  public onEdit(targetKey: any, action: any) {
    if (this.panes.length > 1) {
      this.panes = this.panes.filter((item: any, index: number) => {
        /**
         * 判断当前删除项是否为当前的选中项，不是的话，则做直接的过滤操作
         */
        if (this.activeKey === targetKey) {
          /**
           * 若删除的当前项是第一个，则当前选中项切换为第二个，否则向前推进一个
           */
          if (index === 0) {
            this.activeKey = this.panes[1].key
            this.$router.push(this.panes[1].path)
            setLocalStorage('navKey', JSON.stringify(this.panes[1].key))
          } else {
            this.activeKey = this.panes[index - 1].key
            this.$router.push(this.panes[index - 1].path)
            setLocalStorage(
              'navKey',
              JSON.stringify(this.panes[index - 1].key)
            );
          }
        }

        return targetKey !== item.key
      });
      setLocalStorage('tabs', JSON.stringify(this.panes))
    }
  }

  public tabClick(pane: any) {
    this.$router.push(`/${pane}`)
  }

  @Watch('$route')
  private routeChange(val: { path: string }) {
    const currentPath = val.path;
    const tabs = JSON.parse(JSON.stringify(getLocalStorage('tabs')))
    this.panes = JSON.parse(tabs);
    const allPaths = this.panes.map((pane: any) => {
      if (currentPath === pane.path) {
        this.activeKey = pane.key;
      }
    });
  }
}
</script>
