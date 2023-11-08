import ContactForm from "../../../components/ContactForm";

export default function SendUs() {
  return (
    <section className="bg-primary-yellow  hidden md:block relative">
      <div
        style={{ borderRadius: "0 0 100px 0px " }}
        className="bg-primary-black text-white md:w-[62.5%] h-[12rem]"
      ></div>
      <div className="container absolute top-0 left-1/2 translate-x-[-50%]">
        <h1 className="text-2xl font-bold text-primary-yellow pt-12">
          CONTACTEER ONS
        </h1>
        <p className="mt-4">
          Vragen of opmerkingen? Vul onderstaand formulier in.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
