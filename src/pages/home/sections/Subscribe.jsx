import React from "react";

export default function Subscribe() {
  return (
    <div className="font-raleway md:font-roboto py-8 bg-white">
      <div className="text-center mb-6">
        <h3 className="font-bold text-xl">
          De beste deals, één klik verwijderd.
        </h3>
        <p className="text-sm my-3">Altijd op de hoogte, altijd voordeel.</p>
      </div>
      <form>
        <div className="flex border-2 border-primary-yellow rounded-md w-[80%] mx-auto">
          <input
            placeholder="E-mailadres"
            className="focus:outline-none h-full w-full pt-2 pl-3 font-semibold "
            type="text"
          />
          <button className="bg-primary-yellow block px-8 py-2 whitespace-nowrap font-bold text-sm">
            SCHRIJF JE IN
          </button>
        </div>
      </form>
    </div>
  );
}
