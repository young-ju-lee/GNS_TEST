<template>
    <PageSubtab
        label="제도변경사항"
        :tabs="tabs"
    />
  </template>
  
  <script setup lang="ts">
  import Changeservice from '@/components/page/changepoint/Changeservice.vue';
  import Changepointspeed from '@/components/page/changepoint/Changepointspeed.vue';
  
  const tabs = [
    { name: 'service', label: '서비스정보', component: Changeservice },
    { name: 'price', label: '요금안내', component: Changepointspeed },
  ];
  </script>