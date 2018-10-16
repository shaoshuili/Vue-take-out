<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue"

  export default {
    mounted () {
      // 异步获取address, 并保存到state
      this.$store.dispatch('getAddress');
      //获取用户信息
      this.$store.dispatch("getUserInfo")
    },
      components :{
      FooterGuide
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    #app
      width 100%
      height 100%
</style>
