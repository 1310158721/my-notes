<template>
  <div>
    <a-tabs
      v-if="panes.length && activeKey"
      hideAdd
      v-model="activeKey"
      type="editable-card"
      @edit="onEdit"
      @tabClick="tabClick"
      style="height: 40px; overflow: hidden; width: 100%;"
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
  public panes: string[] = []
  public activeKey: any = null

  public onEdit(targetKey: any, action: any) {
    if (this.panes.length > 1) {
      this.panes = this.panes.filter((item: any, index: number, array: any) => {
        /**
         * 判断当前删除项是否为当前的选中项，不是的话，则做直接的过滤操作
         */
        if (item.key === targetKey) {
          /**
           * 若删除的当前项是最后一个，则当前选中项切换为最后第二个，否则向后推一个
           */
          if (index === array.length - 1) {
            setLocalStorage('navSelectKey', array[array.length - 2].key)
            setLocalStorage('navOpenKey', array[array.length - 2].navOpenKey)
            this.activeKey = array[array.length - 2].key
            this.$router.push(array[array.length - 2].path)
          } else {
            if (item.key === this.activeKey) {
              setLocalStorage('navSelectKey', array[index + 1].key)
              setLocalStorage('navOpenKey', array[index + 1].navOpenKey)
              this.activeKey = array[index + 1].key
              this.$router.push(array[index + 1].path)
            }
          }
        }

        return targetKey !== item.key
      });
      setLocalStorage('tabs', JSON.stringify(this.panes))
    }
  }

  public tabClick(pane: string) {
    this.$router.push(`${pane}`)
  }

  @Watch('$route')
  private routeChange(val: { path: string }) {
    const currentPath = val.path;
    this.panes = JSON.parse(getLocalStorage('tabs') + '');
    const allPaths = this.panes.map((pane: any) => {
      if (currentPath === pane.path) {
        this.activeKey = pane.key;
      }
    });
  }
}
</script>
