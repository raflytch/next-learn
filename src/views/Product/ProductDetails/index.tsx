import { ProductType } from "@/lib/types/product";
import Image from "next/image";

const ProductDetailView = ({
  productDetails,
}: {
  productDetails: ProductType;
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-96">
        <Image
          src={productDetails.image}
          alt={productDetails.name}
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {productDetails.name}
        </h1>
        <p className="text-lg text-gray-600 mb-4">{productDetails.category}</p>
        <p className="text-xl font-semibold text-gray-800">
          {productDetails.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductDetailView;
