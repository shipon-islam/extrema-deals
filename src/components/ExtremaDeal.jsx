import blackLocation from "../assets/svg/location-icon-black-gradient.svg";
import GradientLocationIcon from "../assets/svg/location-icon-yellow-gradient.svg";
import blackEMail from "../assets/svg/mail-icon-black-gradient.svg";
import GradientMailIcon from "../assets/svg/mail-icon-yellow-gradient.svg";
import blackWhatsapp from "../assets/svg/whatsapp-icon-black-gradient.svg";
import GradientWhatsappIcon from "../assets/svg/whatsapp-icon-yellow-gradient.svg";
export default function ExtremaDeal() {
  return (
    <div className="md:mt-1 pl-10 pt-8 md:pl-0 md:pt-0 ">
      <h3 className="font-bold text-xl mb-9 md:mb-6 text-primary-yellow md:text-primary-black font-raleway">
        EXTREMA DEALS
      </h3>
      <ul className="space-y-10 md:space-y-6 md:text-secondary-black font-roboto">
        <li>
          <a
            href="https://maps.app.goo.gl/SrXzzXR5AWf5gS4B7"
            target="blank"
            className="flex items-center gap-2 md:hover:text-gray-600 transition-colors duration-200"
          >
            <img
              className="w-6 lg:w-[1.5625rem] h-auto hidden md:block"
              src={blackLocation}
              alt="icon"
            />
            <img
              className="w-6 lg:w-[1.5625rem] h-auto md:hidden"
              src={GradientLocationIcon}
              alt="icon"
            />
            <p>
              Zevenputtenstraat 7 bus 5,
              <br />
              3690 Zutendaal, Limburg Belgie
            </p>
          </a>
        </li>
        <li>
          <a
            href="tel:+32 468 12 65 99"
            className="flex items-center gap-2 md:hover:text-gray-600 transition-colors duration-200"
          >
            <img
              className="w-6 lg:w-[1.5625rem] h-auto hidden md:block"
              src={blackWhatsapp}
              alt="icon"
            />
            <img
              className="w-6 lg:w-[1.5625rem] h-auto md:hidden"
              src={GradientWhatsappIcon}
              alt="icon"
            />
            <p>John: +32 468 12 65 99</p>
          </a>
        </li>
        <li>
          <a
            href="tel:+32 477 46 25 38"
            className="flex items-center gap-2 md:hover:text-gray-600 transition-colors duration-200"
          >
            <img
              className="w-6 lg:w-[1.5625rem] h-auto hidden md:block"
              src={blackWhatsapp}
              alt="icon"
            />
            <img
              className="w-6 lg:w-[1.5625rem] h-auto md:hidden"
              src={GradientWhatsappIcon}
              alt="icon"
            />
            <p>Peter: +32 477 46 25 38</p>
          </a>
        </li>
        <li>
          <a
            href="mailto:info@extremadeals.com"
            className="flex items-center gap-2 md:hover:text-gray-600 transition-colors duration-200"
          >
            <img
              className="w-6 lg:w-[1.5625rem] h-auto hidden md:block"
              src={blackEMail}
              alt="icon"
            />
            <img
              className="w-6 lg:w-[1.5625rem] h-auto md:hidden"
              src={GradientMailIcon}
              alt="icon"
            />
            <p>info@extremadeals.com</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
