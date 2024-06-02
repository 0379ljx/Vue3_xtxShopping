import { defineStore} from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/User.js'

export const useUserStore = defineStore('user', () => {
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }
  // 3. 以对象的格式把state和action return
  return {
    getUserInfo,
    userInfo
  }
}, {
  persist: {
   enabled: true,
  }
})