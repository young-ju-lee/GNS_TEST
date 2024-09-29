<template>
  <main>
    <layoutPageTitle />
    <PageMaintab :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Charges from "./charges/Charges.vue";

const tabs = [
  { name: "charges", label: "요금표", component: Charges },
  { name: "charges2", label: "요금표", component: Charges },
];
</script>
