<template>
  <a-button type="primary" @click="click">Sass</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class Sass extends Vue {
  public click() {
    console.log('Sass')
  }
}
</script>