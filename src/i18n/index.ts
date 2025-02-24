import English from "./en.json";
import Spanish from "./es.json";

const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18N = ({
  currentLocale,
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANGUAGES.ENGLISH) return English;
  if (currentLocale === LANGUAGES.SPANISH) return Spanish;
  return Spanish;
};
