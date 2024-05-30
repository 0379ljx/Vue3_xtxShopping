import httpInstance from '@/utils/http'

//封装banner
 export function getBannerAPI (params ={ }) {
  const  {  distributionSite ='1'} = params
  return httpInstance ({
      url: '/home/banner',
      params: {
        distributionSite 
      }
    })
}
//封装组件数据
//新鲜好物
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}
//人气推荐
export const getHotAPI = () => {
  return  httpInstance( {
    url:'home/hot'
  })
}
//产品展示
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}