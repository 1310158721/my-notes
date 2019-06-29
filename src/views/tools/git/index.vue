<template>
  <a-button type="primary" @click="click">Git</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component

export default class Git extends Vue {
  public click() {
    console.log('Git')
  }
}
</script>