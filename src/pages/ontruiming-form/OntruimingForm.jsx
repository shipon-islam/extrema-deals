import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { GrAttachment } from "react-icons/gr";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ontruimingSchema } from "../../yupSchema";

export default function OntruimingForm() {
  const fileRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(ontruimingSchema),
  });

  const onSubmit = (data) => {
    if (data.isAgreeWithPolicy) {
      toast.success("Successfuly send", { autoClose: 1000 });
    }
  };
  const handleFile = () => {
    if (isValid) {
      fileRef.current.click();
    } else {
      toast.error("Ensure the fields before picture upload", {
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <main className="bg-primary-black">
      <section className="container ">
        <div className="lg:w-[800px] mx-auto py-16">
          <h1 className="font-bold text-4xl text-primary-yellow mb-6">
            ONTRUIMING
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="grid md:grid-cols-2 gap-x-8">
              <div>
                <input
                  className="input-class"
                  type="text"
                  placeholder="Voornaam"
                  {...register("Voornaam")}
                />
                <p className="text-red-500 ml-2.5 text-sm">
                  {errors?.Voornaam?.message}
                </p>
              </div>
              <div>
                <input
                  className="input-class"
                  type="text"
                  placeholder="Achternaam"
                  {...register("Achternaam")}
                />
                <p className="text-red-500 ml-2.5 text-sm">
                  {errors?.Achternaam?.message}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-[2fr_1fr] gap-x-8">
              <div>
                <input
                  className="input-class"
                  type="email"
                  placeholder="E-mailadres"
                  {...register("Email")}
                />
                <p className="text-red-500 ml-2.5 text-sm">
                  {errors?.Email?.message}
                </p>
              </div>
              <div>
                <input
                  className="input-class"
                  type="text"
                  placeholder="Telefoonnummer"
                  {...register("Telefoonnummer")}
                />
                <p className="text-red-500 ml-2.5 text-sm">
                  {errors?.Telefoonnummer?.message}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-x-8">
              <div>
                <input
                  className="input-class text-gray-400"
                  type="text"
                  defaultValue="Ontruiming"
                  readOnly
                  placeholder="Ontruiming"
                  {...register("Ontruiming")}
                />
                <p className="text-red-500 ml-2.5 text-sm">
                  {errors?.Ontruiming?.message}
                </p>
              </div>
              <div>
                <div className="input-class bg-white flex justify-between items-center px-4">
                  <span className="text-gray-400">Foto's uploaden</span>
                  <span onClick={handleFile} className="cursor-pointer">
                    <GrAttachment />
                  </span>
                </div>
                <input
                  ref={fileRef}
                  className="input-class hidden"
                  type="file"
                  placeholder="file"
                />
              </div>
            </div>
            <div>
              <textarea
                className="input-class h-40 md:h-32 resize-none text-sm md:text-base"
                placeholder="Geef meer details van het gebouw dat ontruimd moet worden, zoals het adres, de uiterste voltooiingsdatum, de huidige staat en grootte van het pand, de inboedel, en eventuele specifieke vereisten."
                {...register("Bericht")}
              ></textarea>
              <p className="text-red-500 ml-2.5 text-sm">
                {errors?.Bericht?.message}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-x-14 gap-y-4 mt-5">
              <div className="text-primary-white flex justify-start gap-x-2 md:order-2">
                <input
                  className="accent:bg-primary-yellow block accent-primary-yellow relative mt-1 h-fit"
                  type="checkbox"
                  {...register("isAgreeWithPolicy")}
                />
                <p className="text-sm md:text-base">
                  Ja, ik ga akkoord met het
                  <Link to="/privacybeleid" className="text-primary-yellow">
                    <span> Privacybeleid</span>
                  </Link>
                  ,
                  <Link to="/cookiebeleid" className="text-primary-yellow">
                    <span> Cookiebeleid </span>
                  </Link>
                  en de
                  <Link
                    to="/algemene-voorwaarden"
                    className="text-primary-yellow"
                    href="#"
                  >
                    <span> Algemene Voorwaarden </span>
                  </Link>
                  .
                </p>
              </div>
              <button className="bg-gradient-to-b from-secondary-yellow to-primary-yellow inline-block text-center whitespace-nowrap cursor-pointer font-primary text-primary-black font-extrabold tracking-widest uppercase rounded-md border-0 px-4 lg:px-16 py-3 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200 md:order-1 h-fit md:w-fit">
                VERZENDEN
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
