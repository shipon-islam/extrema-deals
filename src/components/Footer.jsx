import { Link, NavLink, useNavigate } from "react-router-dom";
import extremadealsLogo from "../assets/logos/extremadeals-logo-yellow.svg";
import locationIcon from "../assets/svg/location-icon-yellow-gradient.svg";
import mailIcon from "../assets/svg/mail-icon-yellow-gradient.svg";
import stripeCautionDecoration from "../assets/svg/stripe-caution-tape-decoration.svg";
import whatsappIcon from "../assets/svg/whatsapp-icon-yellow-gradient.svg";

export default function Footer() {
  const navigate = useNavigate();
  const handleClick = (sectionId) => {
    navigate("/contact", { state: { id: sectionId } });
  };
  return (
    <footer className="bg-primary-black text-primary-white relative overflow-hidden">
      <div className="container grid grid-cols-1 xl:grid-cols-[4fr_1fr] h-[510px] lg:h-[560px] font-roboto">
        <div className="my-6 md:my-10 z-20 relative">
          <section className="flex gap-x-12 md:gap-x-36">
            <Link to="/">
              <img
                className="w-[110px]  h-auto  lg:w-[12.5rem]"
                src={extremadealsLogo}
                alt="logo"
              />
            </Link>
            <div className="flex gap-4 items-end">
              <a href="https://www.facebook.com/extremadeals/" target="blank">
                <svg
                  className="w-[30px] md:w-[35px] h-[35px]  hover:scale-90 transition-transform duration-300"
                  width="45"
                  height="45"
                  viewBox="0 0 250 251"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100.967 115.853L100.976 152.21C100.976 152.461 101.075 152.702 101.251 152.879C101.427 153.057 101.665 153.157 101.914 153.157L133.033 153.147C133.18 153.147 133.32 153.206 133.423 153.309C133.527 153.412 133.585 153.553 133.585 153.699V249.567C133.585 249.686 133.536 249.8 133.45 249.885C133.364 249.969 133.247 250.017 133.125 250.017C107.564 250.035 81.945 250.026 56.2675 249.989C47.6921 249.983 41.6004 249.579 37.9926 248.776C14.7836 243.649 -0.0458337 223.004 0.000106432 199.492C0.098112 151.788 0.131802 104.083 0.101175 56.3792C0.101175 47.7547 0.484009 41.66 1.24968 38.0951C6.22958 14.9413 26.7005 0.0474722 50.1943 0.0382842C98.2966 0.00765746 146.396 -0.00459407 194.492 0.00153127C202.847 0.00153127 208.902 0.45481 212.657 1.36136C231.097 5.81755 245.596 21.2167 249.051 39.6846C249.675 43.0413 249.991 49.1482 249.997 58.0055C250.003 106.163 250 154.324 249.988 202.487C249.988 224.005 233.642 243.126 213.236 248.418C209.469 249.392 204.247 249.916 197.57 249.989C189.448 250.087 181.326 250.084 173.203 249.98C172.922 249.98 172.781 249.836 172.781 249.548L172.762 153.745C172.762 153.586 172.824 153.434 172.935 153.322C173.045 153.21 173.195 153.147 173.35 153.147H204.774C204.915 153.148 205.052 153.096 205.159 153.002C205.266 152.907 205.334 152.776 205.352 152.633L210.084 115.899C210.133 115.55 209.98 115.375 209.625 115.375L173.305 115.366C172.992 115.366 172.833 115.21 172.827 114.898C172.692 107.027 172.686 99.1801 172.808 91.358C172.882 86.5251 173.424 83.0153 174.435 80.8286C176.817 75.6343 181.427 72.9605 188.263 72.8074C195.821 72.642 203.401 72.6022 211.003 72.688C211.309 72.6941 211.462 72.541 211.462 72.2286L211.481 39.1792C211.481 39.0805 211.445 38.9852 211.378 38.9121C211.312 38.839 211.221 38.7933 211.122 38.7842C201.585 37.8592 192.045 37.4182 182.502 37.4611C151.4 37.6081 133.741 56.9397 133.686 87.398C133.667 96.5737 133.618 105.75 133.539 114.925C133.539 115.213 133.395 115.357 133.107 115.357L101.445 115.375C101.127 115.375 100.967 115.535 100.967 115.853Z"
                    fill="url(#paint0_linear_37_371)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_37_371"
                      x1="125"
                      y1="0"
                      x2="125"
                      y2="250.06"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE617" />
                      <stop offset="1" stopColor="#FDC814" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a href="https://www.instagram.com/extrema_deals/" target="blank">
                <svg
                  className="w-[30px] md:w-[35px] h-[35px] hover:scale-90 transition-transform duration-300"
                  width="45"
                  height="45"
                  viewBox="0 0 250 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M250 194.68C250 209.22 244.224 223.164 233.943 233.446C223.661 243.727 209.717 249.503 195.177 249.503H54.8232C40.2832 249.503 26.3387 243.727 16.0573 233.446C5.77599 223.164 0 209.22 0 194.68V54.8232C0 40.2832 5.77599 26.3387 16.0573 16.0574C26.3387 5.77601 40.2832 0 54.8232 0H195.177C209.717 0 223.661 5.77601 233.943 16.0574C244.224 26.3387 250 40.2832 250 54.8232V194.68ZM216.123 84.8699C216.148 70.7327 210.556 57.1647 200.577 47.1508C190.597 37.1368 177.049 31.4972 162.912 31.4725L87.4518 31.3408C80.4518 31.3285 73.5179 32.6952 67.046 35.3627C60.5741 38.0302 54.6911 41.9463 49.7327 46.8875C44.7742 51.8286 40.8376 57.698 38.1475 64.1605C35.4574 70.623 34.0666 77.5521 34.0544 84.5522L33.9135 165.333C33.8888 179.47 39.4811 193.038 49.4601 203.052C59.4392 213.066 72.9876 218.705 87.1248 218.73L162.585 218.862C169.585 218.874 176.519 217.507 182.991 214.84C189.463 212.172 195.346 208.256 200.304 203.315C205.262 198.374 209.199 192.504 211.889 186.042C214.579 179.579 215.97 172.65 215.982 165.65L216.123 84.8699ZM201.997 85.0699L202.053 165.013C202.055 170.211 201.032 175.36 199.042 180.162C197.053 184.965 194.135 189.329 190.457 193.002C186.779 196.676 182.412 199.589 177.607 201.573C172.802 203.557 167.652 204.574 162.454 204.565L87.4907 204.455C77.0135 204.44 66.9706 200.267 59.5682 192.853C52.1658 185.438 48.0092 175.389 48.0117 164.912L48.0301 85.0791C48.0301 79.8866 49.053 74.745 51.0403 69.9479C53.0277 65.1508 55.9406 60.7921 59.6127 57.1209C63.2847 53.4497 67.644 50.5378 72.4416 48.5516C77.2392 46.5654 82.381 45.5437 87.5735 45.5449L162.481 45.5633C172.959 45.5682 183.005 49.7317 190.415 57.1393C197.824 64.547 201.99 74.5927 201.997 85.0699ZM187.739 73.7113C187.739 70.5719 186.492 67.561 184.272 65.3411C182.052 63.1212 179.041 61.874 175.902 61.874C172.762 61.874 169.752 63.1212 167.532 65.3411C165.312 67.561 164.065 70.5719 164.065 73.7113C164.065 75.2658 164.371 76.8051 164.966 78.2412C165.561 79.6774 166.433 80.9823 167.532 82.0815C168.631 83.1807 169.936 84.0526 171.372 84.6475C172.808 85.2424 174.347 85.5486 175.902 85.5486C177.456 85.5486 178.996 85.2424 180.432 84.6475C181.868 84.0526 183.173 83.1807 184.272 82.0815C185.371 80.9823 186.243 79.6774 186.838 78.2412C187.433 76.8051 187.739 75.2658 187.739 73.7113ZM140.731 77.1354C106.103 66.8906 72.3766 92.5257 75.3405 128.912C77.2919 152.798 95.8762 171.861 119.716 174.383C150.202 177.605 174.641 153.857 174.871 123.767C175.046 100.736 162.251 83.4959 140.731 77.1354ZM98.9966 144.394C107.833 156.287 124.834 161.193 138.512 154.4C150.896 148.245 157.281 138.024 157.667 123.739C158.079 108.778 151.166 98.8492 136.929 93.9523C128.461 91.0436 120.382 91.1694 112.693 94.3297C92.857 102.476 86.2297 127.2 98.9966 144.394Z"
                    fill="url(#paint0_linear_38_28)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_38_28"
                      x1="125"
                      y1="0"
                      x2="125"
                      y2="249.503"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE617" />
                      <stop offset="1" stopColor="#FDC814" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
          </section>
          <section className="grid md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-y-10 mt-7 md:mt-12">
            <div className="mt-1">
              <h3 className="font-bold hidden md:block mb-6">ONS BEDRIJF</h3>
              <ul className="text-sm lg:text-base  space-y-5 md:space-y-6">
                <li>
                  <a
                    href="https://maps.app.goo.gl/SrXzzXR5AWf5gS4B7"
                    className="flex items-center gap-2 hover:text-primary-yellow"
                    target="blank"
                  >
                    <img
                      className="w-5 lg:w-[1.5625rem] h-auto"
                      src={locationIcon}
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
                    className="flex items-center gap-2 hover:text-primary-yellow"
                  >
                    <img
                      className="w-5 lg:w-[1.5625rem] h-auto"
                      src={whatsappIcon}
                      alt="icon"
                    />
                    <p>John: +32 468 12 65 99</p>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+32 477 46 25 38"
                    className="flex items-center gap-2 hover:text-primary-yellow"
                  >
                    <img
                      className="w-5 lg:w-[1.5625rem] h-auto"
                      src={whatsappIcon}
                      alt="icon"
                    />
                    <p>Peter: +32 477 46 25 38</p>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@extremadeals.com"
                    className="flex items-center gap-2 hover:text-primary-yellow"
                  >
                    <img
                      className="w-5 lg:w-[1.5625rem] h-auto"
                      src={mailIcon}
                      alt="icon"
                    />
                    <p>info@extremadeals.com</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h3 className="font-bold mb-6">MENU</h3>
              <ul className="text-base space-y-6">
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "#fdc814" } : null
                    }
                    className="hover:text-primary-yellow"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "#fdc814" } : null
                    }
                    className="hover:text-primary-yellow"
                    to="/deals"
                  >
                    Deals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "#fdc814" } : null
                    }
                    className="hover:text-primary-yellow"
                    to="/diensten"
                  >
                    Diensten
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "#fdc814" } : null
                    }
                    className="hover:text-primary-yellow"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h3 className="font-bold mb-6">EXTRA</h3>
              <ul className="text-base space-y-6">
                <li>
                  <button
                    className="hover:text-primary-yellow active:text-primary-yellow"
                    onClick={() => handleClick("OverOns")}
                  >
                    Over ons
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-primary-yellow active:text-primary-yellow"
                    onClick={() => handleClick("FAQ")}
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
            <div className="my-8 md:mt-0">
              <h3 className="font-bold hidden md:block mb-6">JURIDISCH</h3>
              <ul className="text-sm md:text-base space-y-3 md:space-y-6">
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "#fdc814" } : null
                    }
                    className="hover:text-primary-yellow"
                    to="/privacybeleid"
                  >
                    Privacybeleid
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "#fdc814" } : null
                    }
                    className="hover:text-primary-yellow "
                    to="/cookiebeleid"
                  >
                    Cookiebeleid
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? { color: "#fdc814" } : null
                    }
                    className="hover:text-primary-yellow"
                    to="/algemene-voorwaarden"
                  >
                    Algemene Voorwaarden
                  </NavLink>
                </li>
              </ul>
            </div>
          </section>
          <section className="flex flex-col lg:items-center text-sm md:text-base  md:mt-14">
            <p>Copyright © 2023 - 2023. </p>
            <p>
              Content by
              <a href="https://www.extremadeals.com/." target="blank">
                <span className="text-primary-yellow"> Extrema Deals.</span> Web
                production by
              </a>
              <a href="https://www.vastly.be/" target="blank">
                <span className="text-primary-yellow"> Vastly.</span>
              </a>
            </p>
            <p>All rights reserved.</p>
          </section>
        </div>
        <div className="hidden">
          <svg
            className="absolute w-[280px]  h-[480px] top-0 -right-14 sm:-right-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 224 399"
            fill="none"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.0817 399H0L160.74 0H215.821L55.0817 399ZM69.9916 398.709H125.097L128.541 390.092H73.5461L69.9916 398.709ZM83.4984 365.963L91.9954 345.361H146.421L138.186 365.963H83.4984ZM156.066 321.232L164.971 298.955H111.136L101.948 321.232H156.066ZM183.521 252.548L174.616 274.825H121.088L130.277 252.548H183.521ZM193.166 228.418L202.071 206.141H149.417L140.229 228.418H193.166ZM168.558 159.734H220.621L211.716 182.011H159.369L168.558 159.734ZM178.51 135.604H224V113.327H187.698L178.51 135.604ZM224 89.1978V66.9203H206.839L197.651 89.1978H224ZM224 25.3128V42.7907H216.791L224 25.3128Z"
              fill="#FDC814"
            />
          </svg>
        </div>
      </div>
      <img
        className="absolute top-0 right-0 object-cover md:object-fit z-10 h-full"
        src={stripeCautionDecoration}
        alt="stripe-decoration"
      />
    </footer>
  );
}
