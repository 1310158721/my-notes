<template>
  <a-button type="primary" @click="click">Npm</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component

export default class Npm extends Vue {
  public click() {
    console.log('Npm')
  }
}
</script>
