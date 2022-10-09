<template>
  <AtomsBaseContainer>
    <header>
      <OrganismsNavbar />
    </header>

    <main class="main">
      <slot />
    </main>
  </AtomsBaseContainer>
  <OrganismsFooter />
</template>

<script></script>

<style lang="scss" scoped>
.main {
  padding: 2rem 0;
}
</style>
