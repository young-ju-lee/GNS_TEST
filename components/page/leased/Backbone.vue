<template>
  <PageSubtab label="제도변경사항" :tabs="tabs" />
</template>

<script setup lang="ts">
import Service from "./backbone/Service.vue";
import Price from "./backbone/Price.vue";

const tabs = [
  { name: "service", label: "서비스정보", component: Service, icon: "live_help" },
  { name: "price", label: "요금안내", component: Price, icon: "receipt" },
];
</script>

<style lang="scss" scoped></style>