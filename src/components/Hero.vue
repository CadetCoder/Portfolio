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
      <img src="" alt="">
    </aside>
  </main>
</template>