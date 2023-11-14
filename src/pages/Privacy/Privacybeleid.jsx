import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Privacybeleid() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <main className="bg-primary-yellow">
      <section className="container font-raleway py-16 text-primary-black">
        <h1 className="font-bold text-2xl pb-6">PRIVACYBELEID</h1>
        <ul className="space-y-8">
          <li>
            <h5 className="text-xl font-semibold pb-2">1. Overzicht</h5>
            <p className="font-roboto">
              Dit privacybeleid beschrijft hoe Extrema Deals ("wij", "ons", of
              "onze") uw persoonsgegevens verzamelt en verwerkt wanneer u onze
              website bezoekt. Uw privacy is voor ons van groot belang en we
              zijn toegewijd aan de bescherming ervan. Door onze website te
              blijven gebruiken, gaat u akkoord met ons privacybeleid zoals
              beschreven op deze pagina.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">
              2. Verzamelde Gegevens
            </h5>
            <p className="font-roboto">
              We verzamelen informatie die u ons geeft via formulieren,
              nieuwsbriefinschrijvingen en interacties met onze site. Dit omvat
              contactgegevens en, indien van toepassing, locatiegegevens.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">
              3. Gebruik van Gegevens
            </h5>
            <p className="font-roboto">
              Uw gegevens worden gebruikt om onze diensten aan te bieden, uw
              ervaring te verbeteren, en voor communicatie gerelateerd aan onze
              diensten. We gebruiken ook cookies voor websitefunctionaliteit en
              analyse (zie ons{" "}
              <Link
                className="font-bold underline hover:text-secondary-black"
                to="/cookiebeleid"
              >
                Cookiebeleid
              </Link>
              ).
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">
              4. Delen van Gegevens
            </h5>
            <p className="font-roboto">
              We delen persoonlijke gegevens alleen met derden voor diensten die
              essentieel zijn voor onze bedrijfsvoering en websitefuncties.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">5. Uw Rechten</h5>
            <p className="font-roboto">
              U heeft het recht op toegang tot uw gegevens, correctie,
              verwijdering, en bezwaar tegen verwerking. Voor verzoeken, neem
              contact met ons op via{" "}
              <a
                className="font-bold underline hover:text-secondary-black"
                href="mailto:contact@extremadeals.com"
              >
                contact@extremadeals.com
              </a>
              .
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">6. Beveiliging</h5>
            <p className="font-roboto">
              We nemen de beveiliging van uw gegevens serieus en gebruiken
              passende maatregelen om ze te beschermen.
            </p>
          </li>
        </ul>
        <p className="font-roboto py-14">
          Ons privacybeleid kan wijzigen. Raadpleeg dit privacybeleid regelmatig
          om op de hoogte te blijven van eventuele aanpassingen. Door onze
          website te blijven gebruiken na wijzigingen in ons privacybeleid,
          accepteert u die wijzigingen.
        </p>
      </section>
    </main>
  );
}
