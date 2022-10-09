<template>
  <div
    class="card"
    :class="{ 'card--hover': hasHover }"
    :style="getCustomStyle()"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    hasHover: {
      type: Boolean,
      default: true,
    },
    padding: {
      type: Number,
      default: 16,
    },
  },
  methods: {
    getPaddingInRem(): number {
      return this.padding / 16;
    },
    getCustomStyle(): { [key: string]: any } {
      return {
        ...(this.padding && { padding: `${this.getPaddingInRem()}rem` }),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  &--hover {
    transition: box-shadow 0.25s;

    &:hover {
      box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
