<template>
  <div class="logo">
    <img :src="getLogoVariant()" alt="Payne Logo" :width="size" />
  </div>
</template>

<script lang="ts">
const allowedsVaraitns = ["black", "color", "no-background", "white"];

export default {
  props: {
    variant: {
      type: String,
      default: "no-background",
    },
    size: {
      type: Number,
      default: 128,
    },
  },
  methods: {
    getLogoVariant() {
      const variant = allowedsVaraitns.includes(this.variant)
        ? this.variant
        : allowedsVaraitns[0];
      return `/images/logo/logo-${variant}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
