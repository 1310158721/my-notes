<template>
  <a-button type="primary" @click="click">Home</a-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component

export default class Home extends Vue {
  public click() {
    this.$router.push('/login')
  }
}
</script>
