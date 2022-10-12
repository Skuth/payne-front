import * as Yup from "yup";
import { pt } from "yup-locale-pt";

export default defineNuxtPlugin(() => {
  Yup.setLocale(pt);
});
