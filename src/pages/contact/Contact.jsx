import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "./sections/AboutUs";
import FAQ from "./sections/FAQ";
import GoggleMap from "./sections/GoggleMap";
import MuliScreenForMobile from "./sections/MuliScreenForMobile";
import SendUs from "./sections/SendUs";
import SocialInfo from "./sections/SocialInfo";

export default function Contact() {
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      const id = location.state.id;
      const section = document.getElementById(id);
      console.log(id);
      console.log(section);
      if (section) {
        window.scrollTo({
          behavior: "smooth",
          top: section.offsetTop,
        });
      }
    }
  }, [location]);
  return (
    <main className="bg-secondary-black text-primary-white">
      <GoggleMap />
      <MuliScreenForMobile />
      <SocialInfo />
      <SendUs />
      <AboutUs />
      <FAQ />
    </main>
  );
}
