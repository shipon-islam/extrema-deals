import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import chairAndLamp from "../../../assets/img/chair-and-lamp.png";
import chairAndTable from "../../../assets/img/chair-and-table.png";
import floor from "../../../assets/svg/floor.svg";
import SliderItems from "../../../components/SliderItems";

export default function ProductSlider() {
  return (
    <section>
      <div
        style={{
          background:
            "radial-gradient(60% 60.01% at 50% 57.98%,#FDC814 72.92%, #FFE617 100%)",
        }}
      >
        <h1 className="py-10 text-center text-xl font-bold text-secondary-black">
          DEALS IN DE KIJKER
        </h1>
        <div className="relative h-[18.5rem] sm:h-[25rem] md:h-[38rem] lg:h-[50rem] w-full overflow-hidden">
          <div>
            <SliderItems />
          </div>

          <div className="hidden md:block">
            <img className="absolute bottom-0 w-full" src={floor} alt="floor" />
            <img
              className="absolute -bottom-[10rem] -right-[20rem] h-auto w-[32rem] lg:w-[38rem]"
              src={chairAndTable}
              alt="chair-with-table"
            />
            <img
              className="absolute bottom-0 left-5 h-[21rem] lg:h-[29rem]"
              src={chairAndLamp}
              alt="chair-with-lamp"
            />
          </div>
        </div>
      </div>
      <div
        style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
        className="bg-[#FDC814] h-32 relative hidden md:block"
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
