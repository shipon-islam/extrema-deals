import React from "react";
import { BsEyeFill, BsShareFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import eyeIcon from "../../../assets/img/eye.png";
import shareIcon from "../../../assets/img/share.png";
import contactShapeBg from "../../../assets/svg/contact-shape-big.svg";
import contactShapeSm from "../../../assets/svg/contact-shape.svg";
import blackWhatsapp from "../../../assets/svg/whatsapp-icon-black-gradient.svg";

export default function ProductInfo() {
  const handleShowFeature = ({ currentTarget }) => {
    const featureContainer = currentTarget.parentElement.nextElementSibling;
    const downArrow = currentTarget.firstChild;
    const upArrow = currentTarget.lastChild;
    featureContainer.classList.toggle("hidden");
    downArrow.classList.toggle("hidden");
    upArrow.classList.toggle("hidden");
  };
  return (
    <section className="md:container font-roboto ">
      <div className=" text-secondary-black text-[10px] text-center lg:text-base md:text-left">
        <span> GERENOVEERD </span>
        {">"}
        <span> MEUBILAIR </span>
        {">"}
        <span> KASTEN </span>
        {">"}
        <span className="text-primary-yellow"> 786534</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_18rem] lg:grid-cols-[1fr_21.875rem] gap-x-10 xl:gap-x-32">
        <div className="md:px-0 pt-8 xl:pt-14">
          <h1 className="text-center md:text-left text-xl lg:text-[2.25rem] font-raleway font-bold text-primary-black">
            RETRO KLEERKAST VIANDI
          </h1>
          <p className="px-4 md:px-0 my-4 lg:pt-6 text-center md:text-left text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="px-4 md:px-0 flex justify-between items-center mt-8 md:mb-8">
            <h5 className="font-bold text-xl lg:text-[2rem] ">€ 250</h5>
            <div className="flex gap-x-4 md:hidden">
              <BsShareFill className="text-2xl" />
              <div className="flex gap-x-3 items-center">
                <BsEyeFill className="text-3xl" />
                <span className="font-medium ">32</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-primary-black md:hidden">
            <h3 className="text-center font-bold mt-6">
              INTERESSE? CONTACTEER ONS
            </h3>
            <div className="mb-8">
              <div className="relative">
                <img className="ml-auto" src={contactShapeSm} alt="shape" />
                <div className="flex gap-x-3 sm:gap-x-5 items-center right-10 sm:right-14 absolute bottom-[0.9rem] font-medium ">
                  <img
                    className="w-[2.3rem] sm:w-[2.5rem]"
                    src={blackWhatsapp}
                    alt="whatsapp"
                  />
                  <a
                    className="hover:text-secondary-black"
                    href="tel:+32 468 12 65 99"
                  >
                    John: +32 468 12 65 99
                  </a>
                </div>
              </div>
              <div className="relative">
                <img className="ml-auto" src={contactShapeSm} alt="shape" />
                <div className="flex gap-x-3 sm:gap-x-5 items-center right-10 sm:right-14 absolute bottom-[0.9rem] font-medium ">
                  <img
                    className="w-[2.3rem] sm:w-[2.5rem]"
                    src={blackWhatsapp}
                    alt="whatsapp"
                  />
                  <a
                    className="hover:text-secondary-black"
                    href="tel:+32 477 46 25 38"
                  >
                    Peter: +32 477 46 25 38
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10">
            <div className="px-4 md:px-0 border-t-2 border-b-2 border-primary-yellow flex justify-between">
              <span className="text-[1.25rem] font-bold py-1 text-primary-black">
                SPECIFICATIES
              </span>
              <button onClick={handleShowFeature}>
                <IoIosArrowDown className="text-2xl text-primary-black" />
                <IoIosArrowUp className="text-2xl text-primary-black hidden" />
              </button>
            </div>
            <ul className="px-4 md:px-0 hidden text-primary-black space-y-5 mt-5">
              <li>
                <b>Specification:</b> detail.
              </li>
              <li>
                <b>Specification:</b> detail.
              </li>
              <li>
                <b>Specification:</b> detail.
              </li>
              <li>
                <b>Specification:</b> detail.
              </li>
              <li>
                <b>Specification:</b> detail.
              </li>
              <li>
                <b>Specification:</b> detail.
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${contactShapeBg})` }}
          className="w-[22] h-[30.1875rem] bg-no-repeat bg-contain relative hidden md:block"
        >
          <div className="text-secondary-yellow absolute top-24 left-16">
            <div className="flex gap-x-3 items-center">
              <img className="w-[2.5rem] h-auto" src={eyeIcon} alt="eye" />
              <BsEyeFill className="text-4xl bg-gradient-to-l from-secondary-yellow to-primary-yellow  bg-clip-text hidden" />
              <span className="font-medium text-primary-yellow ">32</span>
            </div>
            <div className="flex gap-x-3 mt-5 items-center">
              <img className="w-[2.5rem] h-auto" src={shareIcon} alt="share" />
              <BsShareFill className="text-[2rem] bg-gradient-to-l from-secondary-yellow to-primary-yellow  bg-clip-text hidden" />
              <span className="font-medium text-primary-yellow ">Delen</span>
            </div>
          </div>
          <div className="flex gap-x-2 items-center absolute right-1 lg:right-8 bottom-[14rem] lg:bottom-[10.6rem] font-medium">
            <img
              className="w-[2.1rem] lg:w-[2.5rem]"
              src={blackWhatsapp}
              alt="whatsapp"
            />
            <a
              className="hover:text-secondary-black"
              href="tel:+32 468 12 65 99"
            >
              John: +32 468 12 65 99
            </a>
          </div>
          <div className="flex gap-x-2 items-center absolute right-1 lg:right-8 bottom-[8.7rem] lg:bottom-[4rem] font-medium">
            <img
              className="w-[2.1rem] lg:w-[2.5rem]"
              src={blackWhatsapp}
              alt="whatsapp"
            />
            <a
              className="hover:text-secondary-black"
              href="tel:+32 477 46 25 38"
            >
              Peter: +32 477 46 25 38
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
