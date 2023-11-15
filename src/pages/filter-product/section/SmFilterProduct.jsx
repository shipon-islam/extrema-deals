import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../../../components/CustomArrows";
import ProductCard from "../../../components/ProductCard";

export default function SmFilterProduct() {
  const settings = {
    className: "center",
    centerMode: true,
    slidesToShow: 5,
    speed: 300,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className=" py-16 md:hidden bg-secondary-black">
      <div className="container">
        <Link
          className="bg-gradient-to-b from-secondary-yellow to-primary-yellow hover:from-secondary-yellow hover:to-secondary-yellow flex gap-x-2 items-center md:py-1 px-2 md:px-4 rounded-sm text-primary-black w-fit mx-auto"
          to="/deals"
        >
          <span className="font-bold text-[10px] md:text-base">GA TERUG</span>
          <span>
            <AiOutlineDoubleLeft className="text-lg md:text-3xl" />
          </span>
        </Link>
        <h1 className="text-center text-xl font-bold text-primary-white py-6">
          DEALS: MEUBILAIR - STOELEN
        </h1>
      </div>
      <div className="slick-opacity">
        <Slider {...settings}>
          {[...Array(12).keys()].map((item) => (
            <ProductCard key={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
