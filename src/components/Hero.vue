<template>
  <main>
    <div class="hero-text">
      <h1 ref="greeting">Hi I'm</h1>
      <h2 ref="name">Darrel.</h2>
      <div ref="profession" @click="goToMe" class="title-wrapper">
        <h3>Web Developer</h3>
      </div>
    </div>
    <aside class="hero-image">
      <img
        ref="img"
        src=""
        alt="Self portrait of Darrel">
    </aside>
  </main>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style scoped>
main {
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-between;
  width: 100%;
}
</style>