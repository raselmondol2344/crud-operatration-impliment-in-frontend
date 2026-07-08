import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const productsdetailspage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/products/${id}`);
  const data = await res.json();

  const { title, price, image, stock, description } = data;

  return (
    <div className="max-w-6xl mx-auto px-5 py-12">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border">
        <div className="grid md:grid-cols-2 gap-10 items-center p-8">
          
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[420px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-5">
            <h1 className="text-4xl font-bold text-gray-800">
              {title}
            </h1>

            <p className="text-3xl font-bold text-primary">
              ${price}
            </p>

            <div>
              <span className="font-semibold text-lg">Stock : </span>
              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  stock > 0 ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {stock} Available
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Product Details
              </h3>
              <p className="text-gray-600 leading-8">
                {description}
              </p>
            </div>

            <div className="pt-5">
              <Link href="/pages/products">
                <Button color="primary" size="lg">
                  View More Products
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default productsdetailspage;