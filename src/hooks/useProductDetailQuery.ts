import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/lib/types/product";

const fetchProductDetails = async (id: string): Promise<ProductType> => {
  console.log(`Fetching product details for id: ${id}`);
  const res = await fetch(`/api/product/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.statusText}`);
  }

  const data = await res.json();

  if (!data.data) {
    throw new Error("Invalid API response format");
  }

  return data.data;
};

export const useProductDetailQuery = (id: string | undefined) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetails(id!),
    enabled: !!id,
    retry: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};
