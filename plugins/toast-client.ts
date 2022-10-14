import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof document !== "undefined") {
    const toast = useToast({
      position: "top-right",
      duration: 5000,
      dismissible: true,
      pauseOnHover: true,
      queue: false,
    });

    nuxtApp.provide("toast", toast);
  }
});
