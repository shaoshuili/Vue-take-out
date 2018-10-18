# gshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


##1.路由组价/非路由组件
  路由组件，配置路由===>映射路由(main.js)===>引入分组件，并显示
  2.静态页面显示
  ①　拆分每个组件，html,stylus，mixin混合
  ②　Images图片路径需要改
  3.抽取组件  目的:复用/简化
  (1)复杂的组件可以多次拆分
  ①　重复使用，定义组件的结构，<slot  name=“”>全局注册组件，
  记得发请求


day02

## ajax请求函数封装
 #bug
  1.index 调用ajax函数，函数返回值，一行代码可以=》返回；或者{return}
  2.记得启动服务器，出现错误，仔细审查提示有用信息。
 ##请求函数
    1.异步获取商分类并展示
      1)根据api,发送请求
      2）返回一个数组[........]
       分析：coumputed（）
       页面是需要分页展示的，[[],[],...],现在需要把大数组，
       分成多个小数组展示,每一页要想显示，把它变为二维数组(categorysArr)，
       每个数组length=8
    2.star
      1)把所有的
    3.login
      1）登录方式切换
      2）倒计时效果
      3）手机号验证
        以剩余的时间来判断，根据这个数据确定显示的内容，只要更新数据，界面就会更新
        同时在倒计时的时候，不能点击
        满足条件，电话号码必须是正确的号码；computedTime>0,正在计时，不能点击操作。
      4）验证码
    4.增加食物数量
      1）确定点击的是那个按钮@click=（true/false）
          点击时候传参，if(true)===>
    5.观察界面，划分每个功能块
    6.点击登录，做前台表单验证

   ##shopGoods
   1.滑动右侧，左侧列表同步变化
      1)class变化：index === currentIndex
   2.点击左侧任意类型，右侧滑动到对应的位置





