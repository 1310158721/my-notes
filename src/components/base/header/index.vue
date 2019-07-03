<template>
  <a-layout-header id="header">
    {{ $t('language.global.Header') }}
    <a-popover trigger="click" placement="bottomRight">
      <template slot="content">
        <a-button type="primary" size="small" @click="switchLanguage">切换语言</a-button>
      </template>
      <div class="userInfo"></div>
    </a-popover>
  </a-layout-header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { setLocalStorage } from '@/utils/localStorage'

@Component

export default class TheHeader extends Vue {
  public switchLanguage() {
    const currentLocale = this.$i18n.locale
    if (currentLocale === 'zh') {
      Vue.set(this.$i18n, 'locale', 'en')
      setLocalStorage('locale', 'en')
    } else {
      Vue.set(this.$i18n, 'locale', 'zh')
      setLocalStorage('locale', 'zh')
    }
    currentLocale === 'zh' ? this.$message.success('系统已切换为英文') : this.$message.success('系统已切换为中文')
  }
}
</script>

<style lang="less" scoped>
#header {
  background: lightblue; 
  padding: 0; 
  width: 100%; 
  text-align: center;
  .userInfo {
    width: 50px;
    height: 50px;
    background-color: rgba(0,0,0,.3);
    position: absolute;
    right: 20px;
    top: 6px;
    border-radius: 50%;
  }
}

#components-popover-demo-placement .ant-btn {
  width: 50px;
  text-align: center;
  padding: 0;
  margin-right: 2px;
  margin-bottom: 2px;
}
</style>


