import { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { bubblesApi, categories } from "../constant";
import { UseToggleContext } from "../context/ContextProvider";

export default function DealsSidebar() {
  const selectRef = useRef(null);
  const [bubbles, setBubbles] = useState(bubblesApi);
  const { dispatch } = UseToggleContext();
  //remove bubble
  const bubbleRemoveHandler = (selectId) => {
    const newBubbles = bubbles.filter(
      (currBubble) => currBubble.id !== selectId
    );
    setBubbles(newBubbles);
  };

  const handleCategoryChange = (e) => {
    const isChecked = e.target.checked;
    const categoryParent = e.target.parentElement;
    if (isChecked) {
      categoryParent.classList.add("text-primary-yellow");
    } else {
      categoryParent.classList.remove("text-primary-yellow");
    }
  };
  const handleSubCatChange = (e) => {
    const isChecked = e.target.checked;
    const categoryParent = e.target.parentElement;
    if (isChecked) {
      categoryParent.classList.add("text-primary-yellow");
    } else {
      categoryParent.classList.remove("text-primary-yellow");
    }
  };
  const handleArrowBtn = (e) => {
    const subCategory = e.currentTarget.parentElement.nextElementSibling;
    console.log(subCategory);
    subCategory.classList.toggle("hidden");
  };
  const handleSortlist = (e) => {
    selectRef.current.classList.toggle("hidden");
    const parentElement = e.target.parentElement.parentElement;
    parentElement.firstChild.innerText = e.target.innerText;
  };

  return (
    <div className="bg-primary-yellow py-10">
      <div className="bg-primary-white grid grid-cols-2 w-[17rem] sm:w-[19rem] md:w-[18rem] rounded-xl  mx-auto mt-5 ">
        <button
          onClick={() => dispatch({ type: "DEALS" })}
          className=" rounded-xl font-bold text-base py-3"
        >
          DEALS
        </button>
        <button
          onClick={() => dispatch({ type: "GERENOVEERD" })}
          className="bg-primary-black text-primary-yellow rounded-xl font-bold text-base py-3"
        >
          GERENOVEERD
        </button>
      </div>
      <p className="w-[17rem] sm:w-[30rem] md:w-full mx-auto sm:px-8 text-center text-primary-black mt-9 font-roboto">
        Ontdek bij Extrema Deals onze exclusieve selectie van gerenoveerde
        items. Elk stuk is deskundig hersteld en vernieuwd, waarbij de
        oorspronkelijke charme behouden blijft. Van vintage vondsten en antieke
        schatten tot retro parels en moderne klassiekers, onze gerenoveerde
        collectie biedt kwaliteit en uniciteit. Verras jezelf met iets speciaals
        dat zowel duurzaam als stijlvol is.
      </p>
      <hr className="border-2 border-[#272A2F] w-[30%] sm:w-[10rem] md:w-[9rem] mx-auto mt-5" />
      <div className="w-fit mx-auto mt-8 ">
        <div
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className="w-[17rem] sm:w-[19rem] md:w-[18.75rem] h-10 flex rounded-xl overflow-hidden"
        >
          <input
            className="block w-full h-full focus:outline-none focus:border-none pl-6"
            type="search"
            placeholder="Zoek"
          />
          <button
            style={{
              background: "linear-gradient(180deg, #272A2F 0%, #0E1012 100%)",
            }}
            className="h-full block bg-primary-black px-[0.6rem] text-primary-yellow"
          >
            <BiSearch className="text-2xl" />
          </button>
        </div>

        <div className="relative h-10">
          <div
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-[17rem] sm:w-[19rem] md:w-[18.75rem] h-10 rounded-xl mt-4 flex overflow-hidden border-2 border-secondary-black"
          >
            <span className="block h-full w-full bg-primary-white pl-6 py-1.5 text-gray-500">
              Sorteer op...
            </span>
            <button
              style={{
                background: "linear-gradient(180deg, #272A2F 0%, #0E1012 100%)",
              }}
              onClick={() => selectRef.current.classList.toggle("hidden")}
              className="h-full block  px-2 text-primary-yellow"
            >
              <IoIosArrowDown className="inline-block text-2xl" />
            </button>
            <ul
              ref={selectRef}
              className="absolute bg-primary-white top-10 min-h-[5rem] w-full rounded-lg px-4 py-2 z-10 font-roboto hidden"
            >
              <li
                onClick={handleSortlist}
                className="py-2 px-2.5 rounded-md cursor-pointer hover:bg-primary-yellow"
              >
                Prijs: Laag naar Hoog
              </li>
              <li
                onClick={handleSortlist}
                className="py-2 px-2.5 rounded-md cursor-pointer hover:bg-primary-yellow"
              >
                Prijs: Hoog naar Laag
              </li>
              <li
                onClick={handleSortlist}
                className="py-2 px-2.5 rounded-md cursor-pointer hover:bg-primary-yellow"
              >
                Nieuwste Eerst
              </li>
              <li
                onClick={handleSortlist}
                className="py-2 px-2.5 rounded-md cursor-pointer hover:bg-primary-yellow"
              >
                Oudste Eerst
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 w-[17rem] sm:w-[19rem] md:w-[18.75rem] mx-auto text-primary-white flex  flex-wrap gap-x-2 gap-y-5">
        {bubbles.map((item) => (
          <div
            key={item.id}
            style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.25)" }}
            className="max-w-1/2 flex items-center gap-x-2 bg-secondary-black py-2 rounded-xl pl-4 pr-2 font-semibold font-roboto justify-between text-[12px] md:text-sm "
          >
            <span className="cursor-pointer">{item.name}</span>
            <span
              onClick={() => bubbleRemoveHandler(item.id)}
              className="cursor-pointer"
            >
              <AiFillCloseCircle className="text-xl md:text-2xl" />
            </span>
          </div>
        ))}
      </div>

      <div className="bg-[#272A2FE5] w-[17rem] mx-auto mt-8 rounded-3xl py-8 sm:w-[19rem] md:w-[18rem] pr-10 sm:h-[35rem]">
        <div className="px-8 h-[20rem]  overflow-y-scroll sidebar-scroll">
          <h1 className="text-primary-white font-bold text-lg ">CATEGORIEËN</h1>
          <ul className="font-roboto mt-3 ">
            {categories.map((cat) => (
              <li className="mb-3" key={cat.id}>
                <div className="text-primary-white flex items-center">
                  <input
                    className="accent-primary-yellow w-4 h-4"
                    type="checkbox"
                    value={cat.category}
                    onChange={handleCategoryChange}
                  />
                  <span className="font-medium ml-2">{cat.category}</span>
                  {cat.subcategories.length > 0 && (
                    <button onClick={handleArrowBtn}>
                      <IoIosArrowDown className="inline-block text-lg ml-1" />
                    </button>
                  )}
                </div>
                <ul className="ml-6 hidden">
                  {cat.subcategories.length > 0 &&
                    cat.subcategories.map((subcat, index) => (
                      <li key={index}>
                        <div className="text-primary-white flex items-center">
                          <input
                            className="accent-primary-yellow w-4 h-4"
                            type="checkbox"
                            value={subcat}
                            onChange={handleSubCatChange}
                          />
                          <span className="ml-2">{subcat}</span>
                        </div>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
