export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp();

  nuxtApp.hooks.hook("page:finish", async () => {
    document.querySelector("html")?.scrollTo({ top: 0 });
  });
});
