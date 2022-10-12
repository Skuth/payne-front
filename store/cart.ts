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
