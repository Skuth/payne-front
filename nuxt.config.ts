// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Payne | Sua loja digital de jogos e gift cards",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // THEME
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
          integrity:
            "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },

        // ICONS
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/base/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/base/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/images/base/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/base/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/images/base/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/images/base/safari-pinned-tab.svg",
          color: "#ed2647",
        },
      ],
    },
  },
  components: {
    global: true,
    dirs: ["@/components"],
  },
  modules: ["@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  css: ["@/assets/scss/global.scss"],
  typescript: {
    strict: true,
  },
});
