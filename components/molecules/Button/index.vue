<template>
  <button
    class="button"
    :class="
      outline ? `button__outline--${getVariant()}` : `button--${getVariant()}`
    "
    :style="getCustomStyle()"
    v:bind="$attrs"
  >
    <slot name="leftElement" />

    <template v-if="text">
      <p>{{ text }}</p>
    </template>
    <template v-else>
      <slot />
    </template>

    <slot name="rightElement" />
  </button>
</template>

<script>
const allowedVariants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
];

export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "primary",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    textColor: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "",
    },
    borderColor: {
      type: String,
      default: "",
    },
    borderRadius: {
      type: Number,
      default: null,
    },
  },
  methods: {
    getVariant() {
      return allowedVariants.includes(this.variant)
        ? this.variant
        : allowedVariants[0];
    },
    getRadiusInRem() {
      return this.borderRadius / 16;
    },
    getCustomStyle() {
      return {
        ...(this.textColor && { color: this.textColor }),
        ...(this.bgColor && { background: this.bgColor }),
        ...(this.borderColor && { borderColor: this.borderColor }),
        ...(this.borderRadius && {
          borderRadius: `${this.getRadiusInRem()}rem`,
        }),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$variants: (
  "primary": $primary,
  "secondary": $secondary,
  "success": $success,
  "danger": $danger,
  "warning": $warning,
  "info": $info,
);

.button {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;

  gap: 0.5rem;

  font-size: 1rem;
  font-weight: 500;

  @each $variant, $color in $variants {
    &--#{$variant} {
      background: $color;
      color: #ffffff;

      transition: background-color 0.25s, box-shadow 0.25s;

      &:hover {
        background: darken($color, 8);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      }
    }

    &__outline--#{$variant} {
      background: transparent;
      border: 2px solid $color;

      padding: calc(0.75rem - 2px) calc(1.25rem - 2px);

      color: $color;

      transition: border-color 0.25s, background-color 0.25s, color 0.25s;

      &:hover {
        background: $color;
        color: #ffffff;
      }
    }
  }
}
</style>
