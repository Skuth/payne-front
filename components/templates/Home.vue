<template>
  <div class="home__template">
    <OrganismsBanner
      src="https://www.zero3games.com.br/loja/assets/2022/10/6/dia-cri-playstation-2022-10-1280x512.webp"
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
        v-for="i in 2"
        :key="i"
        :data="cardData"
        src="https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-05-1920x1080-42cf018303e5.jpg"
        alt="Valorant"
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
        v-for="i in 5"
        :key="i"
        :data="cardData"
        src="https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-05-1920x1080-42cf018303e5.jpg"
        alt="Valorant"
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
        v-for="i in 8"
        :key="i"
        :data="cardData"
        src="https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-05-1920x1080-42cf018303e5.jpg"
        alt="Valorant"
      />
    </AtomsProductGrid>
  </div>
</template>

<script lang="ts">
import { DataType } from "@/components/organisms/BigCard/index.vue";

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
