import React from "react";
import DienstenFeature from "./sections/DienstenFeature";
import DienstenFeaturesSmDevices from "./sections/DienstenFeaturesSmDevices";
import Hero from "./sections/Hero";

export default function Diensten() {
  return (
    <main>
      <Hero />
      <DienstenFeaturesSmDevices />
      <DienstenFeature />
    </main>
  );
}
