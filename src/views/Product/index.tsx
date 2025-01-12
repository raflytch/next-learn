import { ProductType } from "@/lib/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductView = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      {products.map((product: ProductType) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="w-[calc(50%-8px)] sm:w-[calc(33.333%-12px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)]"
        >
          <div className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative w-full h-32">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                objectFit="cover"
              />
            </div>
            <div className="p-3">
              <h2 className="text-sm font-semibold text-gray-800 truncate">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
              <p className="text-xs text-gray-400 mt-1">{product.category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductView;
