<template>
  <a-button type="primary" @click="click">Modules</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class Modules extends Vue {
  public click() {
    console.log('Modules')
  }
}
</script>
