import React, { useRef } from "react";
import ContactForm from "../../../components/ContactForm";
import ExtremaDeal from "../../../components/ExtremaDeal";
import FollowUs from "../../../components/FollowUs";
import OpeningHoursTable from "../../../components/OpeningHoursTable";
export default function MuliScreenForMobile() {
  const itemsContainerRef = useRef(null);

  const handlePageChnager = ({ currentTarget }) => {
    const thisElelmentText = currentTarget.innerText;
    const thisParentChildren = currentTarget.parentElement.children;
    const itemsContainer = itemsContainerRef.current.children;

    // button active color add and remove
    for (let children of thisParentChildren) {
      children.classList.remove("text-primary-yellow");
      children.classList.remove("bg-primary-black");
    }
    currentTarget.classList.add("text-primary-yellow");
    currentTarget.classList.add("bg-primary-black");

    //hidden specifc container will show
    for (let item of itemsContainer) {
      item.classList.add("hidden");
      if (item.getAttribute("data-target") === thisElelmentText) {
        item.classList.remove("hidden");
      }
    }
  };
  return (
    <section className="text-primary-white bg-secondary-black md:hidden">
      <ul ref={itemsContainerRef} className="min-h-[30rem]">
        <li data-target="STUUR ONS" className="hidden">
          <ContactForm />
        </li>
        <li data-target="CONTACT">
          <ExtremaDeal />
        </li>
        <li data-target="VOLG ONS" className="hidden">
          <FollowUs />
        </li>
        <li data-target="OPENINGSUREN" className="hidden">
          <OpeningHoursTable />
        </li>
      </ul>
      <ul
        style={{ boxShadow: "2px 0px 4px #ddd" }}
        className="flex justify-center text-[0.9rem] text-center bg-secondary-black  mt-4"
      >
        <li
          onClick={handlePageChnager}
          className="bg-primary-black text-primary-yellow py-5 px-[3px] w-full"
        >
          <button>CONTACT</button>
        </li>
        <li className="py-5 px-[3px] w-full" onClick={handlePageChnager}>
          <button>OPENINGSUREN</button>
        </li>
        <li className="py-5 px-[3px] w-full" onClick={handlePageChnager}>
          <button>VOLG ONS</button>
        </li>
        <li className="py-5 px-[3px] w-full" onClick={handlePageChnager}>
          <button>STUUR ONS</button>
        </li>
      </ul>
    </section>
  );
}
