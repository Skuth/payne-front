<template>
  <div class="banner">
    <MoleculesCard :hasHover="false" :padding="0">
      <img :src="src" :alt="alt" draggable="false" />
    </MoleculesCard>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  img {
    display: block;

    width: 100%;
    object-fit: cover;
  }
}
</style>
