<template>
  <main>
    <layoutPageTitle/>

    <PageMaintab label="기본회선 서비스" :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Basic from "./internet/Basic.vue";
import Infra from "./internet/Infra.vue";

const tabs = [
  { name: "basic", label: "인터넷 서비스", component: Basic },
  { name: "infra", label: "인터넷 서비스 인프라", component: Infra },
];
</script>
