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
        src="../assets/images/home-main.jpg"
        alt="Self portrait of Darrel">
    </aside>
  </main>
</template>

<script>
export default {
  name: "Hero",
  methods: {
    goToMe() {
      document.getElementById("me").scrollIntoView({
      behavior: "smooth"
      })
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-between;
  width: 100%;
}

h1 {
  margin: 0;
  font-weight: 300;
  font-size: clamp(32px, 4vw, 52px);
}

h2 {
  margin: 0;
  font-weight: 900;
  font-size: clamp(62px, 8vw, 44px)
}

img {
  border:10px solid white;
  border-radius: 50%;
  width: clamp(200px, 20vw, 20vw);
}
</style>