<template>
  <a-button type="primary" @click="click">Directive</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class Directive extends Vue {
  public click() {
    console.log('Directive')
  }
}
</script>