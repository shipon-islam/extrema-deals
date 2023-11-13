import { useEffect } from "react";
import BigFilterProduct from "./section/BigFilterProduct";
import SmFilterProduct from "./section/SmFilterProduct";

export default function FilterProduct() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <div>
      <BigFilterProduct />
      <SmFilterProduct />
    </div>
  );
}
