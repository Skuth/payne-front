import { defineStore } from "pinia";

import { Product } from "@/interfaces/Products";

export const useProduct = defineStore("product", {
  state: () => {
    return {
      product: {} as Product,
    };
  },
  getters: {
    getProduct(state) {
      return state.product;
    },
  },
  actions: {
    async getSingleProduct(productId: string) {
      this.product = {} as Product;

      const response = (await useFetch(`/api/product/${productId}`, {
        initialCache: false,
        key: productId,
      })
        .then((res) => res.data)
        .then((res) => res.value)
        .then((res) => res?.data || {})
        .catch(() => ({}))) as Product;

      this.product = response;
    },
  },
});
