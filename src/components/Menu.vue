<template>
  <nav>
    <img
      class="close"
      src="../assets/icons/close.svg"
      @click="$emit('close')"
      alt="close menu"
    />
    <ul>
      <li>About Me</li>
      <li>Projects</li>
      <li>Find Me</li>
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
</style>