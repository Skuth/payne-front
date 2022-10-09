<template>
  <NuxtLink href="/" class="big__card">
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
    data: {
      type: Object as PropType<Omit<DataType, "description">>,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.big__card {
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .card__content {
    padding: 2rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: $textColor;

    background: $gray4;

    .title {
      font-size: 2rem;
      font-weight: 600;
    }

    .price {
      font-weight: 300;
      > span {
        font-weight: 600;
        font-size: 1.25rem;
      }
    }

    .badges {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
}
</style>
