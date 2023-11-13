import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { TbEyeSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import chairCard from "../assets/img/chair-card.jpg";

export default function ProductCard() {
  return (
    <div>
      <div className="card-wrapper min-w-[11rem] max-w-[18rem] h-[25rem] relative overflow-hidden rounded-[10px] bg-white shadow-none">
        <div className="h-full w-full">
          <div
            style={{ backgroundImage: `url(${chairCard}` }}
            className="w-full h-[80%] bg-cover"
          ></div>
          <div className="h-[5rem]">
            <div className="grid grid-cols-[2fr_1fr] h-full">
              <div className="pl-3 pt-2">
                <h1 className="text-2xl font-bold">Chair</h1>
                <p className="font-roboto text-lg">£250</p>
              </div>
              <Link
                to="/deals/product-details"
                className="bg-gradient-to-t from-primary-yellow to-secondary-yellow hover:from-secondary-yellow hover:to-secondary-yellow h-full grid place-items-center"
              >
                <TbEyeSearch className="text-4xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="inside px-4 py-6 bg-primary-yellow z-10 h-[140px] w-[140px] absolute top-[-75px] right-[-75px] hover:w-full hover:top-0 hover:right-0 hover:h-[80%]">
          <div className="info-icon  text-primary-black absolute right-[85px] top-[85px] opacity-[1]">
            <AiFillInfoCircle className="text-xl" />
          </div>
          <div className="contents pt-10">
            <table className="w-full text-left">
              <tbody>
                <tr>
                  <th>Width</th>
                  <th>Height</th>
                </tr>
                <tr>
                  <td>3000mm</td>
                  <td>4000mm</td>
                </tr>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
                <tr>
                  <td>200mm</td>
                  <td>200mm</td>
                </tr>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
                <tr>
                  <td>200mm</td>
                  <td>200mm</td>
                </tr>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
                <tr>
                  <td>200mm</td>
                  <td>200mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
