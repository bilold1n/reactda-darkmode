import { createContext, useReducer } from "react";
export const DarkMode = createContext();

function reduser(state, { type, peyload }) {
  console.log(peyload);
  switch (type) {
    case "CHANGE-MODE":
      return { ...state, darkmode: !state.darkmode, lanuage: peyload };
  }
}
export function Provider({ children }) {
  const [state, distpach] = useReducer(reduser, {
    darkmode: false,
    lanuage: "uz",
  });
  function CHANGEMODE() {
    return distpach({ type: "CHANGE-MODE" });
  }
  function til(params) {
    return distpach({ peyload: `${params}` });
  }
  return (
    <DarkMode.Provider value={{ state, CHANGEMODE, til }}>
      {children}
    </DarkMode.Provider>
  );
}
