<template>
  <div
    @click="$emit('clicked', type)"
    :class="state ? 'type-meta-active' : 'type-meta'"
  >
    {{ type }} <img v-if="type === 'Favorites'" src="../assets/icons/star.svg" alt="favorites" />
  </div>
</template>

<script>
export default {
  name: "FilterTags",
  props: {
    type: {
      type: String,
      required: true
    },
    state: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>