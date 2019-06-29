<template>
  <a-button type="primary" @click="click">Es5</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class Es5 extends Vue {
  public click() {
    console.log('Es5')
  }
}
</script>
