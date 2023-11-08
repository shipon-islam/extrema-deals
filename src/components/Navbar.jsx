import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import extremadealsLogo from "../assets/logos/extremadeals-logo-yellow.svg";

export default function Navbar() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const btnRef = useRef(null);

  const handleBtn = () => {
    btnRef.current.classList.toggle("active");
    setIsShowMobileMenu((prev) => !prev);
  };

  return (
    <header>
      <nav
        className={`${
          isShowMobileMenu
            ? "bg-primary-yellow fixed lg:static left-0 w-full z-40"
            : "bg-navbar-gradient"
        } h-20 lg:h-24 lg:bg-navbar-gradient transition-colors duration-500`}
      >
        <div className="container flex items-center justify-between h-full">
          <Link to="/" className="h-2/5 md:h-3/5 cursor-pointer">
            <img
              src={extremadealsLogo}
              alt="ExtremaDealsLogo"
              className={`${
                isShowMobileMenu ? "hidden lg:block" : "block"
              } w-[90px] md:h-full md:w-auto`}
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
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#fffdfa" } : null
                }
                onClick={handleBtn}
                to="/"
                className="navlink"
              >
                HOME
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#fffdfa" } : null
                }
                onClick={handleBtn}
                to="/deals"
                className="navlink"
              >
                DEALS
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#fffdfa" } : null
                }
                onClick={handleBtn}
                to="/diensten"
                className="navlink"
              >
                DIENSTEN
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#fffdfa" } : null
                }
                onClick={handleBtn}
                to="/contact"
                className="navlink"
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile version */}
      <div
        className={`${
          isShowMobileMenu ? "translate-x-0" : "translate-x-[100%]"
        } flex lg:hidden flex-col justify-center items-center gap-y-12 pt-10 fixed bg-primary-yellow h-screen w-full left-0 top-0 transition-transform duration-500 ease-in-out z-30`}
      >
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fffdfa" } : null)}
          onClick={handleBtn}
          to="/"
          className="navlink"
        >
          HOME
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fffdfa" } : null)}
          onClick={handleBtn}
          to="/deals"
          className="navlink"
        >
          DEALS
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fffdfa" } : null)}
          onClick={handleBtn}
          to="/diensten"
          className="navlink"
        >
          DIENSTEN
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fffdfa" } : null)}
          onClick={handleBtn}
          to="/contact"
          className="navlink"
        >
          CONTACT
        </NavLink>
      </div>
    </header>
  );
}
