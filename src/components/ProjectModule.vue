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
       <p v-if="content">
    </p>
    <img
      class="cover-image"
      :src="coverImage"
      :alt="`Screenshot of ${projectName}`"
      @click="emitImage"
    />

    <button v-if="read" @click="readMore" class="more">
      <span v-if="type === 'Graphic Design'">
        Watch
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18"
          viewBox="0 0 24 24"
          width="18"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M4.2,0.2v23.6L22.8,12L4.2,0.2z" /></svg
      ></span>
      <span v-else> Read More </span>
    </button>
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
  color: #1c1c1c;
  width: 70vw;
  max-width: 1000px;
}
header {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.title-type {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
}
</style>