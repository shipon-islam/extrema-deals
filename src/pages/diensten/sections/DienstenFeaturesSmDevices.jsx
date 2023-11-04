import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import cashback_black_icon from "../../../assets/svg/hand-holding-cashbag-buyup-icon-black.svg";
import houseClearance from "../../../assets/svg/house-clearance-icon-white.svg";

export default function DienstenFeaturesSmDevices() {
  const handleCollappes = ({ currentTarget }) => {
    const collapesAbleItem = currentTarget.parentElement.nextElementSibling;
    const arrowDownBtn = currentTarget.firstChild;
    const arrowUpBtn = currentTarget.lastChild;
    collapesAbleItem.classList.toggle("hidden");
    arrowDownBtn.classList.toggle("hidden");
    arrowUpBtn.classList.toggle("hidden");
    console.log(arrowDownBtn);
  };
  return (
    <section className="md:hidden">
      <ul className="relative -top-10 space-y-12">
        <li className="bg-primary-yellow rounded-3xl relative">
          <div
            className="flex items-center justify-between py-4 px-4
          "
          >
            <button onClick={handleCollappes} className="">
              <IoIosArrowDown className="text-[2.3rem]" />
              <IoIosArrowUp className="text-[2.3rem] hidden" />
            </button>
            <h5 className="text-xl font-bold">OPKOPEN</h5>
            <img
              className="w-14"
              src={cashback_black_icon}
              alt="cashback-icon"
            />
          </div>
          <div className="px-6 pb-24 hidden">
            <p>
              Iedereen heeft wel iets in huis of bedrijf dat niet meer gebruikt
              wordt, maar nog te waardevol is om weg te gooien. Of misschien sta
              je op het punt om een grote schoonmaak te houden, of moet je
              bedrijf helaas zijn deuren sluiten. Wat de reden ook is, wij zijn
              hier om het proces makkelijker te maken. Bij ExtremaDeals geloven
              we in het potentieel van elk item, groot of klein. Wij kopen uw
              spullen op, of het nu gaat om individuele items, een complete
              inboedel , bedrijfsvoorraden, of voorraden uit faillissementen.
              Ons deskundige team evalueert de waarde zorgvuldig en biedt een
              eerlijke prijs. Laat overbodige items geen stof verzamelen;
              verkoop ze aan ons en maak winst.
            </p>
            <button className="bg-gradient-to-b from-primary-gray to-primary-black shadow-md text-center no-underline whitespace-nowrap cursor-pointer font-primary text-primary-white text-base font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-primary-gray hover:to-primary-gray active:scale-95 transition-colors duration-500 active:duration-200 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              BIED AAN & VERDIEN
            </button>
          </div>
        </li>
        <li className="bg-primary-black text-white rounded-3xl relative">
          <div
            className="flex items-center justify-between py-6 px-4
          "
          >
            <button onClick={handleCollappes} className="">
              <IoIosArrowDown className="text-[2.3rem]" />
              <IoIosArrowUp className="text-[2.3rem] hidden" />
            </button>
            <h5 className="text-xl font-bold">ONTRUIMING</h5>
            <img className="w-14" src={houseClearance} alt="house clearange" />
          </div>
          <div className="px-6 pb-24 hidden ">
            <p>
              Een nieuw hoofdstuk begint met een lege pagina. Laat het leegmaken
              van je woning, van vloer tot plafond, met vertrouwen aan ons over.
              Als uw betrouwbare partner zorgen wij voor een efficiënte en
              professionele ontruiming. Onze doelgerichte aanpak zorgt ervoor
              dat items die nog van waarde zijn een tweede leven krijgen in onze
              shop. Wat niet meer bruikbaar is, wordt op een milieuvriendelijke
              manier gerecycled of verwerkt. Terwijl jij je op de toekomst
              richt, gaan wij respectvol om met wat achterblijft. Kies voor een
              woningontruiming die niet alleen zorg draagt voor uw huis, maar
              ook voor het milieu en de circulaire economie. Kies voor een
              ontruiming met toegevoegde waarde.
            </p>
            <button
              className="bg-gradient-to-b from-secondary-yellow to-primary-yellow shadow-md text-center no-underline whitespace-nowrap cursor-pointer font-primary text-primary-black text-base font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
              id="service2Button"
            >
              VRIJBLIJVENDE OFFERTE
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}
