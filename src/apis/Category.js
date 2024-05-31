import httpInstance from '@/utils/http.js'

//获取一级分类数据
export const getTopCategoryAPI = (id) => {
  return httpInstance({
    url:'/category',
    params:{
      id
    }
  })
}

//获取二级分类数据

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}