import { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import circleX from "../../../assets/svg/circle-x.svg";
function ProductSlider({ productImages }) {
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

  return (
    <section className="relative bg-[#1D1C1C]">
      <div className="absolute top-10 md:top-16 lg:top-20 flex justify-between w-full z-10 container left-1/2 translate-x-[-50%]">
        <Link
          className="bg-gradient-to-l from-secondary-yellow to-primary-yellow hover:from-primary-yellow hover:to-secondary-yellow flex gap-x-2 items-center md:py-1 px-2 md:px-4 rounded-sm text-primary-black"
          to="/deals"
        >
          <span className="font-bold text-[10px] md:text-base">GA TERUG</span>
          <span>
            <AiOutlineDoubleLeft className="text-lg md:text-3xl" />
          </span>
        </Link>
        <p className="text-primary-yellow font-roboto font-medium text-[10px] md:text-base">
          {`${currentIndex + 1}/${productImages.length}`}
        </p>
      </div>

      <div>
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ backgroundImage: `url(${productImages[currentIndex].url})` }}
          className="h-[19rem] sm:h-[20rem] md:h-[40rem] lg:h-[45rem] xl:h-[60rem] bg-contain md:bg-cover bg-center bg-no-repeat  duration-500 relative 2xl:container"
        >
          {/* lg:h-[35rem] */}
          <div className="flex justify-between px-4 xl:px-10 h-full items-center">
            <button
              onClick={prevSlide}
              className="text-primary-yellow hover:opacity-70"
            >
              <MdArrowBackIos
                className="w-[25px] lg:w-[30px] xl:w-[40px] 2xl:w-[50px]"
                size={40}
              />
            </button>

            <button
              onClick={nextSlide}
              className="text-primary-yellow hover:opacity-70"
            >
              <MdArrowForwardIos
                className="w-[25px] lg:w-[30px] xl:w-[40px] 2xl:w-[50px]"
                size={40}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden absolute -bottom-1 right-0 w-full h-[6rem] md:h-[10rem] xl:h-[15rem]">
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 w-[210%] -ml-4 h-[5rem] md:h-[8rem] xl:h-[15rem] border-t-[0.3rem] md:border-t-[0.8rem] lg:border-t-[1rem] xl:border-t-[1.5rem] border-primary-yellow bg-white rotate-[-5deg]"></div>
          <img
            className="absolute top-4 sm:top-7 md:top-12 lg:top-16 xl:top-10 w-10 h-auto md:w-14 lg:w-16 xl:w-20 left-1/2 translate-x-[-50%] "
            src={circleX}
            alt="x"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductSlider;
