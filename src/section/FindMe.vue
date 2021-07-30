<template>
  <div class="main-container">
    <h1>Contact Me</h1>
    <div class="find-me-container">
      <img
        ref="img"
        src="../assets/images/home-img.jpg"
        alt="Self portrait of Darrel"
        @mouseenter="imagePopup"
        @mouseleave="imagePopdown"  
       />
      <div class="icons">
        <FindMeIcons
          class="email"
          title="email"
          content="darreltoledo@icloud.com"
        />
        <FindMeIcons
          title="github"
          content="cadetCoder"
          link="https://github.com/cadetCoder"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FindMeIcons from "../components/FindMeIcons"
export default {
  name: "FindMe",
  components:{
    FindMeIcons
  },
  methods: {
    imagePopup() {
      const img = this.$refs.img;
      const tl = new TimelineLite();

      tl.to(img, {
        boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.55)",
        scale: 1.1,
      });
    },
    imagePopdown() {
      const img = this.$refs.img;
      const tl = new TimelineLite();

      tl.to(img, {
        scale: 1,
      });
    }
  },
}
</script>