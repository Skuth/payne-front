<template>
  <div class="cart__template">
    <div class="cart__header">
      <h2>Meu Carrinho</h2>
    </div>

    <div class="cart__container">
      <div class="cart__body">
        <div
          v-for="item in cartItems"
          :key="`${item.productId}-${item.optionId}`"
          class="cart__item"
        >
          <div v-if="item.product && item.option">
            <img
              class="image"
              :alt="`${item.product.title} - ${item.option.title}`"
              :src="item.option.image"
            />

            <div class="info">
              <p>{{ item.product.title }}</p>
              <span>{{ item.option.title }}</span>
            </div>
          </div>

          <div v-if="item.product && item.option">
            <MoleculesInput
              type="number"
              name="count"
              :value="item.count"
              :min="item.count"
              :max="item.count"
              disabled
            />
            <p>R$ {{ item.option.price * item.count }}</p>
          </div>
        </div>
      </div>

      <div class="cart__footer">
        <div class="info">
          <p class="count">{{ cartItemsCount }} Produtos</p>
          <p class="price">R$ {{ getCartTotal() }}</p>
        </div>

        <div class="action">
          <MoleculesButton text="Pagar agora" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useCart } from "@/store/cart";

export default {
  async setup() {
    const cart = useCart();

    const cartItems = await cart.getProductsFromCart();
    const cartItemsCount = computed(() => cart.getCartItemsCount);

    return {
      cartItems,
      cartItemsCount,
    };
  },
  methods: {
    getCartTotal() {
      const total = this.cartItems.reduce((prev: number, curr): number => {
        const currTotal = curr!.option!.price * curr.count;
        prev = Number(prev + currTotal);

        return prev;
      }, 0);

      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &__template {
    padding-bottom: 2rem;
  }

  &__header {
    padding: 2rem 0;
  }

  &__container {
    overflow: hidden;
    background: $gray4;
    border-radius: 0.5rem;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
  }

  &__body,
  &__footer {
    padding: 2rem;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 0;

    & + & {
      border-top: 1px solid $gray1;
    }

    > div:first-child {
      display: flex;
      gap: 2rem;
      align-items: center;

      .image {
        display: block;
        width: 64px;
        height: 64px;
        object-fit: contain;
        filter: drop-shadow(5px 10px 20px rgba(0, 0, 0, 0.2));
      }

      .info {
        p {
          font-weight: bold;
          font-size: 1rem;
          color: $textColor;
        }
        span {
          font-weight: 300;
          color: $gray3;
        }
      }
    }

    > div:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      width: 220px;

      :deep(.input) {
        width: 80px;
        > input {
          text-align: center;
        }
      }

      p {
        font-weight: bold;
        font-size: 1.25rem;
        text-align: right;
      }
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 1px solid $gray1;

    .info {
      display: flex;
      align-items: center;
      gap: 2rem;

      .count {
        font-size: 1rem;
      }

      .price {
        font-size: 1.25rem;
        font-weight: bold;
      }
    }
  }
}
</style>
