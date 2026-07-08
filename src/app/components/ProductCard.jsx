import React from 'react';
import Image from 'next/image';
import { Card } from '@heroui/react';
import { Button } from '@heroui/react';
import Link from 'next/link';


const ProductCard = ({product}) => {
    //console.log(photo);
    return (
        <div>
 


<Card className=" p-3 rounded-xl space-y-2 max-w-[260px] mx-auto  overflow-hidden shadow-2xl shadow-slate-400 bg-slate-200
transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ">
  <div className="relative w-full h-56">
    <Image
      src={product.image}
      alt={product.title}
      fill
      className="object-cover rounded-2xl"
    />
  
  </div>

  <div className="px-3 py-2 text-center space-y-2">
    <h2 className="font-semibold text-lg line-clamp-1">
      {product.title}
    </h2>


  </div>

  <Link href= {`/pages/products/${product._id}`}>
    <Button variant='outline' className="w-full rounded-xl border-gray-400">
      Details
    </Button>
  </Link>
</Card>
            
        </div>
    );
};

export default ProductCard;