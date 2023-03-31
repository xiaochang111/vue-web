<script setup lang="ts">
import appHeader from "./components/appHeader.vue";
import appFooter from "./components/appFooter.vue";
import threeColumnLayout from "./components/threeColumnLayout.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

//TODO三栏布局slot透传

enum LayoutMode {
  //三栏布局
  COLUMN = "threeCoLumn",
  //不需要布局
  CONTENT = "content",
}

const layout = ref<LayoutMode>(LayoutMode.COLUMN);
const route = useRoute();

onMounted(() => {
  if (route.meta.layout) {
    layout.value = route.meta.layout as LayoutMode;
  }
});
</script>
<template>
  <header class="navbar">
    <app-header></app-header>
  </header>
  <main>
    <!-- 三栏式布局 -->
    <three-column-layout v-if="layout === LayoutMode.COLUMN" v-bind="$attrs">
    </three-column-layout>
    <!-- 其他布局 -->
    <router-view v-else></router-view>
  </main>
  <footer>
    <app-footer></app-footer>
  </footer>
</template>

<style scoped lang="scss">
.navbar {
  position: sticky;
}

main {
  height: 100%;
  padding: 9px 12px;
}
</style>
