type Option = {
  id: number | string;
  title: string;
  image: string;
  price: number;
};

type Product = {
  id: number | string;
  title: string;
  description: string;
  badges: string[];
  thumbnail: string;
  options: Option[];
};

export { Option, Product };
