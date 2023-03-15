import { useRouter } from "next/router";
import { useCallback } from "react";

import en from "@i18n/en.json";
import es from "@i18n/es.json";

export function useLocaleTranslate() {
  const { locale } = useRouter();

  const languages = { es, en };

  const translate = useCallback(
    (key, ...args) => {
      let translation = languages[locale][key];
      if (args.length === 0) return translation;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

  return translate;
}
