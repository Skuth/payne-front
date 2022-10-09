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

      <OrganismsBigCard v-for="i in 2" :key="i" :data="cardData" />
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

      <OrganismsProductCard v-for="i in 5" :key="i" :data="cardData" />
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

      <OrganismsProductCard v-for="i in 8" :key="i" :data="cardData" />
    </AtomsProductGrid>
  </div>
</template>

<script lang="ts">
import { DataType } from "@/interfaces/Card";

export default {
  setup() {
    const cardData: DataType = {
      title: "Valorant",
      price: {
        startPrice: 50,
        endPrice: 150,
      },
      description:
        "VALORANT é um FPS tático 5x5 competitivo focado em personagens que se passa no mundo todo. Faça jogadas incríveis e supere seus oponentes com habilidades táticas, mecânica de tiro e trabalho em equipe.",
      badges: ["PC"],
      image:
        "https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-05-1920x1080-42cf018303e5.jpg",
    };

    return {
      cardData,
    };
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
