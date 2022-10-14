import { SeoDataType } from "@/interfaces/Seo";

export default defineNuxtPlugin((nuxtApp) => {
  const seoTags = (data: SeoDataType): void => {
    const config = useRuntimeConfig();

    const seoData: SeoDataType = {
      titlePrefix: "Payne",
      titleDivisor: "|",
      title: "Sua loja digital de jogos e gift cards",
      description:
        "Payne é sua loja digital de Gift card, compre e ative na hora.",
      keywords: [
        "payne",
        "comprar",
        "games",
        "jogos",
        "game",
        "jogo",
        "computador",
        "pc",
        "mac",
        "lançamentos",
        "fps",
        "rpg",
        "simulador",
        "estrategia",
        "loja",
        "xbox one",
        "ps4",
        "nintendo switch",
        "playstation 4",
        "xbox",
        "playstation",
        "nintendo",
        "console",
      ],
      url: config.public.appUrl,
      embedImage: `${config.public.appUrl}/images/base/apple-touch-icon-180x180.png`,
      twitterCardStyle: "summary_large_image",
      facebookCardStyle: "website",
      robots: true,
      revisitAfter: 7,
      revisitAfterType: "days",
    };

    const route = useRoute();

    const currentYear = new Date().getFullYear();

    if (data.keywords) {
      data.keywords = [...data.keywords, ...seoData.keywords!];
    }

    seoData.url = [config.public.appUrl, route.fullPath].join("");

    const seo = Object.assign(seoData, data);

    const title = `${seo.titlePrefix} ${seo.titleDivisor} ${seo.title}`;

    useHead({
      title: title,
      meta: [
        {
          key: "description",
          name: "description",
          content: seo.description,
        },
        {
          key: "keywords",
          name: "keywords",
          content: seo.keywords?.join(","),
        },
        {
          key: "robots",
          name: "robots",
          content: seo.robots ? "index, follow" : "noindex, nofollow",
        },
        {
          key: "revisit-after",
          name: "revisit-after",
          content: `${seo.revisitAfter} ${seo.revisitAfterType}`,
        },
        {
          key: "language",
          name: "language",
          content: "Portuguese",
        },
        {
          key: "content-language",
          httpEquiv: "content-language",
          content: "pt-br",
        },
        {
          key: "content-type",
          httpEquiv: "content-type",
          content: "text/html; charset=UTF-8",
        },
        {
          key: "generator",
          name: "generator",
          content: "N/A",
        },
        {
          key: "google",
          name: "google",
          content: "notranslate",
        },
        {
          key: "author",
          name: "author",
          content: "Payne",
        },
        {
          key: "copyright",
          name: "copyright",
          content: `© ${currentYear} Payne`,
        },
        {
          key: "fb:app_id",
          property: "fb:app_id",
          content: config.public.facebookAppId,
        },
        {
          key: "og:locale",
          property: "og:locale",
          content: "pt_BR",
        },
        {
          key: "og:url",
          property: "og:url",
          content: seo.url,
        },
        {
          key: "og:type",
          property: "og:type",
          content: seo.facebookCardStyle,
        },
        {
          key: "og:title",
          property: "og:title",
          content: title,
        },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: "Payne",
        },
        {
          key: "og:description",
          property: "og:description",
          content: seo.description,
        },
        {
          key: "og:image",
          property: "og:image",
          content: seo.embedImage,
        },
        {
          key: "twitter:card",
          property: "twitter:card",
          content: seo.twitterCardStyle,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: title,
        },
        {
          key: "twitter:site",
          property: "twitter:site",
          content: "@paynestore",
        },
        {
          key: "twitter:description",
          property: "twitter:description",
          content: seo.description,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: seo.embedImage,
        },
      ],
      script: [
        {
          key: "canonical",
          rel: "canonical",
          href: seo.url,
        },
      ],
    });
  };

  nuxtApp.provide("seoTags", seoTags);
});
