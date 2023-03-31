<script setup lang="ts"></script>
<template>
  <div class="view-main-container">
    <div class="left">/div>
    <div class="middle">    <router-view></router-view></div>
    <div class="right"></div>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  display: flex;
  justify-content: space-between;
}

// .left,
// .right,
// .middle {

// }

.left {
  width: 200px;
  background: coral;
}

.right {
  width: 120px;
  background: lightblue;
}

.middle {
  background: #555;
  width: 100%;
  margin: 0 20px;
}
</style>
