import React, { useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const FAQ_Api = [
  {
    id: 1,
    ques: "Wat verkoopt Extrema Deals?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
  {
    id: 2,
    ques: "Hoe kan ik iets bij jullie kopen?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
  {
    id: 3,
    ques: "Waarom kan ik geen aankopen via e-mail doen?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
  {
    id: 4,
    ques: "Bieden jullie een leveringsservice aan? ",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
  {
    id: 5,
    ques: "Wat zijn de geaccepteerde betalingsmethoden?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
  {
    id: 6,
    ques: "Is het mogelijk een product te reserveren?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
  {
    id: 7,
    ques: "Hoe kan ik mijn spullen aan Extrema Deals verkopen?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
  {
    id: 8,
    ques: "Hoe bepalen jullie de prijzen van producten",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
  {
    id: 9,
    ques: "Hoe kan ik Extrema Deals inschakelen voor een ontruiming?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
  {
    id: 10,
    ques: "Hoe bepalen jullie de kostprijs van een ontruiming?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum ipsum nostrum minus magnam sint?",
  },
];

export default function FAQ() {
  const faqRef = useRef(null);
  const handleCollappeAns = ({ currentTarget }) => {
    const collapesAbleItem = currentTarget.parentElement.nextElementSibling;
    const faqContainer = faqRef.current.children;
    const arrowDownBtn = currentTarget.firstChild;
    const arrowUpBtn = currentTarget.lastChild;
    for (let singleFaq of faqContainer) {
      singleFaq.lastChild.classList.add("hidden");
      singleFaq.firstChild.lastChild.firstChild.classList.add("hidden");
      singleFaq.firstChild.lastChild.lastChild.classList.remove("hidden");
    }

    collapesAbleItem.classList.remove("hidden");
    arrowDownBtn.classList.remove("hidden");
    arrowUpBtn.classList.add("hidden");
  };
  return (
    <section className="py-12 px-5 md:w-[750px] mx-auto">
      <h1 className="text-center  font-bold text-2xl pb-8 text-primary-yellow ">
        FAQ
      </h1>
      <ul ref={faqRef} className="border-t border-primary-yellow">
        {FAQ_Api.map((faq) => (
          <li key={faq.id} className="border-b border-primary-yellow py-2">
            <div className="  flex justify-between items-center">
              <div>
                <span className="text-2xl text-primary-yellow font-bold">
                  {faq.id}.
                </span>
                <span className="md:pl-8 font-bold">{faq.ques}</span>
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
    </section>
  );
}
