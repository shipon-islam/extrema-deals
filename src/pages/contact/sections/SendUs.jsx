import React from "react";
import ContactForm from "../../../components/ContactForm";

export default function SendUs() {
  return (
    <section className="bg-primary-yellow  hidden md:block">
      <div
        style={{ borderRadius: "0 0 100px 0px " }}
        className="bg-primary-black text-white md:w-[61%] min-h-[12rem]"
      >
        <div className="w-fit mx-auto">
          <h1 className="text-2xl font-bold text-primary-yellow pt-12">
            CONTACTEER ONS
          </h1>
          <p className="mt-4">
            Vragen of opmerkingen? Vul onderstaand formulier in.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
