import axios from 'axios'
// 设置服务器IP地址
axios.defaults.baseURL = 'http://localhost:5000'

// export const API_ADD_ACCOUNT = (account, password, userGroup) => axios.post("/users/add", { account, password, userGroup })
// 商品
export const API_ADD_list = () => axios.get("/goods/goods_list", { params: {} })
// 商家
export const API_ADD_seller = () => axios.get("/shop/seller", { params: {} })
// 评价
export const API_ADD_ratings = () => axios.get("/shop/ratings", { params: {} })