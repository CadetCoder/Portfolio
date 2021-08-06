<template>
  <nav>
    <img
      class="close"
      src="../assets/icons/close.svg"
      @click="$emit('close')"
      alt="close menu"
    />
    <ul>
      <li><a>About Me</a></li>
      <li><a>Projects</a></li>
      <li><a>Find Me</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  background-color: white;
  width: 40vw;
  color: #1c1c1c;
}
ul {
  list-style-type: none;
  display: flex;
  flex-flow: column nowrap;
}
li {
  font-size: clamp(40px, 5vw, 5vw);
  font-weight: 700;
  margin: 0.5em;
  cursor: pointer;
}
a {
  color: #1c1c1c;
  text-decoration: none;
}
</style>