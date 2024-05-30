import httpInstance from '@/utils/http.js'
export const getTopCategoryAPI = (id) => {
  return httpInstance({
    url:'/category',
    params:{
      id
    }
  })
}