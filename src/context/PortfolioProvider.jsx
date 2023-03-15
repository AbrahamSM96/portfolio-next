import { useLocaleTranslate } from "@hooks/useLocaleTranslate";
import { useFetchAPI } from "@hooks/useFetchAPI";

import { PortfolioContext } from "./PortfolioContext";
import { useDarkTheme } from "@hooks/useDarkTheme";

export default function PortfolioProvider({ children }) {
  const translate = useLocaleTranslate();

  const { data, load, error } = useFetchAPI();
  const { switchTheme, theme } = useDarkTheme();
  let sharedState = {
    data,
    load,
    error,
    translate,
    switchTheme,
    theme,
  };

  return (
    <PortfolioContext.Provider value={sharedState}>
      {children}
    </PortfolioContext.Provider>
  );
}
