<template>
  <a-button type="primary" @click="click">Less</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class Less extends Vue {
  public click() {
    console.log('Less')
  }
}
</script>