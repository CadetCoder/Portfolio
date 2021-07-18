<template>
  <div class="main-container">
    <h1>Contact Me</h1>
    <div class="find-me-container">
      <img ref="img" src="" alt="">
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
  }
}
</script>