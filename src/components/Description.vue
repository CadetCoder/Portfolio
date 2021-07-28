<template>
  <article>
    <h2>A little about me</h2>
    <p>
      I am a Web Developer with experience in building responsive websites and web applications while keeping the aesthetic integrity.
      Experienced in semantic
      <span
        ref="reactive"
        @mouseenter="reactiveHighlight"
        @mouseleave="reactiveHighlightRemove"
        >HTML, CSS, JavaScript</span
      >
      and modern frameworks
      <span
        ref="gdesign"
        @mouseenter="gHighlight"
        @mouseleave="gHighlightRemove"
        >VueJs</span
      >
      <i class="fa fa-link" aria-hidden="true"></i>
    </p>
  </article>
</template>