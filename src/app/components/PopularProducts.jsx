import { getAllProducts } from "@/lib/data";
import ProductCard from "./ProductCard";


const PopularProducts =async() => {
    const productData = await getAllProducts()
    return (
        <div className="max-w-7xl mx-auto mt-20">
            <h1 className="font-bold text-2xl flex justify-start mb-4">Popular Products</h1>
           <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                productData.slice(0,5).map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default PopularProducts;