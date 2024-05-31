//封装分类业务banner代码

import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/Home.js'

export function useBanner () {
  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: '2'
    })
    console.log(res)
    bannerList.value = res.result
  }

  onMounted(() => getBanner())

  return {
    bannerList
  }
}