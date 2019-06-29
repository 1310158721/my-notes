<template>
  <a-button type="primary" @click="click">Ambitus</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class Ambitus extends Vue {
  public click() {
    console.log('Ambitus')
  }
}
</script>
