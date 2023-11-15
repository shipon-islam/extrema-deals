import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const PrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow next top-1/2 translate-y-[-50%] absolute left-0 md:left-10 text-primary-yellow text-6xl z-10  hover:text-yellow-500 cursor-pointer transition-colors duration-300 "
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

export const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow prev top-1/2 translate-y-[-50%] absolute right-0 md:right-10 text-primary-yellow text-6xl z-10 hover:text-yellow-500 cursor-pointer transition-colors duration-300"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);
