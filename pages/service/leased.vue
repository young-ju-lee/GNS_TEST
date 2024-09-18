<template>
  <main>
    <layoutPageTitle
      :path="['제도소개']"
      title="전용회선 서비스"
      description="kt그룹 국가정보통신서비스의 <span>전용회선 서비스</span>를 알려드리겠습니다."
    />

    <PageMaintab label="기본회선 서비스" :tabs="tabs" />
  </main>
</template>

<script setup lang="ts">
import Basic from "@/components/page/leased/Basic.vue";
import Backbone from "@/components/page/leased/Backbone.vue";
import Infra from "@/components/page/leased/Infra.vue";

const tabs = [
  { name: "basic", label: "기본회선 서비스", component: Basic },
  { name: "backbone", label: "백본회선 서비스", component: Backbone },
  { name: "infra", label: "전용회선 인프라", component: Infra },
];
</script>
