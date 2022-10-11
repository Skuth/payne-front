<template>
  <TemplatesProduct />
</template>

<script lang="ts">
import { useProduct } from "@/store/product";

export default {
  async setup() {
    const route = useRoute();
    const router = useRouter();

    const product = useProduct();

    const { $slugifyString } = useNuxtApp();

    const productId = String(route.params.id);

    if (!productId) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }

    await product.getSingleProduct(productId);

    const currentProduct = product.getProduct;

    if (!Object.values(currentProduct).length) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }

    router.replace({
      path: `/produto/${productId}/${$slugifyString(currentProduct.title)}`,
    });
  },
};
</script>
