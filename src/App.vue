<script setup lang="ts">
import appHeader from "./layouts/appHeader.vue";
const zIndex = 3000;
</script>

<template>
  <el-config-provider size="default" :z-index="zIndex">
    <app-header></app-header>
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
