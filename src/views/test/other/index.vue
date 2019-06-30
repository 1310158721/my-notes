<template>
  <div>
    <a-button type="primary" @click="click">test-other</a-button>
    <comp v-model="num"></comp>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import Comp from './comp.vue'

@Component({
  name: 'test-other',
  components: {
    Comp
  }
})

export default class TestOther extends Vue {
  public num: number = 9
  public click() {
    this.num++
  }
}
</script>
