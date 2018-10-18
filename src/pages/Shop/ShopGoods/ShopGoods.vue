<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul ref="menuUl">
          <li class="menu-item" v-for="(good, index) in goods" :key="index"
              :class="{current: index===currentIndex}" @click="selectItem(index)">
          <span class="text bottom-border-1px">
            <img class="icon" :src="good.icon"v-if="good.icon">
            {{good.name}}
          </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="menuUl">
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px"
                  v-for="(food,index) in good.foods" :key="index">
                <div class="icon">
                  <img width="57" height="57"
                       :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="now" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  /*
  *考虑本质问题：
  * 1.滑动右侧，对应左侧的class显示 => index === currentIndex
  *   考虑与currentIndex相关的数据，
  *   1）滑动的scrollY
  *   2)右侧分类所有li组成的top数组：tops
  *得到相关数据，及其计算属性定义在哪个方法里面watch/data/computed...
  *2.何时获取数据
  * 初始化显示之后可以得到所有ul的高度
  *
  *
  * */
  import BScroll from 'better-scroll';
  import {mapState} from "vuex";
  export default {
    data() {
      return {
        scrollY: 0,//右侧列表Y轴方向滑动的坐标
        tops: [] //右侧所有li的top值
      }
    },
    computed: {
      ...mapState(["goods"]),
      currentIndex() {
        //取出scrollY，tops
        const {scrollY, tops} = this;
        //遍历数组，找到满足条件的下标scrollY>=当前的下标&&<下一个li的top值
        return tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1]);
      }
    },
    mounted() {
      this.$store.dispatch("getGoods", () => {//状态数据发生改变
        this.$nextTick(() => {//界面更新之后
          this._initScroll();//滚动
          this._initScrollY();//统计所有top值
        })
      });
    },
    methods: {
      //滚动
      _initScroll() {
        new BScroll('.menu-wrapper', function () {

        });
        this.rightScroll = new BScroll('.foods-wrapper', {
          click: true,
          probeType: 1 //非实时回调
        });
        this.rightScroll.on('scroll', ({x, y}) => {
          console.log(x, y);
          //更新scrollY值
          this.scrollY = Math.abs(y);
        });
        //绑定监听
        this.rightScroll.on('scrollEnd', ({x, y}) => {
          console.log(x, y);
          //更新scrollY值
          this.scrollY = Math.abs(y);
        });
      },
      //
      _initScrollY() {
        const tops = [];
        //初始化top
        let top = 0;
        tops.push(top);
        //得到每个li
        const lis = this.$refs.menuUl.querySelectorAll('.food-list-hook');
        //遍历得到每个li的高度
        lis.forEach(li => {
          top += li.clientHeight;
          tops.push(top);
        });
        //更新top值
        this.tops = tops;
      },
      //点击左侧，让右侧调到对应的下标
      // 选择左侧某个分类项
      selectItem (index) {
        // 得到index对应的目标位置的y坐标
        const y = -this.tops[index];
        // 立即更新scrollY
        this.scrollY = -y;
        // 让右侧列表滚动到此处
        this.rightScroll.scrollTo(0, y, 300)
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .goods
    display: flex
    position: absolute
    top: 195px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>

