import { defineStore } from "pinia";

type AddItemToCartType = {
  productId: string;
  optionId: string;
};
type RemoveItemFromCartType = {
  productId: string;
  optionId: string;
};

export interface Cart {
  productId: string;
  optionId: string;
  count: number;
}

export const useCart = defineStore("cart", {
  state: () => {
    return {
      cart: [] as Cart[],
    };
  },
  getters: {
    getCart(state): Cart[] {
      return state.cart;
    },
    getCartItemsCount(state): string {
      return String(state.cart.length || 0);
    },
  },
  actions: {
    async getProductsFromCart() {
      const idList = this.cart.reduce((prev: string[], curr): string[] => {
        if (!prev.includes(curr.productId)) {
          prev.push(curr.productId);
        }

        return prev;
      }, []);

      const productList = await useFetch(`/api/product`, {
        query: {
          id: idList,
        },
      })
        .then((res) => res.data)
        .then((res) => res.value)
        .then((res) => res?.data)
        .catch(() => null);

      return this.cart.map((item) => {
        const product = productList?.find(
          (product) => product?.id == item.productId
        );
        const option = product?.options.find(
          (option) => option.id == item.optionId
        );

        return {
          ...item,
          product,
          option,
        };
      });
    },
    addItemToCart({ productId, optionId }: AddItemToCartType): void {
      const itemIndex = this.cart.findIndex(
        (item) => item.productId == productId && item.optionId == optionId
      );

      if (itemIndex >= 0) {
        this.cart[itemIndex].count += 1;
      } else {
        this.cart.push({
          productId,
          optionId,
          count: 1,
        });
      }
    },
    removeItemFromCart({ productId, optionId }: RemoveItemFromCartType): void {
      this.cart = this.cart.filter(
        (item) => item.productId != productId && item.optionId != optionId
      );
    },
  },
  persist: {
    key: "@Payne:Cart",
  },
});
