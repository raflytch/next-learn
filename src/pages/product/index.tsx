import { useProductQuery } from "@/hooks/useProductsQuery";
import ProductView from "@/views/Product";
import ProductSkeleton from "@/views/Product/ProductSkeleton";

const ProductPage = () => {
  const { data, isLoading, isError } = useProductQuery();

  return (
    <div className="w-full flex flex-col gap-8 max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Our Products</h1>
      {isLoading && <ProductSkeleton />}
      {!isLoading && !isError && <ProductView products={data || []} />}
      {isError && (
        <p className="text-center text-xl font-semibold text-red-500">
          Error loading products
        </p>
      )}
    </div>
  );
};

export default ProductPage;
