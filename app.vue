<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  setup() {
    const { $seoTags } = useNuxtApp();
    $seoTags({});
  },
};
</script>
