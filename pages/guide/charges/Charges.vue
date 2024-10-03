<template>
  <PageTpyetab label="" :tabs="tabs" />
</template>

<script setup lang="ts">
import Basic from "./service/Basic.vue";
import Backbone from "./service/Backbone.vue";

const tabs = [
  {
    name: "service",
    label: "전용회선서비스",
    component: Basic,
    subMenu: [
      { name: "service1", label: "기본회선", component: Basic },
      { name: "service2", label: "백본회선", component: Backbone },
    ],
  },
  {
    name: "service1",
    label: "인터넷 서비스",
    component: Basic,
    subMenu: [
      { name: "service1", label: "인터넷서비스", component: Basic },
    ],
  },
  {
    name: "service2",
    label: "인터넷 전화 서비스",
    component: Basic,
    subMenu: [
      { name: "service1", label: "기본회선", component: Basic },
      { name: "service2", label: "백본회선", component: Backbone },
    ],
  },
];
</script>
<script lang="ts">
export default {
  name: "Basic",
};
</script>

<style lang="scss" scoped></style>
