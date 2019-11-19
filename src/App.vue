<template>
  <div id="app">
    <router-view></router-view>
    <watermark
      text="孙狗剩"
      tileWidth="300"
      tileHeight="200"
      opacity="0.1"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import WaterMark from 'vue-watermark';

@Component({
  components: {
    HelloWorld, WaterMark,
  },
})
export default class App extends Vue {}
</script>

<style lang="less"></style>
