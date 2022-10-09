<template>
  <div
    class="product__grid__container"
    :style="`--maxWidth: ${maxWidth}px; --maxColItems: ${maxColItems}`"
  >
    <slot name="header" />

    <div class="product__grid__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    maxWidth: {
      type: Number,
      default: 1760,
    },
    maxColItems: {
      type: Number,
      default: 2,
    },
  },
};
</script>

<style lang="scss" scoped>
.product__grid__container {
  $maxWidth: var(--maxWidth);
  $maxColItems: var(--maxColItems);

  padding: 2rem 0;

  .product__grid__content {
    padding: 2rem 0;

    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc(($maxWidth / $maxColItems) - 2rem), 1fr)
    );
    gap: 2rem;

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
