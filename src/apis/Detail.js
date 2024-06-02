import httpInstance from '@/utils/http'

export const getDetail = (id) => {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}
//获取热品商品
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return httpInstance({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}