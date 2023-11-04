import React from "react";

export default function Hero() {
  return (
    <section className="diensten-hero-banner relative min-h-[40vh] sm:min-h-[70vh]">
      <h1 className="text-primary-white text-[1.5rem] sm:text-4xl font-bold tracking-widest  mr-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col sm:block md:hidden">
        <span>ONZE DIENSTEN</span>
      </h1>
      <h1
        style={{
          clipPath: "polygon(76% 0, 100% 100%, 0 99%, 0 0)",
        }}
        className="bg-primary-black text-primary-yellow absolute -bottom-1 left-0 text-3xl w-2/4 pl-16 lg:pl-32 py-8 font-bold hidden md:block 2xl:text-right 2xl:pl-0 2xl:pr-[24rem]"
      >
        ONZE DIENSTEN
      </h1>
    </section>
  );
}
