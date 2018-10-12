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
      2）返回二维数组[[],[],....]
       分析：分类如何展示




