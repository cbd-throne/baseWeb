declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}


declare module 'vue/types/vue' {
  import Vue from 'vue';
  interface Vue {
    $Http: any,
  }
}