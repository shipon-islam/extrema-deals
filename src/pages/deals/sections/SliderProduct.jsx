import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../../../components/CustomArrows";
import ProductCard from "../../../components/ProductCard";

export default function SliderProduct() {
  const settings = {
    className: "center",
    centerMode: true,
    slidesToShow: 4,
    speed: 300,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 895,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="slick-opacity">
      <Slider {...settings}>
        {[...Array(12).keys()].map((item) => (
          <ProductCard key={item} />
        ))}
      </Slider>
    </div>
  );
}
