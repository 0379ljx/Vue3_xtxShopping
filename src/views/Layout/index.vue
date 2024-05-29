<script setup>
  import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
  import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
  import LayoutFooter from '@/views/Layout/components/LayoutFoot.vue'
  </script>
  
  <template>
    <LayoutNav />
    <LayoutHeader />
    <router-view></router-view>
    <LayoutFooter />
  </template>