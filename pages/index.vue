<template>
  <TemplatesHome :top="top" :popular="popular" :news="news" />
</template>

<script setup lang="ts">
const getTop = async () => {
  const response = await useFetch("/api/top")
    .then((res) => res.data)
    .then((res) => res.value)
    .then((res) => res?.data || {})
    .catch(() => null);

  return response as Object;
};

const getPopular = async () => {
  const response = await useFetch("/api/popular")
    .then((res) => res.data)
    .then((res) => res.value)
    .then((res) => res?.data || {})
    .catch(() => null);

  return response as Object;
};

const getNews = async () => {
  const response = await useFetch("/api/news")
    .then((res) => res.data)
    .then((res) => res.value)
    .then((res) => res?.data || {})
    .catch(() => null);

  return response as Object;
};

const [top, popular, news] = await Promise.all([
  getTop(),
  getPopular(),
  getNews(),
]);
</script>

<style lang="scss" scoped></style>
