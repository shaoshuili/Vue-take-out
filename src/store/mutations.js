
//直接更新数据
import {RECEIVE_ADDRESS} from "./mutation-types"

export default {
  [RECEIVE_ADDRESS](state,{address}){
      state.address = address;
  },
}
