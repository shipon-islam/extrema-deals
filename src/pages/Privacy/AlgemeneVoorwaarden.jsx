import { useEffect } from "react";

export default function AlgemeneVoorwaarden() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <main className="bg-primary-yellow">
      <section className="container font-raleway py-16 text-primary-black">
        <h1 className="font-bold text-2xl pb-6">ALGEMENE VOORWAARDEN</h1>
        <ul className="space-y-8">
          <li>
            <h5 className="text-xl font-semibold pb-2">1. Inleiding</h5>
            <p className="font-roboto">
              Deze voorwaarden regelen uw gebruik van de Extrema Deals website
              en alle bijbehorende diensten. Door onze website te gebruiken,
              gaat u akkoord met deze voorwaarden. beschreven op deze pagina.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">2. Dienstverlening</h5>
            <p className="font-roboto">
              Extrema Deals biedt een platform voor het tonen van producten en
              diensten. Directe aankopen kunnen alleen via telefoon of WhatsApp
              worden gedaan.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">
              3. Intellectuele Eigendomsrechten
            </h5>
            <p className="font-roboto">
              Alle inhoud op deze website, waaronder maar niet beperkt tot
              teksten, afbeeldingen, en logo's, is eigendom van{" "}
              <a
                className="font-bold underline hover:text-secondary-black"
                href="/"
              >
                Extrema Deals
              </a>{" "}
              of onze contentleveranciers. Het webdesign en de onderliggende
              code zijn het exclusieve eigendom van{" "}
              <a
                className="font-bold underline hover:text-secondary-black"
                href="https://www.vastly.be/"
                target="blank"
              >
                Vastly
              </a>
              . Alle genoemde elementen zijn uitdrukkelijk beschermd onder de
              toepasselijke intellectuele eigendomsrechten en mogen niet worden
              gebruikt, gekopieerd, gereproduceerd, gedistribueerd,
              overgedragen, of anderszins gebruikt zonder voorafgaande
              schriftelijke toestemming van de respectievelijke eigenaren.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">
              4. Gebruiksbeperkingen
            </h5>
            <p className="font-roboto">
              Het is niet toegestaan om inhoud van onze website te kopiëren, te
              verkopen of te gebruiken voor commerciële doeleinden zonder onze
              toestemming. U stemt ermee in de website niet te gebruiken voor
              onwettige doeleinden en respect voor andere gebruikers te hebben.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">5. Aansprakelijkheid</h5>
            <p className="font-roboto">
              Onze website wordt aangeboden 'zoals deze is' en we sluiten
              aansprakelijkheid uit voor informatie die misschien niet
              up-to-date of nauwkeurig is. Extrema Deals is niet aansprakelijk
              voor schade die voortvloeit uit uw gebruik van onze website of van
              de onmogelijkheid deze te gebruiken. Op deze voorwaarden is
              Belgisch recht van toepassing. Geschillen voortvloeiend uit deze
              voorwaarden zullen uitsluitend voorgelegd worden aan de bevoegde
              rechtbank in België.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">6. Contact</h5>
            <p className="font-roboto">
              Voor vragen of klachten over deze algemene voorwaarden, neem
              contact op via{" "}
              <a
                className="font-bold underline hover:text-secondary-black"
                href="mailto:info@extremadeals.com"
              >
                info@extremadeals.com
              </a>
              .
            </p>
          </li>
        </ul>
        <p className="font-roboto py-14">
          Wij behouden ons het recht voor om deze algemene voorwaarden op elk
          moment aan te passen. Controleer regelmatig de meest actuele versie op
          onze website. Door de website te blijven gebruiken na het doorvoeren
          van wijzigingen, erkent u deze wijzigingen en stemt u ermee in.
        </p>
      </section>
    </main>
  );
}
