<script lang="ts" setup>
import { Menu } from "./type";
import { PropType } from "vue";

const props = defineProps({
  menu: {
    type: Object as PropType<Menu>,
    default: () => ({}),
    required: true,
  },
});
</script>

<template>
  <el-sub-menu v-if="menu?.children?.length" :index="menu.path">
    <template #title>
      <el-icon v-if="menu.icon"
        ><component :is="menu.icon"></component
      ></el-icon>
      <span>{{ menu.title }}</span>
    </template>
    <template v-for="(child, index) in menu?.children" :key="index">
      <template v-if="child?.children?.length">
        <menu-item :key="child.path" :menu="child" />
      </template>
      <el-menu-item v-else :index="child.path">
        <template #title>
          <el-icon v-if="child.icon"
            ><component :is="child.icon"></component
          ></el-icon>
          <span>{{ child.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <template #title>
      <el-icon v-if="menu.icon">
        <component :is="menu.icon"></component>
      </el-icon>
      <span>{{ menu.title }}</span>
    </template>
  </el-menu-item>
</template>
