import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { contactSchema } from "../yupSchema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    toast.success("Successfuly send", { autoClose: 1000 });
  };

  return (
    <div>
      <h1 className="font-bold text-xl mt-10 mb-6 ml-8  text-primary-yellow md:hidden">
        CONTACTEER ONS
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="w-[90%] lg:w-[800px] mx-auto md:my-7">
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
              <select
                className="input-class text-gray-600"
                placeholder="Categorie"
                {...register("Categorie")}
              >
                <option>Categorie</option>
                <option value="Deals">Deals</option>
                <option value="Opkopen">Dienst: Opkopen</option>
                <option value="Ontruiming">Dienst: Ontruiming</option>
                <option value="Algemeen">Algemeen</option>
              </select>
              <p className="text-red-500 ml-2.5 text-sm">
                {errors?.Categorie?.message}
              </p>
            </div>
            <div>
              <input
                className="input-class"
                type="text"
                placeholder="Onderwerp"
                {...register("Onderwerp")}
              />
              <p className="text-red-500 ml-2.5 text-sm">
                {errors?.Onderwerp?.message}
              </p>
            </div>
          </div>
          <div>
            <textarea
              className="input-class h-24 md:h-32 resize-none"
              placeholder="Bericht"
              {...register("Bericht")}
            ></textarea>
            <p className="text-red-500 ml-2.5 text-sm">
              {errors?.Bericht?.message}
            </p>
          </div>
        </div>
        <div className="md:bg-secondary-black text-primary-white md:py-3">
          <div className="grid md:grid-cols-2 w-[90%] lg:w-[800px] mx-auto items-center gap-x-8">
            <div className="md:order-2 space-y-5 text-sm my-4">
              <div className="flex items-start gap-x-2">
                <input
                  className="accent:bg-primary-yellow relative top-[3px] accent-primary-yellow"
                  type="checkbox"
                  {...register("isAgreeWithPolicy")}
                />
                <p>
                  Ja, ik ga akkoord met het
                  <Link to="/privacybeleid" className="text-primary-yellow">
                    <span> Privacybeleid</span>
                  </Link>
                  ,
                  <Link
                    to="/cookiebeleid"
                    className="text-primary-yellow"
                    href="#"
                  >
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
              <div className="flex items-start gap-x-2">
                <input
                  className="accent:bg-primary-yellow relative top-[3px] accent-primary-yellow"
                  type="checkbox"
                  {...register("wantReceiveUpdates")}
                />
                <p>
                  Ja, ik wil updates van ExtremaDeals ontvangen in mijn mailbox.
                </p>
              </div>
            </div>
            <button className="bg-gradient-to-b from-secondary-yellow to-primary-yellow inline-block text-center whitespace-nowrap cursor-pointer font-primary text-primary-black font-extrabold tracking-widest uppercase rounded-md border-0 px-4 py-3 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200 md:order-1 h-fit">
              VERZENDEN
            </button>
          </div>
        </div>
        <hr className="border-primary-yellow hidden md:block" />
      </form>
    </div>
  );
}
