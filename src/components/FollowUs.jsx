import blackGradientFacebook from "../assets/svg/facebook-icon-black-gradient.svg";
import yellowGradientFacebook from "../assets/svg/facebook-icon-yellow-gradient.svg";
import blackGradientInstagram from "../assets/svg/instagram-icon-black-gradient.svg";
import yellowGradientInstagram from "../assets/svg/instagram-icon-yellow-gradient.svg";

export default function FollowUs() {
  return (
    <div className="md:mt-1 pl-10 pt-8 md:pl-0 md:pt-0">
      <h3 className="font-bold text-primary-yellow md:text-primary-black mb-9 md:mb-6 text-xl">
        VOLG ONS
      </h3>
      <ul className="space-y-8 md:space-y-6 md:text-secondary-black">
        <li>
          <a
            href="https://www.facebook.com/extremadeals/"
            target="blank"
            className="flex items-center gap-2 md:hover:text-gray-600 transition-colors duration-200"
          >
            <img
              className="w-6 lg:w-[1.5625rem] h-auto hidden md:block"
              src={blackGradientFacebook}
              alt="icon"
            />
            <img
              className="w-6 lg:w-[1.5625rem] h-auto  md:hidden"
              src={yellowGradientFacebook}
              alt="icon"
            />

            <p>Facebook</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/extrema_deals/"
            target="blank"
            className="flex items-center gap-2 md:hover:text-gray-600 transition-colors duration-200"
          >
            <img
              className="w-6 lg:w-[1.5625rem] h-auto hidden md:block"
              src={blackGradientInstagram}
              alt="icon"
            />
            <img
              className="w-6 lg:w-[1.5625rem] h-auto md:hidden"
              src={yellowGradientInstagram}
              alt="icon"
            />

            <p>Instagram</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
