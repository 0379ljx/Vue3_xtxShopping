import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI } from '@/apis/Layout.js'
export const useCategoryStore = defineStore('counter', () => {
//导航列表的数据管理
//state导航数据
const categoryList =ref([])
//action 获取导航数据的方法
const getCategory = async () =>{
  const res = await getCategoryAPI()
  categoryList.value =res.result

}

  return { 
    getCategory ,
    categoryList

   }
})
