import ExtremaDeal from "../../../components/ExtremaDeal";
import FollowUs from "../../../components/FollowUs";
import OpeningHoursTable from "../../../components/OpeningHoursTable";

export default function SocialInfo() {
  return (
    <section className="hidden md:block bg-gradient-to-l to-primary-yellow from-secondary-yellow ">
      <div className="grid grid-cols-2 min-h-[450px] relative">
        <div
          style={{
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 0 50%)",
          }}
          className="bg-secondary-black w-1/2 absolute right-0 top-0 h-full"
        >
          444
        </div>
        <div className="absolute top-0 right-0 w-full h-full py-10">
          <div className="container flex justify-between">
            <div className="grid grid-cols-[3fr_2fr] justify-between lg:grid-cols-2 gap-x-4">
              <ExtremaDeal />
              <div className="lg:justify-self-end">
                <FollowUs />
              </div>
            </div>
            <div className="">
              <OpeningHoursTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
