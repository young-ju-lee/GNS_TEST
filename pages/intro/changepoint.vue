<template>
  <main>
    <layoutPageTitle
      :path="['제도소개']"
      title="정의" 
      description="kt그룹 4단계 국가정보통신서비스의 1,2,3단계 대비 달라진 <span>제도변경사항</span>을 알려드리겠습니다." 
    />
    
    <PageMaintab
      label="제도변경사항"
      :tabs="tabs"
    />
  </main>
</template>

<script setup lang="ts">
import Changeservice from '@/components/page/changepoint/Changeservice.vue';
import Changepointspeed from '@/components/page/changepoint/Changepointspeed.vue';
import Changepointsla from '@/components/page/changepoint/Changepointsla.vue';
import Changepointdis from '@/components/page/changepoint/Changepointdis.vue';

const tabs = [
  { name: 'service', label: '서비스', component: Changeservice },
  { name: 'speed', label: '속도체계', component: Changepointspeed },
  { name: 'sla', label: 'SLA', component: Changepointsla },
  { name: 'discount', label: '할인율', component: Changepointdis }
];
</script>