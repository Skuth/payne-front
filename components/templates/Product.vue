<template>
  <div class="product__template">
    <div class="product">
      <div class="product__image">
        <img :src="activeProductOption.image" :alt="product.title" />
      </div>

      <div class="product__content">
        <div class="info">
          <div>
            <div class="title">{{ product.title }}</div>
            <p class="option__title">{{ activeProductOption.title }}</p>
          </div>

          <p class="price">
            R$ <span>{{ activeProductOption.price }}</span>
          </p>
        </div>

        <p class="description">{{ product.description }}</p>

        <div class="options">
          <button
            v-for="(option, key) in product.options"
            :key="key"
            class="item"
            :class="{ active: key === activeOption }"
            @click="() => handleSetActiveOption(key)"
          >
            <img
              :src="option.image"
              :alt="option.title"
              :title="option.title"
            />
          </button>
        </div>

        <div class="action">
          <MoleculesButton
            text="Adicionar ao Carrinho"
            @click="() => handleAddCurrentOptionToCard()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useProduct } from "@/store/product";
import { Product } from "~~/interfaces/Products";

export default {
  setup() {
    const product = useProduct();

    const currentProduct = product.getProduct;

    return {
      product: currentProduct,
    };
  },
  data() {
    return {
      activeOption: 0,
    };
  },
  computed: {
    activeProductOption() {
      const product = this.product as Product;
      const activeOption = this.activeOption as number;

      return product.options[activeOption];
    },
  },
  methods: {
    handleSetActiveOption(option: number): void {
      this.activeOption = option;
    },
    handleAddCurrentOptionToCard() {
      console.info("Add", this.product.id, this.activeProductOption.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  &__template {
    padding: 2rem 0;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  &__image {
    padding: 4rem 0;

    img {
      display: block;
      width: 100%;
      height: 500px;
      object-fit: contain;

      border-radius: 0.5rem;

      @media (max-width: 500px) {
        height: 250px;
      }
    }
  }
  &__content {
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);

    background: $gray4;

    .info {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: flex-start;
      gap: 2rem;

      > div {
        .title {
          font-weight: 600;
          font-size: 2rem;

          @media (max-width: 500px) {
            font-size: 1.25rem;
          }
        }
        .option__title {
          font-weight: 300;
        }
      }

      .price {
        font-size: 1.5rem;
        font-weight: 300;
        > span {
          font-size: 2.5rem;
          font-weight: 500;
        }

        @media (max-width: 500px) {
          font-size: 0.75rem;
          > span {
            font-size: 1.5rem;
          }
        }
      }
    }

    .description {
      margin: 2rem 0;
      font-size: 1rem;
    }

    .options {
      display: flex;
      align-items: center;
      gap: 1rem;
      .item {
        width: 64px;
        height: 64px;
        background: #ffffff;
        padding: 0.25rem;

        border-radius: 0.25rem;
        border: 2px solid transparent;
        box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.05);

        transition: border-color 0.25s;

        &.active {
          border-color: $primary;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .action {
      padding: 2rem 0;
      > button {
        width: 100%;
        justify-content: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }
  }
}
</style>
