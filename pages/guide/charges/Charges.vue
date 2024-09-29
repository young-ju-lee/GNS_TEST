<template>
  <PageTpyetab label="" :tabs="tabs" />
</template>

<script setup lang="ts">
import Basic from "./service/Basic.vue";

const tabs = [
  { name: "service", label: "서비스정보", component: Basic},
  { name: "service1", label: "서비스정보", component: Basic},
  { name: "service2", label: "서비스정보", component: Basic},
];
</script>
<script lang="ts">
export default {
  name: 'Basic'
}
</script>

<style lang="scss" scoped></style>