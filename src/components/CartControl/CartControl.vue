<template>
  <div class="cartcontrol">
    <transition name="move">
      <!--减少,有数量显示-->
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click="updateFoodCount(false)"></div>
    </transition>
    <!--count-->
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <!--增加-->
    <div class="iconfont icon-add_circle" @click="updateFoodCount(true)" ></div>
  </div>
</template>
<script>
  export default {
    props: {
      food: Object //声明接收属性的类型
    },
    methods:{
      //更新食物数量，分发action
      updateFoodCount(isAdd){
        const {food} = this;
        this.$store.dispatch("updateFoodCount",{isAdd,food});
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active/*进入动画*/
        transition all .5s
      &.move-enter, &.move-leave-to/*离开动画*/
        opacity 0
        transform  translateX(20px) rotate(360deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>

