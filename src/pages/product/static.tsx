import { ProductType } from "@/lib/types/product";
import ProductView from "@/views/Product";

const ProductPage = ({ data }: { data: ProductType[] }) => {
  return (
    <div>
      <ProductView products={data} />
    </div>
  );
};

export default ProductPage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/product");

  const response = await res.json();

  return {
    props: { data: response.data },
  };
};
