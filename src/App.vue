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
    >
    <g>
        <path
          class="st0"
          d="M308,89.9v234h-35.4v-36.6c-21.6,22.8-52.2,36.6-85.8,36.6c-66.6,0-120-54-120-120c0-66,53.4-120,120-120
		c33.6,0,64.2,13.8,85.8,36.6V89.9H308z M272.6,204.5c0-47.4-38.4-85.8-84.6-85.8c-48,0-86.4,38.4-86.4,85.8
		c0,46.8,38.4,85.2,86.4,85.2C234.2,289.7,272.6,251.3,272.6,204.5z"
        />
      </g>
    </svg>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      style="enable-background: new 0 0 24 24"
      xml:space="preserve"
      class="menu"
      @click="showMenu = true"
    >
      <path class="st1" d="M0,0h24v24H0V0z" />
      <path
        class="st2"
        d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"
      />
    </svg>
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
