import { products } from "@/data/products";

export default defineEventHandler(({ context }) => {
  const productId = context.params.id;

  return {
    error: false,
    data: products.find((product) => product.id == productId),
  };
});
