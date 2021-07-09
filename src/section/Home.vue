<template>
  <div id="home">
  </div>
</template>
<script>
export default {
  //
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#home::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/patterns/Reuss.svg");
}
.hero {
  width: 80vw;
}
</style>>