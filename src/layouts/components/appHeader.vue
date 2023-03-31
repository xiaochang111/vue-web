<script setup lang="ts">
import { useRouter } from "vue-router";
import { isDark, toggleDark } from "@/composables";
import MenuItem from "../menu/MenuItem.vue";
import type { Menu } from "../menu/type";

const router = useRouter();

function menuSelect(index: string) {
  router.push({
    path: index,
  });
}

//path必须唯一，路由地址
const menus: Menu[] = [
  {
    path: "/home",
    title: "主页",
  },
  {
    path: "/read",
    title: "阅读",
  },
];
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="left-container"></div>
      <div class="content">
        <el-menu
          mode="horizontal"
          unique-opened
          class="navbar-menu"
          default-active="/home"
          @select="menuSelect"
        >
          <template v-for="menu in menus" :key="menu.path">
            <menu-item :menu="menu"></menu-item>
          </template>
        </el-menu>
        <div class="theme-toggler">
          <ElSwitch v-model="isDark" @change="toggleDark(isDark)"></ElSwitch>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
      flex-grow: 2;
      display: flex;
      align-items: center;

      .navbar-menu {
        flex-grow: 1;
        height: 55px;
      }
    }
  }
}
</style>
