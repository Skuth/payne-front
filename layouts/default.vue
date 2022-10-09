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

<script></script>

<style lang="scss" scoped>
.main {
  padding: 2rem 0;
}
</style>
