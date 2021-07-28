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
      . Always puts effort in making User Interface beautiful and practical with
      tools like
      <span
        ref="uidesign"
        @mouseenter="uiHighlight"
        @mouseleave="uiHighlightRemove"
        >Photoshop, Wireframe and Figma</span
      >
      .
    </p>
    <p>
      In my free time I work on cool projects while experimenting with new
      technologies. Currently I'm working on a social media style app with NodeJS, mySQL and Sequelize.
    </p>
</template>