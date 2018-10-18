
//直接更新数据
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DEINCREMENT_FOOD_COUNT
} from "./mutation-types"

import Vue from 'vue';

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    //更新地址
    state.address = address;
  },

  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops;
  },

  [RECEIVE_USER](state, {user}) {
    state.user = user;
  },

  [RESET_USER](state) {
    state.user = {};
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods;
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings;
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info;
  },

  [INCREMENT_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count++;
    } else {
      Vue.set(food, 'count', 1)//指定新的属性count，且指定值为1
    }
  },

  [DEINCREMENT_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count--;
    }
  }
}
