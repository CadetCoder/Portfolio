<template>
  <article class="project-container">
    <header>
      <div class="title-type">
        <h1></h1>
        <div class="type-meta"></div>
      </div>
      <div class="custom-icons">
        <a
          v-for="(link, platform) in preview"
          :key="platform.index"
          :href="link"
          target="_blank"
          rel="noopener"
        >
          <img
            class="preview-platform-icons"
            :src="require(`../assets/icons/${platform}.svg`)"
            :alt="`link for ${platform}`"
          />
        </a>
      </div>
    </header>
  </article>
</template>

<script>
export default {
  //
}
</script>

<style scoped>
.project-container {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  padding: 2em 2em 4em 2em;
  background-color: white;
  border-radius: 40px;
}
</style>