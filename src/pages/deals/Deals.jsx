import { useEffect } from "react";

import { Link } from "react-router-dom";
import DealsSidebar from "../../components/DealsSidebar";
import GerenoveerdSidebar from "../../components/GerenoveerdSidebar";
import { UseToggleContext } from "../../hook/ContextProvider";
import SliderProduct from "./sections/SliderProduct";

export default function Deals() {
  const { isToggle } = UseToggleContext();
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <main className="bg-primary-black grid md:grid-cols-[20rem_1fr] lg:grid-cols-[25rem_1fr]">
      <aside className="bg-primary-yellow">
        {isToggle ? <GerenoveerdSidebar /> : <DealsSidebar />}
      </aside>

      <div className="overflow-hidden">
        <section>
          <h1 className="text-xl font-bold text-primary-white ml-12 mt-12 mb-4 hover:underline hover:text-primary-yellow">
            <Link to="/deals/product-filter">MEUBILAIR</Link>
          </h1>
          <SliderProduct />
        </section>
        <section>
          <h1 className="text-xl font-bold text-primary-white ml-12 mt-12 mb-4 hover:underline hover:text-primary-yellow">
            <Link to="/deals/product-filter">BUITEN & TUIN</Link>
          </h1>
          <SliderProduct />
        </section>
        <section>
          <h1 className="text-xl font-bold text-primary-white ml-12 mt-12 mb-4 hover:underline hover:text-primary-yellow">
            <Link to="/deals/product-filter">VERZAMELOBJECTEN</Link>
          </h1>
          <SliderProduct />
        </section>
      </div>
    </main>
  );
}
