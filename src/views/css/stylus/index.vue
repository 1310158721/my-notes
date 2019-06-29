<template>
  <a-button type="primary" @click="click">Stylus</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class Stylus extends Vue {
  public click() {
    console.log('Stylus')
  }
}
</script>