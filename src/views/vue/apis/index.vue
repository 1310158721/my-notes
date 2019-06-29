<template>
  <a-button type="primary" @click="click">VueApi</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class VueApi extends Vue {
  public click() {
    console.log('VueApi')
  }
}
</script>