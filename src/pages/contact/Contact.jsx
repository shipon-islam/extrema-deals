import React from "react";
import AboutUs from "./sections/AboutUs";
import FAQ from "./sections/FAQ";
import GoggleMap from "./sections/GoggleMap";
import MuliScreenForMobile from "./sections/MuliScreenForMobile";
import SendUs from "./sections/SendUs";
import SocialInfo from "./sections/SocialInfo";

export default function Contact() {
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
