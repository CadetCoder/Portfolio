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

h3 {
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: clamp(20px, 2.8vw, 44px);
}

img {
  border:10px solid white;
  border-radius: 50%;
  width: clamp(200px, 20vw, 20vw);
}
.title-wrapper {
  cursor: pointer;
  margin-top: 1.4em;
  padding: 1em;
  width: 100%;
  background-color: white;
  color: #1c1c1c;
  transition: all 0.2s ease-in-out;
  z-index: 2;
  border-radius: 50px;
}
.title-wrapper:hover {
  background-color: #23c481;
}
</style>