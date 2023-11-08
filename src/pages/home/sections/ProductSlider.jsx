import { BsChevronCompactDown } from "react-icons/bs";
import chairAndTable from "../../../assets/img/chair-and-table.png";
import chair from "../../../assets/img/chair.png";
import Lamp from "../../../assets/img/lamp.png";
import floor from "../../../assets/svg/floor.svg";
import SliderItems from "../../../components/SliderItems";
import { product_images } from "../../../constant";

export default function ProductSlider() {
  return (
    <section>
      <div
        style={{
          background:
            "radial-gradient(60% 60.01% at 50% 57.98%,#FDC814 72.92%, #FFE617 100%)",
        }}
      >
        <h1 className="py-10 text-center text-2xl font-bold text-secondary-black relative md:top-10 xl:top-0 lg:text-3xl xl:text-4xl">
          DEALS IN DE KIJKER
        </h1>
        <div className="relative h-[18.5rem] sm:h-[25rem] md:h-[38rem] lg:h-[50rem] w-full overflow-hidden">
          <div>
            <SliderItems productImages={product_images} />
          </div>

          <div className="hidden md:block">
            <img className="absolute bottom-0 w-full" src={floor} alt="floor" />

            <img
              className="absolute bottom-[-6rem] lg:bottom-[-8.5rem] xl:bottom-[-9.4rem] 2xl:bottom-[-11rem] -right-[12rem] lg:right-[-15rem] h-auto w-[23rem] lg:w-[33rem] xl:w-[38rem] 2xl:w-[43rem]"
              src={chairAndTable}
              alt="chair-with-stool"
            />
            <img
              className="absolute bottom-2 left-0 lg:left-[-2rem] 2xl:left-0 h-[19rem] lg:h-[29rem] xl:h-[32rem] 2xl:h-[33rem]"
              src={Lamp}
              alt="lamp"
            />
            <img
              className="absolute bottom-2 left-16 xl:left-20 2xl:left-28 h-[12rem] lg:h-[18rem] xl:h-[22rem] 2xl:h-[25rem]"
              src={chair}
              alt="chair"
            />
          </div>
        </div>
      </div>
      <div
        style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
        className="bg-[#FDC814] h-32 relative hidden md:block top-[-1px]"
      >
        <h1 className="text-center font-bold pt-8 text-xl">
          VOOR DE ECHTE KOOPJESJAGERS
        </h1>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1">
          <BsChevronCompactDown className="text-3xl" />
        </div>
      </div>
    </section>
  );
}
