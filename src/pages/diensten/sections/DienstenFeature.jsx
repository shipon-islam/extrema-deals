import React from "react";
import cashbagGradientIcon from "../../../assets/svg/hand-holding-cashbag-buyup-icon-gradient.svg";
import houseClearanceGadient from "../../../assets/svg/house-clearance-icon-gradient.svg";

export default function DienstenFeature() {
  return (
    <section className="bg-primary-black font-roboto hidden md:block">
      <div className="section-container">
        <div className="grid grid-cols-[1fr_3fr] gap-x-4 px-4 lg:px-32 pt-32">
          <div>
            <img
              className="w-[222px] h-[257px]"
              src={cashbagGradientIcon}
              alt="cashback"
            />
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-bold">OPKOPEN</h1>
            <p className="my-14 text-[1.1rem]">
              Iedereen heeft wel iets in huis of bedrijf dat niet meer gebruikt
              wordt, maar nog te waardevol is om weg te gooien. Of misschien sta
              je op het punt om een grote schoonmaak te houden, of moet je
              bedrijf helaas zijn deuren sluiten. Wat de reden ook is, wij zijn
              hier om het proces makkelijker te maken. Bij ExtremaDeals geloven
              we in het potentieel van elk item, groot of klein. Wij kopen uw
              spullen op, of het nu gaat om individuele items, een complete
              inboedel , bedrijfsvoorraden, of voorraden uit faillissementen.{" "}
              <br />
              <br /> Ons deskundige team evalueert de waarde zorgvuldig en biedt
              een eerlijke prijs. Laat overbodige items geen stof verzamelen;
              verkoop ze aan ons en maak winst.
            </p>
            <button className="bg-gradient-to-b from-secondary-yellow to-primary-yellow inline-block text-center no-underline whitespace-nowrap cursor-pointer font-primary text-primary-black text-base font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200">
              BIED AAN &amp; VERDIEN
            </button>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] gap-x-4 px-4 lg:px-32 py-40">
          <div>
            <img
              className="w-[222px] h-[257px]"
              src={houseClearanceGadient}
              alt="cashback"
            />
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-bold">WONINGONTRUIMING</h1>
            <p className="my-14 text-[1.1rem]">
              Een nieuw hoofdstuk begint met een lege pagina. Laat het leegmaken
              van je woning, van vloer tot plafond, met vertrouwen aan ons over.
              Als uw betrouwbare partner zorgen wij voor een efficiënte en
              professionele ontruiming. Onze doelgerichte aanpak zorgt ervoor
              dat items die nog van waarde zijn een tweede leven krijgen in onze
              shop. Wat niet meer bruikbaar is, wordt op een milieuvriendelijke
              manier gerecycled of verwerkt. Terwijl jij je op de toekomst
              richt, gaan wij respectvol om met wat achterblijft.
              <br />
              <br />
              Kies voor een woningontruiming die niet alleen zorg draagt voor uw
              huis, maar ook voor het milieu en de circulaire economie. Kies
              voor een ontruiming met toegevoegde waarde.
            </p>
            <button className="bg-gradient-to-b from-secondary-yellow to-primary-yellow inline-block text-center no-underline whitespace-nowrap cursor-pointer font-primary text-primary-black text-base font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200">
              VRIJBLIJVENDE OFFERTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
