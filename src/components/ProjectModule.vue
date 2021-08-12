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
         {{ content }}
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
.type-meta {
  margin-left: 2em;
  border-radius: 30px;
  background-color: #e8e8e8;
  padding: 0.5em 1.5em;
  color: #939393;
  user-select: none;
  transition: all 0.2s ease-in-out;
}
.type-meta:hover {
  color: #939393;
  background-color: #d8d8d8;
}

.more {
  cursor: pointer;
  position: absolute;
  font-size: 1.4em;
  font-weight: 600;
  background-color: white;
  color: #1c1c1c;
  border: 4px solid #1c1c1c;
  border-radius: 15px;
  padding: 0.5em;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: all 0.2s ease-in-out;
  outline: none;
}
.more:hover {
  background-color: #1c1c1c;
  color: white;
  border: 4px solid white;
}
.more span {
  display: flex;
  align-items: center;
}
.more:hover span {
  fill: #ffffff;
}
.more span svg {
  margin-left: 0.2em;
}
.preview-platform-icons {
  width: 30px;
  font-weight: 600;
  margin-left: 2em;
  opacity: 0.6;
  transition: opacity 0.2 ease-in-out;
}
</style>