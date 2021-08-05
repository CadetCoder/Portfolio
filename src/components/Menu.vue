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