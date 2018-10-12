/*
*发请求，间接更新数据
*引入ajax请求函数,
* 引入
* */
//发送请求
import {reqAddress} from "../Api"
//获取数据
import {RECEIVE_ADDRESS} from "./mutation-types"


//更新数据的逻辑
export default {
  //得到地址
 async getAddress({commit,state}){
    //传入经度，维度
    const {latitude,longitude} = state;

    const result = await reqAddress(latitude+","+longitude);//code:0,data
   console.log(2222222);
   console.log(result);
   if(result.code=== 0){
       //发送成功，得到数据
       const address = result.data;
       commit(RECEIVE_ADDRESS,{address})
     }
  }
}




