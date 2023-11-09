import { ctaDetailsApi } from "../../constant";
import CTABar from "./sections/CTABar";
import CTABarSmDevices from "./sections/CTABarSmDevices";
import Hero from "./sections/Hero";
import ProductSlider from "./sections/ProductSlider";
import Subscribe from "./sections/Subscribe";

export default function Home() {
  return (
    <main>
      <Hero />
      <CTABarSmDevices />
      <CTABar ctaDetails={ctaDetailsApi} />
      <ProductSlider />
      <Subscribe />
    </main>
  );
}
