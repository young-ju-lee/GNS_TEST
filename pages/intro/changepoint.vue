<template>
  <main>
    <layoutPageTitle />
    
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