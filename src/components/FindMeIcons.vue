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

.find-me-icons-main-container:hover {
  background-color: #1c1c1c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
}

.find-me-icons-main-container:hover img {
  opacity: 0.9;
}

find-me-icons-main-container:hover strong {
  opacity: 0.9;
}
</style>