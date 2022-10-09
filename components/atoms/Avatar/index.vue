<template>
  <div class="avatar">
    <img
      v-if="isImageValid"
      draggable="false"
      class="avatar__image"
      :src="src"
      :alt="name"
      :width="size"
      :height="size"
      v-bind="$attrs"
      @error="handleImageFallback"
    />

    <p
      v-else
      :style="`--color: rgb(${getRandomColor()}); --size: ${getSizeInRem()}rem`"
      class="avatar__fallback"
      v-bind="$attrs"
    >
      {{ getNameInitials() }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 64,
    },
  },
  data() {
    return {
      isImageValid: false,
    };
  },
  created() {
    fetch(this.src, { mode: "no-cors" })
      .then(() => (this.isImageValid = true))
      .catch(() => (this.isImageValid = false));
  },
  methods: {
    handleImageFallback() {
      this.isImageValid = false;
    },
    getRandomNumberInRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    getRandomColor() {
      const color = [
        this.getRandomNumberInRange(0, 200),
        this.getRandomNumberInRange(0, 200),
        this.getRandomNumberInRange(0, 200),
      ];

      return color.join(", ");
    },
    getSizeInRem() {
      return this.size / 16;
    },
    getNameInitials() {
      const splitedName = String(this.name).trim().split(" ");

      if (splitedName.length > 1) {
        return String(`${splitedName[0][0]}${splitedName[1][0]}`).toUpperCase();
      }

      return String(
        `${splitedName[0][0]}${splitedName[0][splitedName[0].length - 1]}`
      ).toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  user-select: none;

  &__image {
    border-radius: 100rem;
  }
  &__fallback {
    $color: var(--color);
    $size: var(--size);

    border-radius: 100rem;

    background: $color;

    display: grid;
    place-items: center;

    width: $size;
    height: $size;

    color: #ffffff;

    font-size: min(calc($size / 2.5), 2rem);
  }
}
</style>
