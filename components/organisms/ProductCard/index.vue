<template>
  <NuxtLink :href="href" class="product__card">
    <MoleculesCard :padding="0">
      <img :src="data.image" :alt="data.title" draggable="false" />

      <div class="card__content">
        <p class="title">{{ data.title }}</p>
        <p class="price">
          A partir de <span>R$ {{ data.price.startPrice }}</span>
        </p>

        <div class="badges">
          <MoleculesBadge
            v-for="badge in data.badges"
            :key="badge"
            :text="badge"
            outline
          />
        </div>
      </div>
    </MoleculesCard>
  </NuxtLink>
</template>

<script lang="ts">
import { PropType } from "vue";
import { DataType } from "@/interfaces/Card";

export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    data: {
      type: Object as PropType<Omit<DataType, "description">>,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.product__card {
  position: relative;
  cursor: pointer;

  :deep(.card) {
    height: 100%;
    background: $gray4;
  }

  img {
    width: 100%;
    height: 250px;
    display: block;
    object-fit: cover;
  }

  .card__content {
    padding: 2rem 1rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: $textColor;

    .title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .price {
      margin: 1rem 0;
      font-weight: 300;
      font-size: 1rem;
      > span {
        font-weight: 600;
        font-size: 1.25rem;
      }
    }

    .badges {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
  }
}
</style>
