<template lang="pug">
    main.center.bg
</template>


<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
export default Vue.extend({
    
})
</script>

<style lang="less" scoped>
.center {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bg {
    background: url('../assets/moca.jpg') no-repeat center center;
    background-size: cover;
}
</style>