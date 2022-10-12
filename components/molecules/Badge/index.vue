<template>
  <div
    class="badge"
    :class="
      solid
        ? `badge__solid--${getVariant()}`
        : outline
        ? `badge__outline--${getVariant()}`
        : `badge--${getVariant()}`
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
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

type VariantsType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";

const allowedVariants: VariantsType[] = [
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
      type: String as PropType<VariantsType>,
      default: "primary",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    solid: {
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
    getVariant(): VariantsType {
      return allowedVariants.includes(this.variant)
        ? this.variant
        : allowedVariants[0];
    },
    getRadiusInRem(): number {
      return this.borderRadius / 16;
    },
    getCustomStyle(): { [key: string]: any } {
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

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 0.25rem 0.75rem;
  border-radius: 100rem;

  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: 500;

  white-space: nowrap;

  @each $variant, $color in $variants {
    &--#{$variant} {
      background: #{$color}44;
      color: $color;
    }

    &__solid--#{$variant} {
      background: #{$color}99;
      color: #ffffff;
    }

    &__outline--#{$variant} {
      background: transparent;
      border: 2px solid $color;
      color: $color;
      padding: calc(0.25em - 2px) calc(0.75rem - 2px);
    }
  }
}
</style>
