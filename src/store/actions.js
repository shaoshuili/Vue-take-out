/*
*发请求，间接更新数据
*引入ajax请求函数,
* 引入
* */
//发送请求
import {
  reqAddress,
  reqFoodsCategorys,
  reqShops
}
  from "../Api"
//获取数据
import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from "./mutation-types"


//更新数据的逻辑
export default {
  //得到地址
 async getAddress({commit,state}){
    //传入经度，纬度
    const {latitude,longitude} = state;

    const result = await reqAddress(latitude+","+longitude);//code:0,data,
   if(result.code=== 0){
       //发送成功，得到数据
       const address = result.data;
       commit(RECEIVE_ADDRESS,{address})
     }
  },
  //异步获商家分类
  async getCategorys({commit}) {
    const result =  await reqFoodsCategorys();
    if(result.code === 0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})//分类在结果中
    }
  },
  async getShops({commit,state}) {
    const {latitude,longitude} = state;
    const result =  await reqShops({latitude,longitude});
    if(result.code === 0){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})//分类在结果中
    }
  }
}



