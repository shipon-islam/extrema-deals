import { createContext, useContext, useReducer } from "react";
const SideBarToggleContext = createContext();

//context receive and provide other
export const UseToggleContext = () => {
  return useContext(SideBarToggleContext);
};
//intialstate of context
const initialState = { isToggle: false };
//handle all action
const reducer = (state, action) => {
  if (action.type === "DEALS") {
    return { isToggle: false };
  }
  if (action.type === "GERENOVEERD") {
    return { isToggle: true };
  }
  throw Error("Unknown action.");
};
export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SideBarToggleContext.Provider value={{ state, dispatch }}>
      {children}
    </SideBarToggleContext.Provider>
  );
}
