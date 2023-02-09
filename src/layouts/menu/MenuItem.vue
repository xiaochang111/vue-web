<script lang="ts" setup>
import { menuItemEmit, menuItemProps } from "./type";
import { toRefs } from "vue";

const props = defineProps(menuItemProps);
console.log("mete", props);
</script>

<template>
  <el-menu-item
    v-if="!menu || !menu.children || menu.children.length === 0"
    :index="menu.path"
  >
    <template #title>
      <el-icon v-if="menu.icon">
        <component :is="menu.icon"></component>
      </el-icon>
      <span>{{ menu.title }}</span>
    </template>
  </el-menu-item>

  <el-sub-menu v-else :index="menu.path">
    <template #title>
      <el-icon v-if="menu.icon"
        ><component :is="menu.icon"></component
      ></el-icon>
      <span>{{ menu.title }}</span>
    </template>

    <template v-for="(item, index) in menu.children" :key="index">
      <menu-item :menu="item" />
    </template>
  </el-sub-menu>
</template>
