<template>
  <article>
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