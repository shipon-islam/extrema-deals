import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
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
          <div className="px-6 pb-24 hidden font-roboto text-primary-black text-center">
            <p>
              Iedereen heeft wel iets in huis of binnen het bedrijf dat niet
              meer gebruikt wordt, maar nog te waardevol is om weg te gooien.
              Misschien sta je op het punt om een grote schoonmaak te houden, of
              moet je bedrijf helaas zijn deuren sluiten. Wat de reden ook is,
              wij zijn hier om het proces te vereenvoudigen. Bij Extrema Deals
              zien we het potentieel van elk item, groot of klein. Wij kopen
              jouw spullen op, of het nu gaat om individuele items, een complete
              inboedel, bedrijfsvoorraden, of voorraden uit faillissementen. Ons
              deskundige team evalueert de waarde zorgvuldig en biedt een
              eerlijke prijs. Laat overbodige items geen stof verzamelen;
              verkoop ze aan ons en maak winst.
            </p>
            <p className="py-10">
              Heb je iets aan te bieden? Neem dan gerust contact met ons op.
              Bel, stuur of WhatsApp ons de details via{" "}
              <a href="tel:+32 468 12 65 99">
                <span className="font-medium underline hover:text-secondary-black">
                  John: +32 468 12 65 99
                </span>
              </a>{" "}
              of{" "}
              <a href="tel:+32 477 46 25 38">
                <span className="font-medium underline hover:text-secondary-black">
                  Peter: +32 477 46 25 38
                </span>
              </a>
              . Je kunt ook via de onderstaande knop het bijhorend formulier
              invullen.
            </p>
            <Link to="/diensten/opkopen-form">
              <button className="bg-gradient-to-b from-primary-gray to-primary-black shadow-md text-center no-underline whitespace-nowrap cursor-pointer font-primary text-primary-white text-base font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-primary-gray hover:to-primary-gray active:scale-95 transition-colors duration-500 active:duration-200 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                BIED AAN & VERDIEN
              </button>
            </Link>
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
          <div className="px-6 pb-24 hidden font-roboto text-primary-white text-center">
            <p>
              Een nieuw hoofdstuk begint met een lege pagina. Vertrouw op
              Extrema Deals voor een professionele ontruiming van je woning, van
              vloer tot plafond. Als je betrouwbare partner, bieden wij een
              efficiënte en zorgvuldige ontruimingsdienst aan. Onze doelgerichte
              aanpak zorgt ervoor dat waardevolle items een tweede leven krijgen
              in onze shop, terwijl het onbruikbare op een milieuvriendelijke
              wijze wordt gerecycled of verwerkt. Terwijl jij je richt op de
              toekomst, behandelen wij met respect wat achterblijft. Kies voor
              een woningontruiming die niet alleen zorg draagt voor je woning,
              maar ook bijdraagt aan het milieu en de circulaire economie. Kies
              voor een ontruiming met toegevoegde waarde.
            </p>
            <p className="py-10">
              Heb je een ontruiming nodig? Neem gerust contact met ons op voor
              een vrijblijvende offerte. Bel, stuur of WhatsApp ons de details
              via{" "}
              <a href="tel:+32 468 12 65 99">
                <span className="font-medium underline">
                  John: +32 468 12 65 99
                </span>
              </a>{" "}
              of{" "}
              <a href="tel:+32 477 46 25 38">
                <span className="font-medium underline">
                  Peter: +32 477 46 25 38
                </span>
              </a>
              . Je kunt ook via de onderstaande knop het bijhorend formulier
              invullen.
            </p>
            <Link to="/diensten/ontruiming-form">
              <button
                className="bg-gradient-to-b from-secondary-yellow to-primary-yellow shadow-md text-center no-underline whitespace-nowrap cursor-pointer font-primary text-primary-black text-base font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                id="service2Button"
              >
                VRIJBLIJVENDE OFFERTE
              </button>
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
}
