

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 全局指令注册


import App from './App.vue'
import router from './router'
//引入初始化样式
import '@/styles/common.scss'

//测试接口函数
// import { getCategoryAPI } from '@/apis/testAPi'

// getCategoryAPI().then(res =>(
//   console.log(res)
// // )
// )
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//引入懒加载组件并注册
// 全局指令注册
import {lazyPlugin } from '@/directives/index.js'
app.use(lazyPlugin)

// 引入全局组件插件
import { componentPlugin } from '@/components'
app.use(componentPlugin)