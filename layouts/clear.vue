<template>
  <div class="clear__layout">
    <AtomsBaseContainer>
      <main class="main">
        <slot />
      </main>
    </AtomsBaseContainer>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.clear__layout {
  height: 100%;
  .main {
    min-height: 100vh;
  }
}
</style>
