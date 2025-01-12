import { useRouter } from "next/router";
import { useProductDetailQuery } from "@/hooks/useProductDetailQuery";
import ProductDetailView from "@/views/Product/ProductDetails";

const DetailProductPage = () => {
  const router = useRouter();
  const productId = router.query;

  const { data, isLoading, isError } = useProductDetailQuery(
    productId.product as string
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading product</p>;
  }

  if (!data) {
    return <p>No product found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>
      <ProductDetailView productDetails={data} />
    </div>
  );
};

export default DetailProductPage;
