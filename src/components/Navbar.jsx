import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import extremadealsLogo from "../assets/logos/extremadeals-logo-yellow.svg";

export default function Navbar() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const btnRef = useRef(null);

  const handleBtn = () => {
    btnRef.current.classList.toggle("active");
    setIsShowMobileMenu((prev) => !prev);
  };

  return (
    <header
      className={`${
        isShowMobileMenu
          ? "bg-primary-yellow fixed lg:static left-0 z-[100] w-full"
          : "bg-navbar-gradient"
      } lg:bg-navbar-gradient h-20 lg:h-24 transition-colors duration-300`}
    >
      <nav className="max-w-[1536px] mx-auto px-8 lg:px-12 flex items-center justify-between h-full">
        <Link to="/" className="h-2/5 md:h-3/5 cursor-pointer">
          <img
            src={extremadealsLogo}
            alt="ExtremaDealsLogo"
            className="w-[90px] md:h-full md:w-auto"
          />
        </Link>
        {/* desktop version */}
        <div>
          <button ref={btnRef} onClick={handleBtn} className="hamburger-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="hidden lg:flex gap-x-12">
            <Link onClick={handleBtn} to="/" className="navlink">
              HOME
            </Link>
            <Link onClick={handleBtn} to="/deals" className="navlink">
              DEALS
            </Link>
            <Link onClick={handleBtn} to="/diensten" className="navlink">
              DIENSTEN
            </Link>
            <Link onClick={handleBtn} to="/contact" className="navlink">
              CONTACT
            </Link>
          </div>
          {/* mobile version */}
          <div
            className={`${
              isShowMobileMenu ? "translate-x-0" : "translate-x-[100%]"
            } flex lg:hidden flex-col items-center gap-y-12 pt-10 fixed bg-primary-yellow h-[90vh] w-full left-0 top-[80px] transition-transform duration-500 ease-in-out z-[100]`}
          >
            <Link onClick={handleBtn} to="/" className="navlink">
              HOME
            </Link>
            <Link onClick={handleBtn} to="/deals" className="navlink">
              DEALS
            </Link>
            <Link onClick={handleBtn} to="/diensten" className="navlink">
              DIENSTEN
            </Link>
            <Link onClick={handleBtn} to="/contact" className="navlink">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
