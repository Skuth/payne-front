<template>
  <TemplatesCart />
</template>

<script lang="ts">
import { useCart } from "@/store/cart";

export default {
  async setup() {
    const cart = useCart();
    await cart.getProductsFromCart();

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
