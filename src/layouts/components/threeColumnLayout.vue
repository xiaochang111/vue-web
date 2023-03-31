<script setup lang="ts">
defineProps({
  leftWidth: {
    type: String,
    default: () => "30%",
  },
  rightWidth: {
    type: String,
    default: () => "30%",
  },
});
</script>

<template>
  <div class="view-three-column">
    <div class="left" :style="{ width: leftWidth }">
      <slot name="leftSideContent"> </slot>
    </div>
    <div class="middle">
      <slot> <router-view></router-view> </slot>
    </div>
    <div class="right" :style="{ width: rightWidth }">
      <slot name="rightSideContent"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.view-three-column {
  display: flex;
  justify-content: space-between;
  height: 100%;
  .left {
  }

  .right {
  }

  .middle {
    width: 100%;
    padding: 9px 12px;
  }
}
</style>
