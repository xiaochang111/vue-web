<script setup lang="ts">
import appHeader from "@/layouts/appHeader.vue";
import appContent from "@/layouts/appContent.vue";
const zIndex = 3000;
</script>

<template>
  <el-config-provider size="default" :z-index="zIndex">
    <app-header></app-header>
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
