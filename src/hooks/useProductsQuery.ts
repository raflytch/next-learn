import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/lib/types/product";

const fetchProduct = async (): Promise<ProductType[]> => {
  const res = await fetch("/api/product");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  console.log(data);

  return data.data;
};

export const useProductQuery = () => {
  return useQuery<ProductType[], Error>({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });
};
