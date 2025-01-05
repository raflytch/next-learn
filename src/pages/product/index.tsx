import { useProductQuery } from "@/hooks/useProductsQuery";

const ProductPage = () => {
  const { data, isLoading, isError } = useProductQuery();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data?.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.size}</p>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
