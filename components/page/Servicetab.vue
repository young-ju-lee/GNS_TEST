<template>
    <div class="service-tab">
      <div class="current-label">
        <a href="javascript:">{{ label }}</a>
      </div>
      <ul>
        <li v-for="tab in tabs" :key="tab.name" :class="{ active: activeTab === tab.name }">
          <a href="javascript:" @click="changeTab(tab.name)">{{ tab.label }}</a>
        </li>
      </ul>
    </div>
  
    <section>
      <component :is="activeComponent" />
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const props = defineProps({
    label: String,
    tabs: {
      type: Array as () => { name: string, label: string, component: any }[],
      default: () => []
    }
  });
  
  const emits = defineEmits(['tab-change']);
  
  const route = useRoute();
  const router = useRouter();
  
  const activeTab = ref('');
  
  onMounted(() => {
    const tabFromQuery = route.query.tab as string | undefined;
    if (tabFromQuery && props.tabs.some(tab => tab.name === tabFromQuery)) {
      activeTab.value = tabFromQuery;
    } else {
      activeTab.value = props.tabs.length > 0 ? props.tabs[0].name : '';
    }
  });
  
  watch(() => route.query.tab, (newTab) => {
    if (newTab && props.tabs.some(tab => tab.name === newTab)) {
        activeTab.value = newTab as string;
    }
  });

  const changeTab = (tab: string) => {
    activeTab.value = tab;
    emits('tab-change', tab);
    router.push({ query: { ...route.query, tab } });
  };
  
  const activeComponent = computed(() => {
    const activeTabData = props.tabs.find(tab => tab.name === activeTab.value);
    return activeTabData ? activeTabData.component : null;
  });
  </script>
  
  <style lang="scss" scoped>
  .service-tab {
    position: relative;
  margin-bottom: 2rem;

  &.active {
    ul {
      display: block;
    }

    div.current-label > a:after {
      content: "expand_less"; /* 변경 필요 */
    }
  }

  div.current-label > a {
    display: block;
    font-size: 1.2rem;
    padding: 0.8rem 0.2rem;
    color: #e51c23;
    font-weight: bold;
    border-bottom: 1px solid #d1d1d1;
    position: relative;

    &:after {
      position: absolute;
      top: calc(50% - 12px);
      right: 1rem;
      font-size: 24px;
      content: "expand_more";
      font-family: "Material Icons";
      color: inherit;
    }
  }

  ul {
    width: 100%;
    display: flex;
    li {
        width: 20%;
        padding: 0 4px;
        text-align: center;
      a {
        display: block;
        font-size: 1.2rem;
        padding: 1rem;
        color: #333;
        font-weight: bold;
        border-bottom: 4px solid #e0e0e0;
        &:hover {
            border-bottom: 4px solid #e51c23;
            color: #e51c23;
        }
      }

      &.active > a {
        border-bottom: 4px solid #e51c23;
        color: #e51c23;
        position: relative;
        &::after{
            content: '';
            position: absolute;
            top: 100%;
            left: calc(50% - 5px);
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid #e51c23;
        }
      }
    }
  }

  div.current-label {
    display: none;
  }
}

  </style>
  