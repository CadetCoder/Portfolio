<template>
  <div>
    <footer>
      <img src="../assets/logo/logo-dark.svg" alt="dtoledo logo" />
      <div class="vertical-divider"></div>
      <h1>Darrel Toledo</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterCurve"
}
</script>

<style scoped>
footer {
  height: 30vh;
  width: 60vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  background-color: white;
  user-select: none;
}
</style>