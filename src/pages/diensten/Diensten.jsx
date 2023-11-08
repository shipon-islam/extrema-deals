import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DienstenFeature from "./sections/DienstenFeature";
import DienstenFeaturesSmDevices from "./sections/DienstenFeaturesSmDevices";
import Hero from "./sections/Hero";

export default function Diensten() {
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
    <main>
      <Hero />
      <DienstenFeaturesSmDevices />
      <DienstenFeature />
    </main>
  );
}
