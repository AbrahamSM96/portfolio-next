import { useContext } from "react";

import { PortfolioContext } from "@context/PortfolioContext";

export function useI18n() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("useI18N must be used within a I18NProvider");
  }
  return context;
}
