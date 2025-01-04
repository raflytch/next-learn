import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <>
      <h1>This Is Detail Product Page</h1>
      <p>Product: {query.product}</p>
    </>
  );
};

export default DetailProductPage;
