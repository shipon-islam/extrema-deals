import { useEffect } from "react";

export default function Cookiebeleid() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <main className="bg-primary-yellow">
      <section className="container font-raleway py-16 text-primary-black">
        <h1 className="font-bold text-2xl pb-6">COOKIEBELEID</h1>
        <ul className="space-y-8">
          <li>
            <h5 className="text-xl font-semibold pb-2">1. Inleiding</h5>
            <p className="font-roboto">
              Bij Extrema Deals gebruiken we cookies om uw ervaring op onze
              website te verbeteren, u te voorzien van relevante informatie,
              producten en diensten, en om het delen van onze inhoud op sociale
              media mogelijk te maken. Dit cookiebeleid biedt meer uitleg over
              wat cookies zijn en hoe we ze gebruiken.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">2. Wat zijn cookies?</h5>
            <p className="font-roboto">
              Cookies zijn kleine tekstbestanden die op uw apparaat worden
              geplaatst door websites die u bezoekt. Ze worden veel gebruikt om
              websites efficiënter te laten werken, evenals om informatie aan de
              eigenaren van de website te verstrekken.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">
              3. Hoe gebruiken we cookies?
            </h5>
            <p className="font-roboto font-medium">
              Wij gebruiken de volgende soorten cookies:
            </p>
            <ul className="list-disc ml-7 mt-3 space-y-4">
              <li>
                <b>Functionele Cookies:</b> Deze zijn essentieel voor de werking
                van onze website. Ze stellen u in staat om door de website te
                navigeren en de functies ervan te gebruiken.
              </li>
              <li>
                <b>Sessiecookies: </b>Dit zijn tijdelijke cookies die in de
                cookiebestanden van uw browser blijven totdat u de website
                verlaat. Ze stellen ons in staat om uw keuzes en acties te
                onthouden tijdens uw bezoek aan onze website, wat bijdraagt aan
                een goede gebruikerservaring. Analytische cookies: Deze cookies
                stellen ons in staat om bezoekersstatistieken te verzamelen,
                zoals het aantal bezoekers en hoe ze onze website gebruiken. Dit
                helpt ons de werking van de website te verbeteren.
              </li>
              <li>
                <b>Analytische cookies: </b>Deze cookies stellen ons in staat om
                bezoekersstatistieken te verzamelen, zoals het aantal bezoekers
                en hoe ze onze website gebruiken. Dit helpt ons de werking van
                de website te verbeteren.
              </li>
              <li>
                <b>Cookies van Derden: </b>
                Onze website maakt gebruik van diensten van derden, zoals Google
                Maps voor locatieweergaven op onze website en sociale media
                platforms die het mogelijk maken om onze content te delen. Deze
                cookies kunnen ook door derden worden gebruikt voor
                advertentiedoeleinden. We hebben geen controle over de plaatsing
                van deze cookies en de data die zij verzamelen; dit valt onder
                het privacybeleid van de betreffende diensten.
              </li>
            </ul>
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
              contact met ons op via info@extremadeals.com.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">6. Beveiliging</h5>
            <p className="font-roboto">
              We nemen de beveiliging van uw gegevens serieus en gebruiken
              passende maatregelen om ze te beschermen.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">4. Uw keuzes</h5>
            <p className="font-roboto">
              Door onze website te blijven gebruiken, gaat u akkoord met ons
              gebruik van cookies zoals beschreven in dit cookiebeleid. U kunt
              uw browser instellen om aan te geven wanneer een cookie wordt
              verzonden, of om alle of bepaalde cookies te weigeren, afhankelijk
              van uw voorkeuren. Houd er echter rekening mee dat sommige
              functies van de website mogelijk niet functioneren zoals bedoeld
              als u cookies weigert.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">5. Cookies beheren</h5>
            <p className="font-roboto">
              U kunt uw cookievoorkeuren aanpassen door de instellingen van uw
              browser te wijzigen. De Help-functie van de meeste browsers kan u
              vertellen hoe u kunt voorkomen dat uw browser nieuwe cookies
              accepteert, hoe u de browser kunt laten waarschuwen wanneer u een
              nieuwe cookie ontvangt, of hoe u alle cookies kunt uitschakelen.
            </p>
          </li>
          <li>
            <h5 className="text-xl font-semibold pb-2">
              6. Contact met ons opnemen
            </h5>
            <p className="font-roboto">
              Als u vragen heeft over ons cookiebeleid, kunt u contact met ons
              opnemen via info@extremadeals.com.
            </p>
          </li>
        </ul>
        <p className="font-roboto py-14">
          Ons cookiebeleid kan wijzigen. Raadpleeg dit cookiebeleid regelmatig
          om op de hoogte te blijven van eventuele aanpassingen. Door onze
          website te blijven gebruiken na wijzigingen in ons Cookiebeleid,
          accepteert u die wijzigingen.
        </p>
      </section>
    </main>
  );
}
