<template>
  <div class="cart__template">
    <div class="cart__header">
      <h2>Meu Carrinho</h2>
    </div>

    <div class="cart__container">
      <div class="cart__body">
        <template v-if="cartItems.length">
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
                <NuxtLink
                  :href="`/produto/${item.product.id}/${$slugifyString(
                    item.product.title
                  )}`"
                >
                  {{ item.product.title }}
                </NuxtLink>
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
        </template>

        <template v-else>
          <div class="cart__empty">
            <h2>Opss!</h2>
            <p>Parece que ainda não tem nada aqui</p>
          </div>
        </template>
      </div>

      <div class="cart__footer" v-if="cartItems.length">
        <div class="info">
          <p class="count">{{ cartItemsCount }} Produtos</p>
          <p class="price">R$ {{ cartTotal }}</p>
        </div>

        <div class="action">
          <MoleculesButton text="Pagar agora" @click="handleGoToCheckout()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useCart } from "@/store/cart";

export default {
  setup() {
    const cart = useCart();

    const cartItems = computed(() => cart.getCartFull);
    const cartItemsCount = computed(() => cart.getCartItemsCount);
    const cartTotal = computed(() => cart.getCartTotal);

    return {
      cartItems,
      cartItemsCount,
      cartTotal,
    };
  },
  methods: {
    handleGoToCheckout(): void {
      const cart = useCart();
      cart.clearCart();
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

  &__empty {
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h2 {
      padding: 1rem 0;
    }
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
        a {
          font-weight: bold;
          font-size: 1rem;
          color: $textColor;
          display: block;
          transition: color 0.25s;

          &:hover {
            color: $primary;
          }
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
