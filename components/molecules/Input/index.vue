<template>
  <div class="input__container">
    <label v-if="label" :for="getLabelForValue()">
      {{ label }} <span v-if="isRequired" class="required">*</span>
    </label>

    <div
      class="input"
      :class="[`input--${getVariant()}`, { disabled: disabled }]"
      :style="getCustomStyle()"
    >
      <slot name="leftElement" />

      <Field
        :id="getLabelForValue()"
        :type="type"
        :name="name"
        :class="{ 'input--error': error }"
        :disabled="disabled"
        :required="isRequired"
        v-bind="$attrs"
      />

      <slot name="rightElement" />
    </div>

    <div
      v-if="error"
      class="error__container"
      :class="`error--${getVariant()}`"
    >
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Field } from "vee-validate";

type InputType =
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

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
    variant: {
      type: String as PropType<VariantsType>,
      default: "primary",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String as PropType<InputType>,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
    errorType: {
      type: String as PropType<VariantsType>,
      default: "danger",
    },
    disabled: {
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
  components: {
    Field,
  },
  methods: {
    getVariant(): VariantsType {
      const variant = allowedVariants.includes(this.variant)
        ? this.variant
        : allowedVariants[0];

      return !this.error ? variant : this.errorType;
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
    getLabelForValue(): string {
      return `${this.name.toLowerCase()}-${this.type.toLowerCase()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
$variants: (
  "primary": $gray3,
  "secondary": $secondary,
  "success": $success,
  "danger": $danger,
  "warning": $warning,
  "info": $info,
);

.input__container {
  > label {
    margin-bottom: 0.5rem;
    display: block;

    font-size: 1rem;
    font-weight: 700;
    color: $textColor;
  }

  > .error__container {
    margin-top: 0.5rem;
    display: block;

    @each $variant, $color in $variants {
      &.error--#{$variant} {
        color: $color;
      }
    }
  }

  .required {
    color: $primary;
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 0.75rem;
    font-weight: 500;

    white-space: nowrap;

    transition: background-color 0.25s, border-color 0.25s;

    &,
    > input {
      border-radius: 0.5rem;
    }

    > input {
      width: 100%;
      padding: 0.75rem 1rem;
      background: transparent;
      font-weight: 500;
      font-size: 1rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: $gray6;
        font-weight: 500;
      }
    }

    @each $variant, $color in $variants {
      &--#{$variant} {
        background: transparent;
        border: 1px solid $color;
        color: $textColor;
        &:focus-within {
          background: #{$color}22;
        }

        &.disabled {
          background: #{$color}44;
        }
      }
    }
  }
}
</style>
