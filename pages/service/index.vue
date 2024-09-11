<template>
    <main>
        <layoutPageTitle 
            title="kt그룹서비스" 
            description="kt그룹 국가정보통신서비스의 <span>전용회선 서비스</span>를 알려드리겠습니다." 
        />
        
        <PageServicetab
          label="기본회선 서비스"
          :tabs="tabs"
        />
    </main>
  </template>
  
  <script setup lang="ts">
  import Aservice from '@/components/page/service/Aservice.vue';
  import Bservice from '@/components/page/service/Bservice.vue';
  import Cservice from '@/components/page/service/Cservice.vue';
  import Dservice from '@/components/page/service/Dservice.vue';
  import Eservice from '@/components/page/service/Eservice.vue';

  const tabs = [
    { name: 'A', label: 'A. 전용회선서비스', component: Aservice },
    { name: 'B', label: 'B.인터넷서비스', component: Bservice },
    { name: 'C', label: 'C. 인터넷전화서비스', component: Cservice },
    { name: 'D', label: 'D. 무선서비스', component: Dservice },
    { name: 'E', label: 'E. CCTV서비스', component: Eservice },
  ];
  </script>


