import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import camera1 from "../assets/img/camera1.png";
import camera2 from "../assets/img/camera2.png";
import ArrowButton from "../assets/svg/arrow-button.svg";

function SliderItems() {
  const slides = [
    {
      url: camera1,
    },

    {
      url: camera2,
    },
    {
      url: camera1,
    },

    {
      url: camera2,
    },
    {
      url: camera1,
    },

    {
      url: camera2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-full section-container">
      {/* arrow start*/}
      <div className="flex justify-between absolute w-full top-[3rem] sm:top-[5rem] z-10 lg:top-[15rem] left-0 md:px-8 lg:px-12 xl:px-16">
        <button className="md:bg-primary-black hover:text-primary-yellow md:hover:bg-primary-black/80 transition-colors duration-300 md:text-primary-yellow rounded-md pl-3">
          <MdArrowBackIos onClick={prevSlide} size={30} />
        </button>
        <button className="md:bg-primary-black md:hover:bg-primary-black/80 transition-colors duration-300 hover:text-primary-yellow md:text-primary-yellow rounded-md p-1 ">
          <MdArrowForwardIos onClick={nextSlide} size={30} />
        </button>
      </div>
      {/* arrow end */}

      {/* image slider start */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="min-w-full h-[26rem] sm:h-[25rem]   md:w-[42.5rem] md:h-[30rem] lg:w-[52.5rem] lg:h-[40rem] bg-center bg-no-repeat bg-contain duration-500 relative mx-auto top-[-4rem] sm:top-[-2rem] md:top-[5.2rem] xl:top-[3.7rem] xl:scale-125"
      >
        <button className="absolute bottom-10 sm:left-1/2 sm:translate-x-[-16rem] rotate-45 md:hidden">
          <p className="font-bold text-base">
            ONTDEK <br />
            PRODUCT
          </p>
          <IoMdArrowDropdown className="text-6xl -mt-2" />
        </button>
        <button className="absolute bottom-[4rem] lg:bottom-[6rem] left-1/2 hover:scale-90 transition-transform duration-500 hidden md:block">
          <img className="w-[14rem]" src={ArrowButton} alt="arrow" />
        </button>
      </div>
      {/* image slider end */}

      {/* slider indicator start */}
      <div className="flex gap-x-1 bottom-1/2  md:-translate-x-[21.7rem] lg:-translate-x-[28rem] xl:-translate-x-[35rem] translate-y-[5rem]  sm:translate-y-[10rem] md:translate-y-[6rem] lg:translate-y-[6rem] xl:translate-y-[3rem] justify-center py-2 absolute left-1/2 md:rotate-[49deg]">
        {slides.map((slide, slideIndex) => (
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
