<template>
  <main>
      <layoutPageTitle 
          :path="['제도소개']"
          title="전용회선 서비스" 
          description="kt그룹 국가정보통신서비스의 <span>전용회선 서비스</span>를 알려드리겠습니다." 
      />
      
      <PageMaintab
        label="기본회선 서비스"
        :tabs="tabs"
      />
  </main>
</template>

<script setup lang="ts">
import Basic from '@/components/page/leased/Basic.vue';
import Changepointspeed from '@/components/page/changepoint/Changepointspeed.vue';
import Changepointsla from '@/components/page/changepoint/Changepointsla.vue';
import Changepointdis from '@/components/page/changepoint/Changepointdis.vue';

const tabs = [
  { name: 'basic', label: '서비스', component: Basic },
  { name: 'speed', label: '백본회선 서비스', component: Changepointspeed },
  { name: 'sla', label: '전용회선 인프라', component: Changepointsla },
];
</script>