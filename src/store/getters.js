
export default {

  //总数量
  totalCount(state){
    return state.shopCartArr.reduce((prev,food)=>prev + food.count,0)
  },
  //总价格
  totalPrice(state){
    return state.shopCartArr.reduce((prev,food) => prev + food.count * food.price,0)
  }
}
