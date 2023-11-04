import React from "react";

export default function Subscribe() {
  return (
    <div className="font-raleway md:font-roboto py-14 bg-white md:py-20">
      <div className="text-center mb-6">
        <h3 className="font-bold md:font-normal text-xl md:text-[1.25rem] ">
          De beste deals, één klik verwijderd.
        </h3>
        <p className="text-sm py-4 md:text-[1.25rem] -mt-2">
          Altijd op de hoogte, altijd voordeel.
        </p>
      </div>
      <form>
        <div className="flex border-2 border-primary-yellow rounded-md w-[80%] md:w-[37.5rem] mx-auto overflow-hidden">
          <input
            placeholder="E-mailadres"
            className="focus:outline-none h-full w-full py-3 pl-3 font-semibold "
            type="text"
          />
          <button className="bg-primary-yellow block px-3 md:px-9 py-2 md:py-3 whitespace-nowrap font-bold text-sm">
            SCHRIJF JE IN
          </button>
        </div>
      </form>
    </div>
  );
}
