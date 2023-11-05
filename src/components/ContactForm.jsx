import React from "react";

export default function ContactForm() {
  return (
    <div>
      <h1 className="font-bold text-xl mt-10 mb-6 ml-8  text-primary-yellow md:hidden">
        CONTACTEER ONS
      </h1>
      <form action="#" className="">
        <div className="w-[90%] lg:w-[750px] mx-auto md:my-5">
          <div className="grid md:grid-cols-2 gap-x-8">
            <input
              className="input-class"
              type="text"
              placeholder="Achternaam"
            />
            <input className="input-class" type="text" placeholder="Voornaam" />
          </div>
          <div className="grid md:grid-cols-[2fr_1fr] gap-x-8">
            <input
              className="input-class"
              type="text"
              placeholder="E-mailadres"
            />
            <input
              className="input-class"
              type="text"
              placeholder="Telefoonnummer"
            />
          </div>
          <div className="grid md:grid-cols-[1fr_2fr] gap-x-8">
            <select
              className="input-class text-gray-600 "
              name=""
              id=""
              placeholder="Categorie"
            >
              <option value="">Categorie</option>
            </select>
            <input
              className="input-class"
              type="text"
              placeholder="Onderwerp"
            />
          </div>
          <div>
            <textarea
              className="input-class h-24 md:h-32"
              placeholder="Bericht"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
        <div className="md:bg-secondary-black text-primary-white md:py-3">
          <div className="grid md:grid-cols-2 w-[90%] md:w-[750px] mx-auto items-center gap-x-8">
            <div className="md:order-2 space-y-5 text-sm my-4">
              <div className="flex items-start gap-x-2">
                <input
                  className="accent:bg-primary-yellow relative top-[3px] accent-primary-yellow"
                  type="checkbox"
                />
                <p>
                  Ja, ik ga akkoord met het
                  <a className="text-primary-yellow" href="#">
                    <span> Privacybeleid </span>
                  </a>
                  ,
                  <a className="text-primary-yellow" href="#">
                    <span>Cookiebeleid </span>
                  </a>
                  en de
                  <a className="text-primary-yellow" href="#">
                    <span> Algemene Voorwaarden </span>
                  </a>
                  .
                </p>
              </div>
              <div className="flex items-start gap-x-2">
                <input
                  className="accent:bg-primary-yellow relative top-[3px] accent-primary-yellow"
                  type="checkbox"
                />
                <p>
                  Ja, ik wil updates van ExtremaDeals ontvangen in mijn mailbox.
                </p>
              </div>
            </div>
            <button className="bg-gradient-to-b from-secondary-yellow to-primary-yellow inline-block text-center whitespace-nowrap cursor-pointer font-primary text-primary-black font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200 md:order-1 h-fit">
              VERZENDEN
            </button>
          </div>
        </div>
        <hr className="border-primary-yellow hidden md:block" />
      </form>
    </div>
  );
}
