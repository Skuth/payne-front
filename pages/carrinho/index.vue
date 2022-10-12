<template>
  <div>
    <pre>{{ cartItems }}</pre>
  </div>
</template>

<script lang="ts">
import { useCart } from "@/store/cart";

export default {
  setup() {
    const cart = useCart();
    const cartItems = computed(() => cart.getCart);

    return {
      cartItems,
    };
  },
};
</script>

<style lang="scss" scoped></style>
