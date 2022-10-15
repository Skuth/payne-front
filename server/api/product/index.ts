import { products } from "@/data/products";

export default defineEventHandler(({ event }) => {
  const query = useQuery(event);
  const id: string[] =
    typeof query.id === "object" ? query.id : ([query.id] as string[]);

  return {
    error: false,
    data: id.map((productId) => {
      return products.find((product) => product.id == productId);
    }),
  };
});
