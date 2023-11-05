import React from "react";
import ExtremaDeal from "../../../components/ExtremaDeal";
import FollowUs from "../../../components/FollowUs";
import OpeningHoursTable from "../../../components/OpeningHoursTable";

export default function SocialInfo() {
  return (
    <section className="hidden md:block bg-gradient-to-l to-primary-yellow from-secondary-yellow ">
      <div className="grid grid-cols-2 ">
        <div className="grid grid-cols-2 gap-x-4 xl:gap-x-20 py-10 w-fit mx-auto xl:ml-auto md:ml-4 lg:ml-0">
          <ExtremaDeal />
          <FollowUs />
        </div>
        <div
          style={{
            clipPath: "polygon(25% 1%, 100% 0, 100% 100%, 25% 100%, 0 50%)",
          }}
          className="bg-primary-black py-10"
        >
          <div className="ml-36 xl:ml-60">
            <OpeningHoursTable />
          </div>
        </div>
      </div>
    </section>
  );
}
