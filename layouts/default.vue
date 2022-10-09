<template>
  <div class="default__layout">
    <AtomsBaseContainer>
      <header>
        <OrganismsNavbar />
      </header>

      <main class="main">
        <slot />
      </main>
    </AtomsBaseContainer>
    <OrganismsFooter />
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.main {
  padding: 2rem 0;
}
</style>
