<template>
  <NuxtLink href="/" class="big__card">
    <MoleculesCard :padding="0">
      <img :src="src" :alt="alt" draggable="false" />

      <div class="card__content">
        <p class="title">Valorant</p>
        <p class="price">A partir de <span>R$ 50</span></p>
        <span class="description">
          VALORANT é um FPS tático 5x5 competitivo focado em personagens que se
          passa no mundo todo. Faça jogadas incríveis e supere seus oponentes
          com habilidades táticas, mecânica de tiro e trabalho em equipe.
        </span>

        <div class="badges">
          <MoleculesBadge
            text="PC"
            outline
            borderColor="#ffffff"
            textColor="#ffffff"
          />
        </div>
      </div>
    </MoleculesCard>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
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
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: #ffffff;

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);

    @media (max-width: 500px) {
      position: relative;
      padding: 2rem;
      width: 100%;
      background: $primary;
    }

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

    .description {
      margin: 1.5rem 0;

      overflow: hidden;
      text-overflow: ellipsis;

      display: -webkit-box;
      display: -moz-box;

      -webkit-line-clamp: 2;
      line-clamp: 2;

      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;

      @media (max-width: 500px) {
        -webkit-line-clamp: initial;
        line-clamp: initial;
      }
    }

    .badges {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
}
</style>
