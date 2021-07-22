<template>
  <div>
    <Description class="description"/>
  </div>
</template>
<script>
import Description from "../components/Description"
export default {
  name: "Me",
  components: {
    Description
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/patterns/topography.svg");
}
</style>