import React from "react";
import chairAndLamp from "../../../assets/img/chair-and-lamp.png";
import chairAndTable from "../../../assets/img/chair-and-table.png";
import floor from "../../../assets/svg/floor.svg";
import SliderItems from "../../../components/SliderItems";

export default function ProductSlider() {
  return (
    <section
      style={{
        background:
          "radial-gradient(60% 60.01% at 50% 57.98%, #FFE617 72.92%, #FDC814 100%)",
      }}
      className=""
    >
      <h1 className="py-10 text-center text-xl font-bold text-secondary-black">
        DEALS IN DE KIJKER
      </h1>
      <div className="relative h-[18.5rem] sm:h-[25rem] md:h-[38rem] lg:h-[50rem] w-full overflow-hidden">
        <div className="">
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
      {/* <SliderItems /> */}
    </section>
  );
}
