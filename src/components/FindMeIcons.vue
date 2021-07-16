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
.find-me-icons-main-container {
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #111111;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
}
</style>