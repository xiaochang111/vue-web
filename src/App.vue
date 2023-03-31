<script setup lang="ts">
const zIndex = 3000;
</script>

<template>
  <el-config-provider size="default" :z-index="zIndex">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
