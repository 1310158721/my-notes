<template>
    <div>{{ value }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component

export default class Comp extends Vue {
    @Prop(Number) public value: number
    
    @Watch('value')
    numChange(val: number) {
        console.log(val)
    }

    public mounted() {
        console.log(this.$props)
    }
}
</script>

