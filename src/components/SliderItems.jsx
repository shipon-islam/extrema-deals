import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function SliderItems({ productImages }) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  //for touch slide functionality start
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    const touchDiff = touchStart - touchEnd;
    if (touchDiff > 50) {
      const isLastSlide = currentIndex === productImages.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    } else if (touchDiff < -50) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide
        ? productImages.length - 1
        : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };
  //for touch slide functionality end
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? productImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === productImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-full xl:max-w-[1536px] xl:mx-auto">
      {/* arrow start*/}
      <div className="flex justify-between absolute w-full top-[3rem] sm:top-[5rem] z-10 lg:top-[15rem] left-0  px-2 md:px-6 lg:px-8 xl:px-12">
        <button className="md:bg-primary-black transition-colors duration-300 hover:text-primary-yellow md:text-primary-yellow rounded-md pl-3 2xl:pl-5  py-1 2xl:py-2 relative sm:active:scale-90  sm:active:shadow-white sm:active:shadow-xl">
          <MdArrowBackIos
            className="w-[25px] lg:w-full "
            onClick={prevSlide}
            size={40}
          />
        </button>
        <button className="md:bg-primary-black  transition-colors duration-300  hover:text-primary-yellow md:text-primary-yellow rounded-md py-1 2xl:py-2 px-1.5 2xl:px-2.5 sm:active:scale-90  active:shadow-white sm:active:shadow-xl">
          <MdArrowForwardIos
            className="w-[25px] lg:w-full"
            onClick={nextSlide}
            size={40}
          />
        </button>
      </div>
      {/* arrow end */}

      {/* image slider start */}
      <div className="relative">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ backgroundImage: `url(${productImages[currentIndex].url})` }}
          className="min-w-full h-[26rem] sm:h-[25rem]   md:w-[42.5rem] md:h-[30rem] lg:w-[52.5rem] lg:h-[40rem] bg-center bg-no-repeat bg-contain duration-500 relative mx-auto top-[-4rem] sm:top-[-2rem] md:top-[5.2rem] xl:top-[3.7rem] xl:scale-125"
        >
          <button
            style={{
              clipPath:
                "polygon(0% 20%, 80% 20%, 80% 0%, 100% 50%, 80% 100%, 80% 80%, 0% 80%)",
            }}
            className="hidden md:block bg-gradient-to-l from-primary-yellow to-secondary-yellow hover:from-secondary-yellow hover:to-primary-yellow absolute bottom-[4rem] lg:bottom-[6rem] left-1/2  h-[4.5rem] w-[13rem] text-left  duration-500 transition-all ease-in-out"
          >
            <span className="font-bold text-[10px] ml-8">ONTDEK PRODUCT</span>
          </button>
        </div>
        <button className="absolute bottom-[6rem] focus:outline-[0] sm:bottom-0  rotate-[43deg] md:hidden">
          <p className="font-bold text-base">
            ONTDEK <br />
            PRODUCT
          </p>
          <IoMdArrowDropdown className="text-6xl -mt-2" />
        </button>
      </div>

      {/* image slider end */}

      {/* slider indicator start */}
      <div className="flex gap-x-1 bottom-1/2  md:-translate-x-[21.7rem] lg:-translate-x-[28rem] xl:-translate-x-[35rem] translate-y-[5rem]  sm:translate-y-[10rem] md:translate-y-[6rem] lg:translate-y-[6rem] xl:translate-y-[3rem] justify-center py-2 absolute left-1/2 md:rotate-[49deg]">
        {productImages.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${
              currentIndex === slideIndex
                ? "bg-primary-yellow md:bg-primary-black"
                : "bg-transparent"
            } text-2xl cursor-pointer border-2 border-primary-yellow md:border-primary-black rounded-full w-3 h-3 md:w-4 md:h-4`}
          ></div>
        ))}
      </div>
      {/* slider indicator end */}
    </div>
  );
}

export default SliderItems;
