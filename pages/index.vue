<template>
  <TemplatesHome :top="top" :popular="popular" :news="news" />
</template>

<script setup lang="ts">
const getTop = async () => {
  const response = await fetch("/api/top")
    .then((res) => res.json())
    .catch(() => {});

  return response?.data || {};
};

const getPopular = async () => {
  const response = await fetch("/api/popular")
    .then((res) => res.json())
    .catch(() => {});

  return response?.data || {};
};

const getNews = async () => {
  const response = await fetch("/api/news")
    .then((res) => res.json())
    .catch(() => {});

  return response?.data || {};
};

const [top, popular, news] = await Promise.all([
  getTop(),
  getPopular(),
  getNews(),
]);
</script>

<style lang="scss" scoped></style>
