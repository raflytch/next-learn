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

// Dipanggil setiap melakukan request (Server Side Rendering)
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  console.log(response.data);

  return { props: { data: response.data } };
}
