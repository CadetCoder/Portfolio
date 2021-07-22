<template>
  <div id="app">
   <transition name="menu-transition">
     <Menu 
      v-if="showMenu"
      class="menu-bar"
      v-on:close="showMenu = false"/>
   </transition>
   <transition name="hidden-div-transition">
     <div class="hidden-div"></div>
   </transition>
   <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 400 400"
      style="enable-background: new 0 0 400 400"
      xml:space="preserve"
      class="logo"
      @click="scrollToTop"
    />
    <Home id="home" class="section" />
    <Me id="me" class="section" />
    <FindMe id="find-me" />
  </div>
</template>

<script>
import Home from './section/Home'
import Me from './section/Me'
import FindMe from './section/FindMe'

export default {
  name: 'App',
  components: {
    Home,
    Me,
    FindMe
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    scrollToTop() {
      document.getElementById("app").scrollIntoView({
      behavior: "smooth"
      })
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
</style>
