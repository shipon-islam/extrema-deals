import React from "react";
import { product_images } from "../../constant";
import ProductInfo from "./sections/ProductInfo";
import ProductSlider from "./sections/ProductSlider";
import RelatedProduct from "./sections/RelatedProduct";

export default function Product_detail() {
  return (
    <div className="space-y-10">
      <ProductSlider productImages={product_images} />
      <ProductInfo />
      <RelatedProduct />
    </div>
  );
}
