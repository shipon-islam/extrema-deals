import { createContext, useContext, useState } from "react";

const SideBarToggleContext = createContext();
export const UseToggleContext = () => {
  return useContext(SideBarToggleContext);
};
export default function ContextProvider({ children }) {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggler = (selectName) => {
    if (selectName === "DEALS") {
      setIsToggle(false);
    }
    if (selectName === "GERENOVEERD") {
      setIsToggle(true);
    }
  };
  return (
    <SideBarToggleContext.Provider value={{ handleToggler, isToggle }}>
      {children}
    </SideBarToggleContext.Provider>
  );
}
