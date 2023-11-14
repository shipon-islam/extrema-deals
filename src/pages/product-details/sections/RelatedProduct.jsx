import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../../../components/CustomArrows";
import ProductCard from "../../../components/ProductCard";

export default function RelatedProduct() {
  const settings = {
    className: "center",
    centerMode: true,
    slidesToShow: 5,
    speed: 300,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
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
    <div
      style={{
        background: "linear-gradient(180deg, #1F2228 0%, #0E1012 100%)",
      }}
      className=" py-16"
    >
      <div className="container">
        <h1 className="text-primary-white font-bold text-xl py-4 hover:text-primary-yellow hover:underline">
          ANDEREN KEKEN OOK NAAR
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
