import { createContext, useEffect, useReducer } from "react";
import { json } from "react-router-dom";
export const DarkMode = createContext();

function reduser(state, { type, peyload }) {
  console.log(peyload);
  switch (type) {
    case "CHANGE-MODE":
      localStorage.setItem("darkmode", JSON.stringify(!state.darkmode));
      return { ...state, darkmode: !state.darkmode };
    case "CHANGE-til":
      localStorage.setItem("til", JSON.stringify(peyload));
      return { ...state, lanuage: peyload };
  }
}
export function Provider({ children }) {
  const [state, distpach] = useReducer(reduser, {
    darkmode: JSON.parse(localStorage.getItem("darkmode")) ?? false,
    lanuage: JSON.parse(localStorage.getItem("til")) ?? "uz",
  });
  useEffect(() => {
    if (state.darkmode) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  });
  function CHANGEMODE() {
    return distpach({ type: "CHANGE-MODE" });
  }
  function til(params) {
    return distpach({ type: "CHANGE-til", peyload: `${params}` });
  }
  return (
    <DarkMode.Provider value={{ state, CHANGEMODE, til }}>
      {children}
    </DarkMode.Provider>
  );
}
