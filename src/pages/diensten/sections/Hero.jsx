export default function Hero() {
  return (
    <section className="diensten-hero-banner relative min-h-[40vh] sm:min-h-[70vh]">
      <div className="container">
        <h1 className="text-primary-white text-[1.5rem] sm:text-4xl font-bold tracking-widest  mr-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col sm:block md:hidden">
          <span>ONZE DIENSTEN</span>
        </h1>
      </div>

      <div
        style={{
          clipPath:
            "polygon(0 0, 88% 0, 100% 100%, 79% 100%, 24% 100%, 0 100%)",
        }}
        className="bg-secondary-black absolute -bottom-1 left-0 w-2/4 h-[6rem] hidden md:block"
      ></div>
      <div className="container absolute bottom-[1.6rem] left-1/2 translate-x-[-50%] hidden md:block">
        <h1 className="text-primary-yellow text-3xl  font-bold  whitespace-nowrap">
          ONZE DIENSTEN
        </h1>
      </div>
    </section>
  );
}
