<template>
  <div class="default__layout">
    <header>
      <OrganismsNavbar />
    </header>

    <AtomsBaseContainer>
      <main class="main">
        <slot />
      </main>
    </AtomsBaseContainer>
    <OrganismsFooter />
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.default__layout {
  .main {
    padding: 2rem 0;
    min-height: calc(100vh - (115px + 450px));
  }
}
</style>
