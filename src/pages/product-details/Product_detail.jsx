import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { product_images } from "../../constant";
import ProductInfo from "./sections/ProductInfo";
import ProductSlider from "./sections/ProductSlider";
import RelatedProduct from "./sections/RelatedProduct";

export default function Product_detail() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [location]);
  return (
    <div id="DETAILS" className="space-y-10">
      <ProductSlider productImages={product_images} />
      <ProductInfo />
      <RelatedProduct />
    </div>
  );
}
