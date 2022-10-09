export type DataType = {
  id: number | string;
  title: string;
  price: {
    startPrice: number;
    endPrice: number;
  };
  description: string;
  badges: string[];
  image: string;
};
