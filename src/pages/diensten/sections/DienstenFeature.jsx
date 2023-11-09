import { Link } from "react-router-dom";
import cashbagGradientIcon from "../../../assets/svg/hand-holding-cashbag-buyup-icon-gradient.svg";
import houseClearanceGadient from "../../../assets/svg/house-clearance-icon-gradient.svg";

export default function DienstenFeature() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #1F2228 0%, #0E1012 100%)",
      }}
      className="font-roboto hidden md:block"
    >
      <div className="container">
        <div id="OPKOPEN" className="grid grid-cols-[1fr_3fr] gap-x-4 pt-32">
          <div>
            <img
              className="w-[222px] h-[257px]"
              src={cashbagGradientIcon}
              alt="cashback"
            />
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-bold">OPKOPEN</h1>
            <p className="mt-14 text-[1.1rem]">
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
            <p className="mt-10 mb-14">
              Heb je iets aan te bieden? Neem dan gerust contact met ons op.
              Bel, stuur of WhatsApp ons de details via
              <br />{" "}
              <a href="tel:+32 468 12 65 99">
                <span className="text-primary-yellow underline font-medium">
                  John: +32 468 12 65 99
                </span>
              </a>{" "}
              of{" "}
              <a href="tel:+32 477 46 25 38">
                <span className="text-primary-yellow underline font-medium">
                  Peter: +32 477 46 25 38
                </span>
              </a>
              . Je kunt ook via de onderstaande knop het bijhorend formulier
              invullen.
            </p>
            <Link to="/diensten/opkopen-form">
              <button className="bg-gradient-to-b from-secondary-yellow to-primary-yellow inline-block text-center no-underline whitespace-nowrap cursor-pointer font-primary text-primary-black text-base font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200">
                BIED AAN &amp; VERDIEN
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] gap-x-4  py-40">
          <div>
            <img
              className="w-[222px] h-[257px]"
              src={houseClearanceGadient}
              alt="cashback"
            />
          </div>
          <div id="ONTRUIMING" className="text-white">
            <h1 className="text-3xl font-bold">ONTRUIMING</h1>
            <p className="mt-14 text-[1.1rem]">
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
            <p className="mt-10 mb-14">
              Heb je een ontruiming nodig? Neem gerust contact met ons op voor
              een vrijblijvende offerte. Bel, stuur of WhatsApp ons de details
              via{" "}
              <a href="tel:+32 468 12 65 99">
                <span className="text-primary-yellow underline font-medium">
                  John: +32 468 12 65 99
                </span>
              </a>{" "}
              of{" "}
              <a href="tel:+32 477 46 25 38">
                <span className="text-primary-yellow underline font-medium">
                  Peter: +32 477 46 25 38
                </span>
              </a>
              . Je kunt ook via de onderstaande knop het bijhorend formulier
              invullen.
            </p>
            <Link to="/diensten/ontruiming-form">
              <button className="bg-gradient-to-b from-secondary-yellow to-primary-yellow inline-block text-center no-underline whitespace-nowrap cursor-pointer font-primary text-primary-black text-base font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200">
                VRIJBLIJVENDE OFFERTE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
