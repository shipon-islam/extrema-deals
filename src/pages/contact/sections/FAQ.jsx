import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FAQ_Api } from "../../../constant";

export default function FAQ() {
  const handleCollappeAns = ({ currentTarget }) => {
    const collapesAbleItem = currentTarget.parentElement.nextElementSibling;
    const arrowDownBtn = currentTarget.firstChild;
    const arrowUpBtn = currentTarget.lastChild;

    collapesAbleItem.classList.toggle("hidden");
    arrowDownBtn.classList.toggle("hidden");
    arrowUpBtn.classList.toggle("hidden");
  };
  return (
    <section id="FAQ" className="container">
      <div className="py-12 md:w-[750px] mx-auto px-2 md:px-0">
        <h1 className="text-center  font-bold text-2xl pb-8 text-primary-yellow ">
          FAQ
        </h1>
        <ul className="border-t border-primary-yellow">
          {FAQ_Api.map((faq) => (
            <li key={faq.id} className="border-b border-primary-yellow py-2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl text-primary-yellow font-bold w-10 inline-block">
                    {faq.id}.
                  </span>
                  <span className="md:pl-2 font-bold">{faq.ques}</span>
                </div>

                <button onClick={handleCollappeAns}>
                  <IoIosArrowUp className="hidden text-2xl text-primary-yellow" />
                  <IoIosArrowDown className="text-2xl text-primary-yellow" />
                </button>
              </div>
              <p className="hidden md:pl-12 mt-2">{faq.ans}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
