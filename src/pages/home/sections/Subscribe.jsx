import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { newsleterSchema } from "../../../yupSchema";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Subscribe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newsleterSchema),
  });

  const onSubmit = (data) => {
    toast.success("Successfuly send", { autoClose: 1000 });
  };
  return (
    <div className="font-raleway md:font-roboto py-14 bg-white md:py-20 container">
      <div className="text-center mb-6">
        <h3 className="font-bold md:font-normal text-[1.1rem] sm:text-xl md:text-[1.7rem] text-secondary-black md:leading-9">
          De beste deals, één klik verwijderd
          <br />
          <span className="text-[11px] sm:text-xl md:text-[1.7rem]">
            Altijd op de hoogte, altijd voordeel.
          </span>
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 w-[90%] md:w-[37.5rem] mx-auto"
      >
        <div className="flex border-2 border-primary-yellow rounded-md  overflow-hidden">
          <input
            placeholder="E-mailadres"
            className="focus:outline-none h-full w-full py-3 pl-3 font-semibold text-[13px] sm:text-base "
            type="text"
            {...register("Email")}
          />

          <button className="bg-gradient-to-b from-secondary-yellow to-primary-yellow hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200 block px-3 md:px-9 py-2 md:py-3 whitespace-nowrap font-bold text-[11px] sm:text-sm">
            SCHRIJF JE IN
          </button>
        </div>
        <p className="text-red-500 ml-2.5 text-sm">{errors?.Email?.message}</p>
        <div className="flex items-start gap-x-2 sm:gap-x-4 justify-center  mt-2">
          <input
            className="text-primary-white relative top-[3px] accent-primary-yellow"
            type="checkbox"
          />
          <p className="text-[9px] sm:text-sm">
            Ja, ik ga akkoord met het
            <Link className="font-medium" to="/Privacybeleid">
              <span className="underline ml-1">Privacybeleid</span>
            </Link>
            ,
            <Link className="font-medium mx-1" to="/cookiebeleid">
              <span className="underline">Cookiebeleid</span>
            </Link>
            en de
            <Link className="font-medium ml-1" to="/algemene-voorwaarden">
              <span className="underline">Algemene Voorwaarden</span>
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
