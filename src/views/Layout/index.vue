<script setup>
  import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
  import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
  import LayoutFooter from '@/views/Layout/components/LayoutFoot.vue'
  import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'
  import { useCategoryStore } from '@/stores/category'
  import { onMounted }from "vue"
  const categoryStore =useCategoryStore()
  onMounted (()=>{
    categoryStore.getCategory()
  })

  </script>
  
  <template>
    <LayoutFixed></LayoutFixed>
    <LayoutNav />
    <LayoutHeader />
    <router-view></router-view>
    <LayoutFooter />
  </template>