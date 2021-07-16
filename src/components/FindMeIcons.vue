<template>
  <div class="find-me-icons-main-container"
  @click="openLink">
    <div class="fine-me-icons-header">
      <img :src="require(`../assets/icons/${title}-white.svg`)" class="horizontal-divider">
    </div>
  </div>
</template>

<style scoped>
.horizontal-divider {
  width: 1px;
  background-color: #313131;
  height: 30px;
}
</style>