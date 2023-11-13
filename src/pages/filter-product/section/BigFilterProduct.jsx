import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";

export default function BigFilterProduct() {
  return (
    <section className=" bg-secondary-black hidden md:block">
      <div className="container pt-10 pb-16">
        <Link
          className="bg-gradient-to-b from-secondary-yellow to-primary-yellow hover:from-secondary-yellow hover:to-secondary-yellow flex gap-x-2 items-center md:py-1 px-2 md:px-4 rounded-sm text-primary-black w-fit "
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(12).keys()].map((item) => (
            <ProductCard key={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
