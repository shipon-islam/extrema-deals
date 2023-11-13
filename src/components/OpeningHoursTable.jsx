export default function OpeningHoursTable() {
  return (
    <div className="pl-10 pt-8 md:pl-0 md:pt-0">
      <h4 className="text-secondary-yellow text-lg font-bold uppercase tracking-widest whitespace-nowrap">
        OPENINGSUREN
      </h4>
      <p className="font-medium">(enkel op afspraak)</p>
      <table className="border-separate border-spacing-y-5">
        <tbody>
          <tr>
            <td className="font-roboto text-secondary-yellow text-base font-medium tracking-widest leading-6 pr-6 lg:pr-20">
              Maandag:
            </td>
            <td className="font-roboto text-primary-white text-base font-medium tracking-widest leading-6">
              Gesloten
            </td>
          </tr>
          <tr>
            <td className="font-roboto text-secondary-yellow text-base font-medium tracking-widest leading-6 pr-6 lg:pr-20">
              Dinsdag:
            </td>
            <td className="font-roboto text-primary-white text-base font-medium tracking-widest leading-6">
              10:00 - 18:00
            </td>
          </tr>
          <tr>
            <td className="font-roboto text-secondary-yellow text-base font-medium tracking-widest leading-6 pr-6 lg:pr-20">
              Woensdag:
            </td>
            <td className="font-roboto text-primary-white text-base font-medium tracking-widest leading-6">
              10:00 - 18:00
            </td>
          </tr>
          <tr>
            <td className="font-roboto text-secondary-yellow text-base font-medium tracking-widest leading-6 pr-6 lg:pr-20">
              Donderdag:
            </td>
            <td className="font-roboto text-primary-white text-base font-medium tracking-widest leading-6">
              10:00 - 18:00
            </td>
          </tr>
          <tr>
            <td className="font-roboto text-secondary-yellow text-base font-medium tracking-widest leading-6 pr-6 lg:pr-20">
              Vrijdag:
            </td>
            <td className="font-roboto text-primary-white text-base font-medium tracking-widest leading-6">
              10:00 - 18:00
            </td>
          </tr>
          <tr>
            <td className="font-roboto text-secondary-yellow text-base font-medium tracking-widest leading-6 pr-6 lg:pr-20">
              Zaterdag:
            </td>
            <td className="font-roboto text-primary-white text-base font-medium tracking-widest leading-6">
              12:00 - 20:00
            </td>
          </tr>
          <tr>
            <td className="font-roboto text-secondary-yellow text-base font-medium tracking-widest leading-6 pr-6 lg:pr-20">
              Zondag:
            </td>
            <td className="font-roboto text-primary-white text-base font-medium tracking-widest leading-6">
              Gesloten
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
