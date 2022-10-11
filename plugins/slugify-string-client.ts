import removeAccents from "remove-accents";
import slugify from "slugify";

export default defineNuxtPlugin((nuxtApp) => {
  const slugifyString = (text: string): string => {
    return slugify(
      removeAccents(
        String(text)
          .toLocaleLowerCase()
          .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
      )
    );
  };

  nuxtApp.provide("slugifyString", slugifyString);
});
