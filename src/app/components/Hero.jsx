import { Button } from "@heroui/react";
import Link from "next/link";
const Hero = () => {
    return (
        <div>
            <div className="hero bg-blue-500 h-[400px] p-10  max-w-7xl mx-auto mt-20 rounded-2xl">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold ">Welcome Our Shop </h1>
      <p className="py-2">
       Shop smarter with our carefully selected collections. Quality products, affordable prices, and exceptional service.
      </p>
      <Link href={'/pages/products'}>
      <Button   className="btn  mt-5 bg-none border border-blue-600 ">Browse Products</Button>
      </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Hero;