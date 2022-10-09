<template>
  <div class="home__template">
    <OrganismsBanner
      src="https://preview.redd.it/hye632mbuk081.png?auto=webp&s=d99304f15905e18af0232a5292402276a6c15ef2"
      alt="Banner"
    />

    <AtomsProductGrid :maxColItems="4">
      <template v-slot:header>
        <div class="product__header">
          <h2>Em Destaque</h2>
          <NuxtLink href="/">
            <MoleculesButton text="Ver Mais" />
          </NuxtLink>
        </div>
      </template>

      <OrganismsBigCard
        v-for="item in getFormattedData('top')"
        :key="item.title"
        :data="item"
        :href="`/produto/${item.id}`"
      />
    </AtomsProductGrid>

    <AtomsProductGrid :maxColItems="6">
      <template v-slot:header>
        <div class="product__header">
          <h2>Novidades Payne</h2>
          <NuxtLink href="/">
            <MoleculesButton text="Ver Mais" />
          </NuxtLink>
        </div>
      </template>

      <OrganismsProductCard
        v-for="item in getFormattedData('news')"
        :key="item.title"
        :data="item"
        :href="`/produto/${item.id}`"
      />
    </AtomsProductGrid>

    <AtomsProductGrid :maxColItems="4">
      <template v-slot:header>
        <div class="product__header">
          <h2>Mais Populares</h2>
          <NuxtLink href="/">
            <MoleculesButton text="Ver Mais" />
          </NuxtLink>
        </div>
      </template>

      <OrganismsProductCard
        v-for="item in getFormattedData('popular')"
        :key="item.title"
        :data="item"
        :href="`/produto/${item.id}`"
      />
    </AtomsProductGrid>
  </div>
</template>

<script lang="ts">
import { DataType } from "@/interfaces/Card";

export default {
  props: {
    top: {
      type: Object,
      default: {},
    },
    popular: {
      type: Object,
      default: {},
    },
    news: {
      type: Object,
      default: {},
    },
  },
  methods: {
    getFormattedData(from: "top" | "popular" | "news"): DataType[] {
      const data: DataType[] = Object.values(this[from]).map(
        (item): DataType => ({
          id: item.id,
          title: item.title,
          price: {
            startPrice: item.options[0].price,
            endPrice: item.options[0].price,
          },
          description: item.description,
          badges: item.badges,
          image: item.thumbnail,
        })
      );

      return data;
    },
  },
};
</script>

<style lang="scss" scoped>
$containerMaxWidth: 1760px;

.home__template {
  h2 {
    font-size: 1.75rem;
  }

  .product__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
