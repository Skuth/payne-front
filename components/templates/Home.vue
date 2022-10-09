<template>
  <div class="home__template">
    <OrganismsBanner
      src="https://www.zero3games.com.br/loja/assets/2022/10/6/dia-cri-playstation-2022-10-1280x512.webp"
      alt="Banner"
    />

    <section class="future__container">
      <h2>Em Breve</h2>

      <div class="future__content">
        <OrganismsBigCard
          src="https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-05-1920x1080-42cf018303e5.jpg"
          alt="Valorant"
        />
        <OrganismsBigCard
          src="https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-05-1920x1080-42cf018303e5.jpg"
          alt="Valorant"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home__template {
  h2 {
    font-size: 1.75rem;
  }

  .future__container {
    padding: 2rem 0;

    .future__content {
      padding: 2rem 0;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
