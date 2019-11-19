<template lang="pug">
    a-layout
      a-layout-header.noColor.h40
        a-row.h40
          a-col(:span="6")
            h3 地基
          a-col.flexR(:span="18")
            router-link.linkItem(to="/user") 用户
            router-link.linkItem(to="/base") 地基集
      a-layout-content
        router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="less" scoped>
.noColor {
  background: #fff;
  box-shadow: 0 3px 4px #ccc;
}
.h40 {
  height: 40px;
  line-height: 40px;
}
.flexR {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.linkItem {
  margin-right: 10px;
  cursor: pointer;
}
</style>
