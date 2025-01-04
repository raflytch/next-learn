import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  const shop = query.shop;
  return (
    <>
      <h1>This Is Detail Shop Page</h1>
      <p>Shop: {`${shop && shop[0] + " - " + shop[1]}`}</p>
    </>
  );
};

export default ShopPage;
