<template>
  <a-layout-header class="header" style="background: lightblue; padding: 0; width: 100%; text-align: center;" @click="handleClick">
    {{ word }}
  </a-layout-header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component

export default class TheHeader extends Vue {
  @Prop(String) public word: string

  @Emit('changeLanguage')
  public handleClick() {}
}
</script>

<style lang="less" scoped>
</style>


