import { createContext, useContext, useCallback } from "react";
import { useRouter } from "next/router";
// import { useFetchAPI } from "@hooks/useFetchAPI";
import en from "@i18n/en.json";
import es from "@i18n/es.json";
const languages = { es, en };

const AppContext = createContext();
export function ContextWrapper({ children }) {
  const { locale } = useRouter();
  // const initialStateTheme = { darkmode: false };

  // const themeReducer = (state, action) => {
  //   switch (action.type) {
  //     case "LI"
  //   }
  // }

  const translate = useCallback(
    (key, ...args) => {
      let translation = languages[locale][key];
      if (args.length === 0) return translation;
    },
    [locale]
  );

  // const { data, load, error } = useFetchAPI();
  let sharedState = {
    // data,
    // load,
    // error,
    translate,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export function useI18N() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useI18N must be used within a I18NProvider");
  }
  return context;
}
