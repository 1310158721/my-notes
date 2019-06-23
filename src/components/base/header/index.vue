<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggle"
    />
  </a-layout-header>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator'

@Component

export default class TheHeader extends Vue {
  @Prop(Boolean) public collapsed: boolean = false

  @Emit()
  private toggle() {}
}
</script>

