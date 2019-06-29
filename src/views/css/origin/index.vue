<template>
  <a-button type="primary" @click="click">CssOrigin</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class CssOrigin extends Vue {
  public click() {
    console.log('CssOrigin')
  }
}
</script>