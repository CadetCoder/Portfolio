<template>
  <div id="app">
   <transition name="menu-transition">
     <Menu class="menu-bar"/>
   </transition>
   <transition name="hidden-div-transition">
     <div class="hidden-div"></div>
   </transition>
    <FindMe id="find-me" />
  </div>
</template>

<script>
import FindMe from './section/FindMe'

export default {
  name: 'App',
  components: {
    FindMe
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
