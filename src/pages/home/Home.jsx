import React from "react";
import CTABar from "./sections/CTABar";
import CTABarSmDevices from "./sections/CTABarSmDevices";
import Hero from "./sections/Hero";
import ProductSlider from "./sections/ProductSlider";
import Subscribe from "./sections/Subscribe";
const ctaDetailsApi = [
  {
    id: 1,
    category: "OPKOPEN",
    para_text:
      "Heb je onnodige spullen? Wij kopen ze op, van enkele items tot een volledige inboedel. Waarom bewaren wat je kunt verkopen?",
    btn_text: "VERKOOP AAN ONS",
  },
  {
    id: 2,
    category: "ONTRUIMING",
    para_text:
      "Wil je zorgeloos je woning laten leeghalen en klaarmaken voor een nieuwe start? Laat het over aan onze professionele huisontruimingsdienst. Wij waarderen wat jij niet meer gebruikt.",
    btn_text: "ONTRUIM MET ONS",
  },
  {
    id: 3,
    category: "DEALS",
    para_text:
      "Neem een kijkje naar onze diverse collectie van unieke producten en zorgvuldig gerenoveerde items. Mis onze speciale deals niet!",
    btn_text: "ONTDEK ONZE SHOP",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <CTABarSmDevices ctaDetails={ctaDetailsApi} />
      <CTABar />
      <ProductSlider />
      <Subscribe />
    </main>
  );
}
