<script setup lang="ts">
import { isDark, toggleDark } from "@/composables";
import MenuItem from "./menu/MenuItem.vue";
import type { Menu } from "./menu/type";

const menus: Menu[] = [
  {
    path: "/home",
    title: "主页",
    children: [],
  },
];
</script>

<template>
  <header class="navbar">
    <div class="navbar-wrapper">
      <div class="header-container">
        <div class="left-container"></div>
        <div class="content">
          <el-menu mode="horizontal" unique-opened class="navbar-menu">
            <template v-for="menu in menus" :key="menu.path">
              <menu-item :menu="menu"></menu-item
            ></template>
          </el-menu>
          <div class="theme-toggler">
            <ElSwitch v-model="isDark" @change="toggleDark(isDark)"></ElSwitch>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  width: 100%;
  .navbar-wrapper {
    position: relative;
    border-bottom: 1px solid var(--el-border-color);
    top: 0;
    .header-container {
      height: 55px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .left-container {
        flex-grow: 1;
      }
      .content {
        display: flex;
        align-items: center;
        .navbar-menu {
          height: 55px;
        }
      }
    }
  }
}
</style>
