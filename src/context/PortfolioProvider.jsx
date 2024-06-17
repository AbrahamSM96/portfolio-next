import { useLocaleTranslate } from "@hooks/useLocaleTranslate";
import { useFetchAPI } from "@hooks/useFetchAPI";

import { PortfolioContext } from "./PortfolioContext";
import { useDarkTheme } from "@hooks/useDarkTheme";
import { useState } from "react";

export default function PortfolioProvider({ children }) {
  const translate = useLocaleTranslate();

  const [primaryColor, setPrimaryColor] = useState("#ffff");

  const { data, load, error } = useFetchAPI();
  const { switchTheme, theme } = useDarkTheme();

  let sharedState = {
    data,
    load,
    error,
    translate,
    switchTheme,
    theme,
    setPrimaryColor,
    primaryColor,
  };

  return (
    <PortfolioContext.Provider value={sharedState}>
      {children}
    </PortfolioContext.Provider>
  );
}
