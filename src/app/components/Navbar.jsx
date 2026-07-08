'use clinet'
import Link from "next/link";
const Navbar = () => {
    return (
        <div>

           <div className="flex  justify-around gap-10 bg-gray-400 p-4">
            <div className="mr-150">
           <Link href={'/'}><h1 className="text-2xl font-bold">RASEL ECOMERCE</h1></Link>
           </div>
           
           <div>
            <ul className="flex justify-around gap-5 text-xl font-semibold">
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/pages/products'}><li>Products</li></Link>
                <Link href={'/pages/add-product'}><li>Add Product</li></Link>
                <Link href={'/pages/manage'}><li>Product Management</li></Link>
            </ul>
           </div>
           </div>
            
        </div>
    );
};

export default Navbar;