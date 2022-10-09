<template>
  <div class="base__container" :style="`--maxWidth: ${maxWidth}px`">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    maxWidth: {
      type: Number,
      default: 1760,
    },
  },
};
</script>

<style lang="scss" scoped>
.base__container {
  $maxWidth: var(--maxWidth);

  width: 95%;
  max-width: $maxWidth;
  margin: 0 auto;
}
</style>
