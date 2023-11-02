import React from "react";

export default function Hero() {
  return (
    <section className="hero-banner relative min-h-[40vh] sm:min-h-[70vh]">
      <h1 className="text-primary-white text-[1.5rem] sm:text-4xl font-bold tracking-widest  mr-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col sm:block">
        <span>Het Uiterste in Waarde,</span>
        <span>Het Uiterste in Deals</span>
      </h1>
    </section>
  );
}
