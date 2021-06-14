import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store=new Vuex.Store({
  // 所有交互数据都保存在仓库state中
  state: {
    goodsListName: [], //商品数组
  },
  //改变 修改state值的唯一方式
  mutations: {
    goodsListName(state,val){
      state.goodsListName=val
    }
  },
  // getters:计算属性  必须return  同computed
  getters: {

  },
  modules: {
  }  
})

export default store

