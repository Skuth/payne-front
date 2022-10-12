export type SeoDataType = {
  titlePrefix?: string;
  titleDivisor?: string;
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  embedImage?: string;
  twitterCardStyle?: string;
  facebookCardStyle?: string;
  robots?: boolean;
  revisitAfter?: number;
  revisitAfterType?: "day" | "days";
};
