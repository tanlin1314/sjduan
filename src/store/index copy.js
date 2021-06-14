import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var Store=new Vuex.Store({
  // 所有交互数据都保存在仓库state中
  state: {
      num:0,  //递值 存值
      name:'',
      arr:[{name:'掌w声3',age:18},{name:'掌w声',age:13},{name:'掌e声',age:14},{name:'掌f声',age:181},]
  },
  //改变 修改state值的唯一方式
  mutations: {
    // 改变函数  --只能操作函数
      tan(state,val){
        // console.log(val);
        state.num+=val
      },
      name(state,val){
        state.name=val
      },
      arr(state){
        state.name
      }
  },
  // getters:计算属性  必须return  同computed
  getters: {
    // 拿到arr所有名字带w的
    gettersDate(state){
      return state.arr.filter(obj=>{
        return  obj.name.includes('w')
      })
    }
  },
  modules: {
  }  
})
// Store.commit('mutations函数',参数)
Store.commit('name','掌声') //触发一个小的mutations  把mutations调用
console.log(Store.state.name);  //取值
console.log(Store.getters.gettersDate);  //取值

export default Store

