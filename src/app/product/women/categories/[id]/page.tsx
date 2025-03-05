"use client";
import { useParams } from "next/navigation";
import womencardData from "@/data/WomenCloths";
import { Avatar, Button, Rating } from "@jamsr-ui/react";
import Carousel2 from "@/components/Carousel2";
import Breadcrumb from "@/components/Breadcrumb";

const ProductPage = () => {
  const { id } = useParams();
  const productIndex = Array.isArray(id) ? id[0] : id; // Convert array to string if needed

  const product = womencardData.find(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === productIndex
  );

  if (!product) {
    return <h1 className="text-center text-xl py-10">Product Not Found</h1>;
  }

  return (
    <div className="container mx-auto max-w-[1280px] py-10">
      <div className="mb-2">
        <Breadcrumb />
      </div>
      <div className="flex gap-4">
        <div>
          <Carousel2 images={product.productImages} />
        </div>
        <div>
          <h1 className="text-md text-neutral-500">{product.description}</h1>
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <h1 className="text-xl font-semibold ">{product.price}</h1>
          <div className="py-2">
          <Rating
            isReadonly
           
            defaultValue={product.rating || 3}
            classNames={{
              starWrapper: " data-[checked=true]:text-yellow-400",
              star: "size-3",
            }}
          />
          <p className="text-sm text-neutral-500 tracking-tight">Includes reviewers who received this item for free </p>
          </div>
          {product.colors && product.colors.length > 0 && (
            <div className="py-4">
              <h3 className="text-md font-medium mb-2"> Colors:</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <div key={index}>
                  <Avatar
                    
                    src={color.colorImage}
                    alt={color.colorName}
                    className="size-10 cursor-pointer border border-neutral-300  transition-all"
                  />
                  <p className="text-xs text-neutral-500 text-center mt-1">{color.colorName}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </div>
      </div>

      <Button className="mt-5">Add to Cart</Button>
    </div>
  );
};

export default ProductPage;
