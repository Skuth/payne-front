import { products } from "@/data/products";

export default defineEventHandler(() => {
  let productsKeys = Object.keys(products).sort(() => 0.5 - Math.random());

  const getRandomProduct = () => {
    const product = products[productsKeys[0] as any];
    productsKeys.shift();

    return product;
  };

  return {
    error: false,
    data: Array(2)
      .fill(null)
      .map(() => getRandomProduct())
      .filter(Boolean),
  };
});
