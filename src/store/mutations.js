
//直接更新数据
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS
} from "./mutation-types"

export default {
  [RECEIVE_ADDRESS](state,{address}){
    //更新地址
      state.address = address;
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys;
  }
}
